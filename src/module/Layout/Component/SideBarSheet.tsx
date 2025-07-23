import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import octIcon from "../../../assets/Icon/faviconoct3.png";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LayoutDashboard } from "lucide-react";
import { cn } from "@/helpers";
import { CommonMenu, IMenuItem } from "./modules";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
const SideBarSheet = () => {
    const [open,setOpen]=useState(false)
  const { pathname } = useLocation();
  return (
    <Sheet onOpenChange={()=>setOpen(!open)} open={open} >
      <SheetTrigger asChild >
        <Button variant="outline" onClick={()=>setOpen(!open)}>
          <LayoutDashboard className="w-8 h-8"/>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[250px] bg-green-bg md:hidden flex flex-col" side={'left'}>
        <SheetHeader >
            <div className="flex justify-center items-center space-x-2 mt-4">
            <img src={octIcon} alt="octIcon" className="w-7 h-7" />
          <h1
            className={cn(
              "text-white text-xs font-semibold flex break-words",
              {}
            )}
          >
            Orangecurrent Technology
          </h1>
            </div>

        </SheetHeader>

        <div className="w-full flex-1 mt-6">
          <ul className="w-full space-y-4 mt-2">
            {CommonMenu?.map((cur: IMenuItem, index: number) => (
              <li className="text-white text-xs font-normal px-5" key={index} >
                <Link to={cur?.path} className={cn("flex items-center gap-2")} onClick={()=>setOpen(!open)}>
                  <div className={cn("flex items-center")}>
                    {cur?.iconName(
                      cn("text-white w-6 h-6", {
                        "text-gold-text": cur?.path === pathname,
                      })
                    )}
                  </div>
                  <div
                    className={cn("text-sm", {
                      "text-gold-text font-bold underline underline-offset-8":
                        cur?.path === pathname,
                    })}
                  >
                    {cur?.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <SheetFooter>
          {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SideBarSheet;
