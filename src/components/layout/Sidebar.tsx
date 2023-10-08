"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

import Box from "../common/Box";
import SidebarItem from "./SidebarItem";
import Libary from "./Libary";

import { Song } from "@/types/types";
import usePlayer from "@/hooks/usePlayer";

type Props = {
  children: React.ReactNode;
  songs: Song[];
};

export default function Sidebar({ children, songs }: Props) {
  const pathname = usePathname();
  const player = usePlayer();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    []
  );

  return (
    <div
      className={twMerge(
        "flex h-full",
        player.activeId && "h-[calc(100%-80px)]"
      )}>
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))}
          </div>
        </Box>

        <Box className="overflow-y-auto h-full">
          <Libary songs={songs} />
        </Box>
      </div>

      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
}
