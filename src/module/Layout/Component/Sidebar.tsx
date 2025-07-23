import React, { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import octIcon from "../../../assets/Icon/faviconoct3.png";
import { CommonMenu, IMenuItem } from "./modules";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../../helpers";

const Sidebar = () => {
  const [sidebarClose, setSidebarClose] = useState(false);
  const { pathname } = useLocation();
  return (
    <div
      className={cn("relative h-full tran duration-300 ease-linear translate-x-0 flex flex-col ", {
        "w-[200px]": !sidebarClose,
        "w-[90px]": sidebarClose,
      })}
    >
      {/* <div
        className={cn(
          "absolute top-[50px] w-6 h-6 border rounded-full bg-blue-200 flex items-center justify-center left-[85%]",
          {
            "": sidebarClose,
            "left-[93%]": !sidebarClose,
          }
        )}
        onClick={() => setSidebarClose(!sidebarClose)}
      >
        {sidebarClose ? (
          <ChevronRight className="text-white w-5 h-5" />
        ) : (
          <ChevronLeft className="text-white w-5 h-5" />
        )}
      </div> */}

      <div
        className={cn("w-full h-[60px] flex items-center justify-between space-x-2", {
          "justify-center": sidebarClose,
        })}
        style={{ padding: "10px" }}
      >
        {/* <img src={octIcon} alt="octIcon" className="w-8 h-8" /> */}
        <h1
          className={cn("text-white text-sm font-semibold flex break-words", {
            hidden: sidebarClose,
          })}
        >
          Assignment
        </h1>
      </div>
      <div className="w-full flex-1 ">
        <ul className="w-full space-y-4 mt-2">
          {CommonMenu?.map((cur: IMenuItem, index: number) => (
            <li className="text-white text-xs font-normal px-5" key={index}>
              <Link to={cur?.path} className={cn("flex items-center gap-2", { "flex-col gap-0": sidebarClose })}>
                <div className={cn("flex items-center")}>
                  {cur?.iconName(cn("text-white w-6 h-6", { "text-gold-text": cur?.path === pathname }))}
                </div>
                <div
                  className={cn("text-sm", {
                    "text-gold-text font-bold underline underline-offset-8": cur?.path === pathname,
                  })}
                >
                  {cur?.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-[50px] flex items-center justify-center"></div>
    </div>
  );
};

export default Sidebar;
