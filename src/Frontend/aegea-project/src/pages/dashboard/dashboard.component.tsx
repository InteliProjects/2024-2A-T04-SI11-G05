import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useState } from "react";
import { DrawerDemo } from "@/components/drawer/drawer.component";
import { ChartComponent } from "@/components/chart/chart.component";
import { useGlobalState } from "@/global-state-provider";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("account");
  const { data } = useGlobalState();

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const getTabStyle = (value: string) => {
    return value === activeTab
      ? "bg-blue-500 text-white"
      : "bg-gray-200 text-black";
  };

  return (
    <div className="flex w-full flex-col md:flex-row gap-4">
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
            Fraudes
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className={`${getTabStyle(
              "password"
            )} p-2 rounded-tl-none rounded-bl-none rounded-r-md transition-colors duration-1000 ease-in-out`}
          >
            Consumo
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          {data && (
            <ChartComponent
              type="fraude"
              data={data.big_numbers_by_referencia}
            />
          )}
        </TabsContent>
        <TabsContent value="password">
          {data && (
            <ChartComponent
              type="consumo"
              data={data.big_numbers_by_referencia}
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Dashboard;
