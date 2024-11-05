"use client";

import * as React from "react";
import {
  binaryCols,
  categoricalCols,
  numericCols,
  otherNumericCols,
} from "@/App.utils";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export function Component() {
  return (
    <div className="flex aspect-video w-full max-w-md justify-center text-foreground [&>div]:relative [&>div]:flex [&>div]:h-[137px] [&>div]:w-[224px] [&>div]:items-center [&>div]:justify-center [&>div]:p-4">
      <div>
        <div className="md:flex hidden ">
          <div className="absolute left-[-70px] top-[30px] z-10 text-sm font-medium">
            Numéricas
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 193 40"
            width="50"
            height="12"
            fill="none"
            className="absolute left-[-30px] top-[50px] z-10"
          >
            <g clip-path="url(#a)">
              <path
                fill="currentColor"
                d="M173.928 21.13C115.811 44.938 58.751 45.773 0 26.141c4.227-4.386 7.82-2.715 10.567-1.88 21.133 5.64 42.9 6.266 64.457 7.101 31.066 1.253 60.441-5.848 89.183-17.335 1.268-.418 2.325-1.253 4.861-2.924-14.582-2.924-29.165 2.089-41.845-3.76.212-.835.212-1.879.423-2.714 9.51-.627 19.231-1.253 28.742-2.089 9.51-.835 18.808-1.88 28.318-2.506 6.974-.418 9.933 2.924 7.397 9.19-3.17 8.145-7.608 15.664-11.623 23.391-.423.836-1.057 1.88-1.902 2.298-2.325.835-4.65 1.044-7.186 1.67-.422-2.088-1.479-4.386-1.268-6.265.423-2.506 1.902-4.595 3.804-9.19Z"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="currentColor" d="M0 0h193v40H0z" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col md:flex-row">
          <TooltipDemo
            label="Numéricas"
            hideLabel
            payload={numericCols.map((col) => {
              return { name: col, fill: "hsl(var(--chart-3))" };
            })}
            className="w-full"
          />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex justify-center items-center rounded-full w-10 h-10 text-muted-foreground hover:text-foreground">
                  ...
                </div>
              </TooltipTrigger>
              <TooltipContent
                className="bg-slate-950 border-white"
                side="right"
              >
                <TooltipDemo
                  label="Numéricas"
                  hideLabel
                  payload={otherNumericCols.map((col) => {
                    return { name: col, fill: "hsl(var(--chart-3))" };
                  })}
                  className="w-full bg-slate-950 border-0"
                />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="items-end">
        <div className="md:flex hidden ">
          <div className="absolute left-[122px] top-[0px] z-10 text-sm font-medium">
            Binárias
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="42"
            fill="none"
            viewBox="0 0 122 148"
            className="absolute left-[85px] top-[10px] z-10 -scale-x-100"
          >
            <g clip-path="url(#ab)">
              <path
                fill="currentColor"
                d="M0 2.65c6.15-4.024 12.299-2.753 17.812-.847a115.56 115.56 0 0 1 21.84 10.59C70.4 32.727 88.849 61.744 96.483 97.54c1.908 9.108 2.544 18.639 3.817 29.017 8.481-4.871 12.934-14.402 21.416-19.909 1.061 4.236-1.06 6.989-2.756 9.319-6.998 9.531-14.207 19.062-21.63 28.382-3.604 4.448-6.36 4.871-10.177 1.059-8.058-7.837-12.935-17.368-14.42-28.382 0-.424.636-1.059 1.485-2.118 9.118 2.33 6.997 13.979 14.843 18.215 3.393-14.614.848-28.593-2.969-42.149-4.029-14.19-9.33-27.746-17.812-39.82-8.27-11.86-18.66-21.392-30.11-30.287C26.93 11.758 14.207 6.039 0 2.65Z"
              />
            </g>
            <defs>
              <clipPath id="ab">
                <path fill="currentColor" d="M0 0h122v148H0z" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col gap-5">
          <TooltipDemo
            label="Binárias (0 ou 1)"
            hideLabel
            payload={binaryCols.map((col) => {
              return { name: col, fill: "hsl(var(--chart-4))" };
            })}
            indicator="dashed"
            className="w-[8rem]"
          />

          <TooltipDemo
            label="Data"
            payload={[{ name: "REFERENCIA", fill: "hsl(var(--chart-1))" }]}
            className="w-[9rem]"
            indicator="line"
          />
        </div>
      </div>

      <div className="!items-start !justify-start">
        <TooltipDemo
          label="Categóricas"
          hideLabel
          payload={categoricalCols.map((col) => {
            return { name: col, fill: "hsl(var(--chart-2))" };
          })}
          indicator="dot"
          className="w-[8rem]"
        />
        <div className="md:flex hidden ">
          <div className="absolute left-[122px] top-[0px] z-10 text-sm font-medium">
            Categóricas
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="42"
            fill="none"
            viewBox="0 0 122 148"
            className="absolute left-[85px] top-[10px] z-10 -scale-x-100"
          >
            <g clip-path="url(#ab)">
              <path
                fill="currentColor"
                d="M0 2.65c6.15-4.024 12.299-2.753 17.812-.847a115.56 115.56 0 0 1 21.84 10.59C70.4 32.727 88.849 61.744 96.483 97.54c1.908 9.108 2.544 18.639 3.817 29.017 8.481-4.871 12.934-14.402 21.416-19.909 1.061 4.236-1.06 6.989-2.756 9.319-6.998 9.531-14.207 19.062-21.63 28.382-3.604 4.448-6.36 4.871-10.177 1.059-8.058-7.837-12.935-17.368-14.42-28.382 0-.424.636-1.059 1.485-2.118 9.118 2.33 6.997 13.979 14.843 18.215 3.393-14.614.848-28.593-2.969-42.149-4.029-14.19-9.33-27.746-17.812-39.82-8.27-11.86-18.66-21.392-30.11-30.287C26.93 11.758 14.207 6.039 0 2.65Z"
              />
            </g>
            <defs>
              <clipPath id="ab">
                <path fill="currentColor" d="M0 0h122v148H0z" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TooltipDemo({
  indicator = "dot",
  label,
  payload,
  hideLabel,
  hideIndicator,
  className,
}: {
  label: string;
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "line" | "dot" | "dashed";
  payload: {
    name: string;
    fill: string;
  }[];
  nameKey?: string;
  labelKey?: string;
} & React.ComponentProps<"div">) {
  const tooltipLabel = hideLabel ? null : (
    <div className="font-medium">{label}</div>
  );

  if (!payload?.length) {
    return null;
  }

  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <div
      className={cn(
        "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl transition-all ease-in-out hover:-translate-y-0.5",
        className
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const indicatorColor = item.fill;

          return (
            <div
              key={index}
              className={cn(
                "flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                indicator === "dot" && "items-center"
              )}
            >
              <>
                {!hideIndicator && (
                  <div
                    className={cn(
                      "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                      {
                        "h-2.5 w-2.5": indicator === "dot",
                        "w-1": indicator === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent":
                          indicator === "dashed",
                        "my-0.5": nestLabel && indicator === "dashed",
                      }
                    )}
                    style={
                      {
                        "--color-bg": indicatorColor,
                        "--color-border": indicatorColor,
                      } as React.CSSProperties
                    }
                  />
                )}
                <div
                  className={cn(
                    "flex flex-1 justify-between leading-none",
                    nestLabel ? "items-end" : "items-center"
                  )}
                >
                  <div className="grid gap-1.5">
                    {nestLabel ? tooltipLabel : null}
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                </div>
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
}
