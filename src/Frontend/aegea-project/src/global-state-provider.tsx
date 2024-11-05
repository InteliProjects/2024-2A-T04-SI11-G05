import React, { createContext, useContext, useState, ReactNode } from "react";
import { Preprocessed } from "./app.types";

// Define the response interface
export interface PreprocessResponse {
  processed_data: Preprocessed[];
  fraude_mean_by_category: Category[];
  consumo_mean_by_category: Category[];
  big_numbers_by_referencia: Month[];
  cons_medido_mean_fraude: number;
  fraude_mean: number;
  matricula_consumption_data: Data[];
}

export interface Data {
  matricula: number;
  consumo_by_referencia: ConsumoByReferencum[];
}

export interface ConsumoByReferencum {
  referencia: string;
  consumo: number;
}

interface Category {
  category: string;
  consumo: number;
  fraude: number;
}


export interface Month {
  referencia: string;
  consumo_mean_fraude: number;
  consumo_mean: number;
}

// Define the structure for the context
interface GlobalStateContextType {
  data: PreprocessResponse | null;
  setData: React.Dispatch<React.SetStateAction<PreprocessResponse | null>>;
}

// Create the context with default values
const GlobalStateContext = createContext<GlobalStateContextType | undefined>(
  undefined
);

// Create a custom hook to use the global state
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

// Define a provider to wrap the application
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<PreprocessResponse | null>(null);

  return (
    <GlobalStateContext.Provider value={{ data, setData }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
