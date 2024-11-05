import { Preprocessed } from "@/app.types";
import { useMemo, useState } from "react";
import { replaceAccents, searchCharactersToIgnore } from "./registers.utils";

export const useRegisters = (data?: Preprocessed[]) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredRegisters = useMemo(() => {
    const cleanedValue = replaceAccents(searchValue).replace(
      searchCharactersToIgnore,
      ""
    );

    return (
      data?.filter((c) => {
        const dataCleanedValue = replaceAccents(String(c.MATRICULA)).replace(
          searchCharactersToIgnore,
          ""
        );
        const findCharacters = dataCleanedValue.match(
          RegExp(cleanedValue, "i")
        );

        return findCharacters;
      }) || []
    );
  }, [searchValue, data]);

  return { filteredRegisters, setSearchValue };
};
