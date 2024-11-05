import { Button } from "@/components/ui/button";
import { DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import {
  DashboardIcon,
  MixerVerticalIcon,
  OpacityIcon,
  PersonIcon,
  TextAlignJustifyIcon,
} from "@radix-ui/react-icons";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { Link } from "react-router-dom";
import { ModeToggle } from "../toggle-theme/thoggle-theme.component";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Tooltip, TooltipContent, TooltipProvider } from "../ui/tooltip";

export function DrawerDemo() {
  return (
    <div>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <ModeToggle />
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className="flex justify-center items-center rounded-full w-10 h-10 text-muted-foreground hover:text-foreground"
                  to="/dashboard"
                >
                  <DashboardIcon />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className="flex justify-center items-center rounded-full mb-2 w-10 h-10 text-muted-foreground hover:text-foreground"
                  to="/perfis"
                >
                  <PersonIcon />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Matrículas</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className="flex justify-center items-center rounded-full mb-2 w-10 h-10 text-muted-foreground hover:text-foreground"
                  to="/criterios"
                >
                  <MixerVerticalIcon />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Critérios</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="mb-5" variant="outline">
              {" "}
              <TextAlignJustifyIcon className="w-50 h-50" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>
                  <div className="flex justify-center items-center rounded-full mb-2 w-10 h-10 text-primary-foreground bg-primary">
                    <OpacityIcon />
                  </div>
                </DrawerTitle>
              </DrawerHeader>
              <div className="p-4 pb-0 flex flex-row">
                <Link
                  className="flex justify-center items-center gap-2 flex-row text-primary"
                  to="/dashboard"
                >
                  <DashboardIcon />

                  <span>Dashboard</span>
                </Link>
              </div>
              <div className="p-4 pb-0 flex flex-row">
                <Link
                  className="flex justify-center items-center gap-2 flex-row text-primary"
                  to="/perfis"
                >
                  <PersonIcon />

                  <span>Matrículas</span>
                </Link>
              </div>
              <div className="p-4 pb-0 flex flex-row">
                <Link
                  className="flex justify-center items-center gap-2 flex-row text-primary"
                  to="/criterios"
                >
                  <MixerVerticalIcon />

                  <span>Critérios</span>
                </Link>
              </div>
              {/* 
              <DrawerFooter>
                <Button>Sair</Button>
              </DrawerFooter> */}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
