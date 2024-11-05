import { DrawerDemo } from "@/components/drawer/drawer.component";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Separator } from "@/components/ui/separator";
import { useGlobalState } from "@/global-state-provider";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { StyledContent } from "../registers.styles";
import { chartConfig } from "../registers.utils";

export const Details = () => {
  const { id } = useParams();
  const { data } = useGlobalState();

  const filteredData = data?.processed_data.find(
    (m) => m.MATRICULA === Number(id)
  );

  const filteredSazonalData = data?.matricula_consumption_data.find(
    (m) => m.matricula === Number(id)
  )?.consumo_by_referencia;

  return (
    <div className="px-0 md:px-10 py-2">
      <DrawerDemo />
      <div className="flex md:flex-row flex-col justify-between">
        <div className="md:mb-10 flex flew-row align-bottom gap-5">
          <Link
            to="/perfis"
            className="flex justify-center items-center rounded-full mb-2 w-7 h-7 text-primary-foreground border border-muted-foreground"
          >
            <ArrowLeftIcon className="w-5 h-5 text-muted-foreground" />
          </Link>
          <span className="flex align-bottom justify-end items-end pb-2 text-muted-foreground text-2xl">
            {" "}
            Voltar para a lista de matrículas
          </span>
        </div>
        <span className="text-muted-foreground text-xl md:text-2xl">
          {filteredData?.FRAUDE === 1 ? "Possui histórico de fraudes" : "Não possui histórico de fraudes"}
        </span>
      </div>
      <div className="flex flex-col  mt-5 md:mt-0 justify-between gap-10">
        <div className="flex flex-row flex-wrap justify-between gap-5 md:gap-20">
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <strong className="text-muted-foreground text-2xl md:text-3xl font-bold">
              Categoria
            </strong>
            <span className="text-muted-foreground text-xl md:text-2xl">
              {filteredData?.CATEGORIA}
            </span>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <strong className="text-muted-foreground text-2xl md:text-3xl font-bold">
              Consumo
            </strong>
            <span className="text-muted-foreground text-xl md:text-2xl">
              {filteredData?.CONS_MEDIDO} m³
            </span>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-auto">
            <strong className="text-muted-foreground text-2xl md:text-3xl font-bold">
              Leitura
            </strong>
            <span className="text-muted-foreground text-xl md:text-2xl">
              {filteredData?.LTR_ATUAL}
            </span>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <strong className="text-muted-foreground text-2xl md:text-3xl font-bold">
              Localização
            </strong>
            <span className="text-muted-foreground text-xl md:text-2xl">
              {filteredData?.COD_LATITUDE}
            </span>
          </div>
        </div>
      </div>
      <Separator className="my-10" />
      <div className="flex flex-col justify-between">
        <div className="flex flex-row flex-wrap justify-between gap-5 md:gap-20">
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <strong className="text-muted-foreground text-2xl md:text-3xl font-bold">
              Dt. última leitura
            </strong>
            <span className="text-muted-foreground text-xl md:text-2xl">
              {moment(filteredData?.DAT_LEITURA).format("DD/MM/YYYY")}
            </span>
          </div>
          <div className="flex flex-row flex-wrap gap-10 md:gap-40">
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <strong className="text-muted-foreground text-2xl md:text-3xl font-bold">
                Cod. grupo
              </strong>
              <span className="text-muted-foreground text-xl md:text-2xl">
                {filteredData?.COD_GRUPO}
              </span>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <strong className="text-muted-foreground text-2xl md:text-3xl font-bold">
                Tipo ligação
              </strong>
              <span className="text-muted-foreground text-xl md:text-2xl">
                {filteredData?.TIPO_LIGACAO}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-10" />

      <span className="text-muted-foreground text-xl md:text-2xl">
        Consumo por mês da matrícula
      </span>

      <StyledContent className="flex flex-row justify-between mt-5">
        <ChartContainer config={chartConfig} className="min-h-[50px] w-full">
          <BarChart data={filteredSazonalData} accessibilityLayer>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="referencia"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("pt-BR", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="consumo" fill="var(--color-desktop)" radius={4} />
            {/* <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} /> */}
          </BarChart>
        </ChartContainer>
      </StyledContent>
    </div>
  );
};
