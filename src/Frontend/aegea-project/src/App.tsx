import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { Component } from "./components/tooltip-demo/tooltip-demo";
import { Input } from "./components/ui/input";
import { PreprocessResponse, useGlobalState } from "./global-state-provider";

function App() {
  const { setData } = useGlobalState();
  const navigate = useNavigate();

  const [file, setFile] = useState(null);

  // Handle file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload a file!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post<PreprocessResponse>(
        "http://127.0.0.1:8000/preprocess/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setData(response.data);

      navigate("/dashboard");

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="flex w-full gap-4 h-[100vh] justify-center">
      <div className="grid w-full max-w-sm items-center gap-1.5 justify-center">
        <div className="flex flex-col">
          <label className="text-center text-2xl" htmlFor="picture">
            Bem vindo!
          </label>
          <label className="text-center" htmlFor="picture">
            Insira abaixo um arquivo csv que contenha as colunas a seguir para
            visualizar as análises em relação a fraudes:
          </label>
          <div className="pt-[5rem]">
            <Component />
          </div>
        </div>
        <Input id="picture" type="file" onChange={handleFileChange} />
        <button onClick={handleSubmit}>Upload</button>
      </div>
    </div>
  );
}

export default App;
