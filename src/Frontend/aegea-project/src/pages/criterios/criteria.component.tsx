import { DrawerDemo } from "@/components/drawer/drawer.component";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

export const Criteria = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-7">
      <DrawerDemo />
      <div className="flex flex-col gap-3 w-full">
        <strong className="text-muted-foreground sm:text-5xl text-3xl font-bold">
          Critérios utilizados para as previsões de fraudes
        </strong>
        <Separator className="my-4" />
        <strong className="text-muted-foreground sm:text-3xl text-2xl font-bold">
          Consumo médio X Consumo atual
        </strong>
        <strong className="text-muted-foreground text-1xl">Relevância</strong>
        <Progress value={22} />
        <Separator className="my-4" />
        <strong className="text-muted-foreground sm:text-3xl text-2xl font-bold">
          Consumo médio X Consumo atual
        </strong>
        <strong className="text-muted-foreground text-1xl">Relevância</strong>
        <Progress value={22} />
        <Separator className="my-4" />
        <strong className="text-muted-foreground sm:text-3xl text-2xl font-bold">
          Consumo médio X Consumo atual
        </strong>
        <strong className="text-muted-foreground text-1xl">Relevância</strong>
        <Progress value={22} />
        <Separator className="my-4" />
        <strong className="text-muted-foreground sm:text-3xl text-2xl font-bold">
          Consumo médio X Consumo atual
        </strong>
        <strong className="text-muted-foreground text-1xl">Relevância</strong>
        <Progress value={22} />
      </div>
    </div>
  );
};
