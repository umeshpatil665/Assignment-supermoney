import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { CommonMenu } from "./modules";
import { LayoutDashboard } from "lucide-react";
import SideBarSheet from "./SideBarSheet";

const Header = () => {
  const { pathname } = useLocation();

  const menuOptions = [...CommonMenu];
  const heading = useMemo(() => {
    for (const cur of menuOptions) {
      if (cur.options && cur.options.length > 0) {
        for (const ind of cur.options) {
          if (ind.path && pathname === ind.path) {
            return `${cur.name}/${ind.name}`;
          }
        }
      } else if (cur.path && pathname.includes(cur.path)) {
        return cur.name;
      }
    }
    return ""; // Default case if no match found
  }, [menuOptions, pathname]);
  return (
    <div className="h-[60px] w-full md:px-10 px-4 flex justify-between items-center">
      <div className="flex space-x-4 items-center">
        <div className="flex md:hidden">
          <SideBarSheet />
        </div>
        <div className="text-xl font-normal">{heading}</div>
      </div>
    </div>
  );
};

export default Header;
