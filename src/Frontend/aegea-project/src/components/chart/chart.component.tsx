"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Month } from "@/global-state-provider";

export const description = "An interactive bar chart";

const chartConfig = {
  views: {
    label: "Page Views",
  },
  "2018": {
    label: "2018",
    color: "hsl(var(--chart-1))",
  },
  "2019": {
    label: "2019",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

interface ChartProps {
  data: Month[];
  type: "fraude" | "consumo";
}

export function ChartComponent({ data, type }: ChartProps) {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("2019");

  const getYearsFromData = (data: Month[]): string[] => {
    const yearsSet = new Set<string>();
    data.forEach((item) => {
      const year = new Date(item.referencia).getFullYear().toString();
      yearsSet.add(year);
    });
    return Array.from(yearsSet);
  };

  const years = getYearsFromData(data);

  return (
    <Card className="mt-10">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row justify-between">
        <div className="flex flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>
            {type === "fraude" ? "Fraudes por ano" : "Consumo fraudado por ano"}
          </CardTitle>
          <CardDescription>
            {type === "fraude"
              ? "O índice de fraudes é o cálculo da média de fraudes presentes na."
              : "O consumo fraudado é calculado com base nas matrículas que cometeram fraude durante o período identificado."}
          </CardDescription>
        </div>
        <div className="flex">
          {years.map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="font-bold leading-none text-xs md:text-3xl">
                  {data.reduce((acc, item) => {
                    const year = new Date(item.referencia)
                      .getFullYear()
                      .toString();
                    if (year === chartConfig[chart].label) {
                      acc +=
                        type === "fraude"
                          ? item["consumo_mean_fraude"]
                          : item["consumo_mean"];
                    }
                    return acc;
                  }, 0)}{" "}
                  {type === "fraude" ? "" : "m³"}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[25rem] w-full"
        >
          <BarChart
            accessibilityLayer
            data={data.filter((item) => {
              const year = new Date(item.referencia).getFullYear().toString();
              return year === activeChart;
            })}
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
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("pt-BR", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey={
                    type === "fraude" ? "consumo_mean_fraude" : "consumo_mean"
                  }
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar
              dataKey={
                type === "fraude" ? "consumo_mean_fraude" : "consumo_mean"
              }
              fill={`var(--color-${activeChart})`}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
