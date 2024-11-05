import { DrawerDemo } from "@/components/drawer/drawer.component";
import { Button } from "@/components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGlobalState } from "@/global-state-provider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import moment from "moment";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { useRegisters } from "./registers.hook";
import { StyledContent } from "./registers.styles";
import { chartConfig } from "./registers.utils";
import { columns } from "./registers.grid";

export interface Obj {
  CATEGORIA_COMERCIAL: number;
  CATEGORIA_INDUSTRIAL: number;
  CATEGORIA_PUBLICA: number;
  CATEGORIA_RESIDENCIAL: number;
  CONS_MEDIDO: number;
  MATRICULA: number;
  REFERENCIA: string;
  FRAUDE: string;
}

export interface ChartObj {
  fraudado: number;
  consumo: number;
  data: string;
}

export function Registers() {
  const { data } = useGlobalState();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("account");
  const { filteredRegisters, setSearchValue } = useRegisters(
    data?.processed_data
  );

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const getTabStyle = (value: string) => {
    return value === activeTab
      ? "bg-blue-500 text-white"
      : "bg-gray-200 text-black";
  };

  const preprocessed = columns(navigate);

  const table = useReactTable({
    data: filteredRegisters,
    columns: preprocessed,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="flex w-full flex-col sm:flex-row gap-4">
      <DrawerDemo />
      <Tabs
        className="w-full"
        value={activeTab}
        onValueChange={handleTabChange}
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="account"
            className={`${getTabStyle(
              "account"
            )} p-2 rounded-tr-none rounded-br-none rounded-l-md transition-colors duration-1000 ease-in-out`}
          >
            Painel de dados
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className={`${getTabStyle(
              "password"
            )} p-2 rounded-tl-none rounded-bl-none rounded-r-md transition-colors duration-1000 ease-in-out`}
          >
            Matrículas
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <StyledContent className="flex flex-col md:flex-row justify-between mt-10 md:mb-0 mb-40 gap-5">
            <div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col w-full md:w-40">
                  <strong className="text-muted-foreground text-2xl md:text-3xl font-bold">
                    Consumo fraudado
                  </strong>
                  <span className="text-muted-foreground text-xl md:text-2xl">
                    {data?.cons_medido_mean_fraude} m³
                  </span>
                </div>
                <Separator className="my-4" />
                <div className="flex flex-row flex-wrap justify-between gap-5 md:gap-20">
                  <div className="flex flex-col w-full md:w-40">
                    <strong className="text-muted-foreground text-2xl md:text-3xl font-bold">
                      Fraudes
                    </strong>
                    <span className="text-muted-foreground text-xl md:text-2xl">
                      {data?.fraude_mean} %
                    </span>
                  </div>
                  {/* <div className="flex flex-col w-40">
          <strong className="text-muted-foreground text-3xl font-bold">
            Dado
          </strong>
          <span className="text-muted-foreground text-2xl">
            XXXXXXXXXXXX
          </span>
        </div> */}
                </div>
              </div>
            </div>
            {data && (
            <ChartContainer
              config={chartConfig}
              className="min-h-[200px] w-full"
            >
          
                <BarChart
                  accessibilityLayer
                  data={data.fraude_mean_by_category}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="category"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="fraude"
                    fill="var(--color-desktop)"
                    radius={4}
                  />
                </BarChart>
       
            </ChartContainer>
                   )}
          </StyledContent>

          <div className="flex flex-col  justify-between sm:mt-10 gap-5 mt-20">
            <span className="text-muted-foreground text-xl md:text-2xl">
              Consumo médio X Consumo fraudado
            </span>
            <ChartContainer className="w-full h-[20rem]" config={chartConfig}>
              <LineChart
                accessibilityLayer
                data={data?.big_numbers_by_referencia}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="referencia"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => moment(value).format("MM/YY")}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Line
                  dataKey="consumo_mean"
                  type="linear"
                  stroke="var(--color-desktop)"
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  dataKey="consumo_mean_fraude"
                  type="linear"
                  stroke="#60a5fa"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </TabsContent>

        <TabsContent value="password" className="mt-3">
          <div className="w-[15rem]">
            <Input
              placeholder="Matrícula"
              id="matricula"
              onInput={(evt) => {
                setSearchValue(evt.currentTarget.value ?? "");
              }}
            />
          </div>
          <Table className="mt-2">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Anterior
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Próximo
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
