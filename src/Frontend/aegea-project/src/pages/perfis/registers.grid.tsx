import { Preprocessed } from "@/app.types";
import { Button } from "@radix-ui/themes";
import { ColumnDef } from "@tanstack/react-table";
import { NavigateFunction } from "react-router-dom";
import { BoxIcon, CheckboxIcon } from "@radix-ui/react-icons";

export const columns = (
  navigate: NavigateFunction
): ColumnDef<Preprocessed>[] => {
  return [
    {
      header: "Detalhes",
      cell: ({ row }) => {
        return (
          <Button onClick={() => navigate(`${row.original.MATRICULA}`)}>
            Detalhes
          </Button>
        );
      },
    },
    {
      accessorKey: "CATEGORIA",
      header: "CATEGORIA",
    },
    {
      accessorKey: "MATRICULA",
      header: "MATRICULA",
    },
    {
      accessorKey: "CONS_MEDIDO",
      header: "CONS_MEDIDO",
    },
    {
      accessorKey: "FRAUDE",
      header: "FRAUDE",
      cell: ({ row }) => {
        return row.original.FRAUDE === 1 ? <CheckboxIcon /> : <BoxIcon />;
      },
    },
    {
      accessorKey: "LTR_COLETADA",
      header: "LTR_COLETADA",
    },
  ];
};
