import { ContactRound, LayoutDashboard, PlaneTakeoff, User, UserCircle } from "lucide-react";

export interface IMenuItem {
  name: string;
  iconName: any;
  path: string;
  options?: Array<{
    name: string;
    iconName: any;
    path: string;
  }>;
}

export const CommonMenu: IMenuItem[] = [
  {
    name: "User List",
    iconName: (className: string) => <UserCircle size={14} className={className} />,
    path: "/users",
  },
  {
    name: "Add Users",
    iconName: (className: string) => <User size={14} className={className} />,
    path: "/add-user",
  },
];
