"use client";

import {
  BookImage,
  ChartNoAxesColumn,
  House,
  LucideIcon,
  Plane,
  User,
  UtensilsCrossed,
} from "lucide-react";
import ButtonSidebar from "./ui/button-sidebar";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  type TLinks = {
    id: string;
    name: string;
    icon?: LucideIcon;
    link: string;
    childrem?: TLinks[];
  };

  const pathname = usePathname();

  const mainLinks: TLinks[] = [
    { id: "1", name: "Dashboard", icon: House, link: "/dashboard" },
    { id: "2", name: "Table", icon: ChartNoAxesColumn, link: "/tasks" },
  ];

  const accountLinks: TLinks[] = [
    // { id: "3", name: "Profile", icon: User, link: "/profile" },
    { id: "4", name: "Sign In", icon: BookImage, link: "/signin" },
    { id: "5", name: "Sign Up", icon: Plane, link: "/signup" },
  ];

  return (
    <aside className="fixed top-0 w-[250px] h-screen m-4 p-6 space-y-6 text-white z-50">
      <h1 className="text-lg font-bold mb-4 text-center">MENU</h1>

      <span
        className="block mb-4"
        style={{
          height: "2px",
          background:
            "linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%)",
        }}
      ></span>
      <div className="space-y-2">
        {mainLinks.map((item) => (
          <ButtonSidebar
            key={item.id}
            data={item}
            isActive={pathname === item.link}
          />
        ))}
      </div>

      <div className="mt-6">
        <p className="text-xs text-gray-400 uppercase font-semibold mb-2">
          Account Pages
        </p>
        <div className="space-y-2">
          {accountLinks.map((item) => (
            <ButtonSidebar
              key={item.id}
              data={item}
              isActive={pathname === item.link}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
