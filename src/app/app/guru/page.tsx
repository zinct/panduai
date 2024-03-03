"use client";

import { Separator } from "@/components/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import SidebarItem from "@/components/sidebar/sidebar-item";
import SidebarProfile from "@/components/sidebar/sidebar-profile";

const SIDEBAR_ITEMS = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <Icon icon="mage:dashboard-fill" width="20" height="24" />,
  },
  {
    name: "Kelas",
    href: "/kelas",
    icon: <Icon icon="solar:bookmark-bold" width="20" height="24" />,
  },
  {
    name: "PanduAjar",
    href: "/panduAjar",
    icon: <Icon icon="solar:compass-bold" width="20" height="24" />,
  },
  {
    name: "ChatAI",
    href: "/chatAI",
    icon: <Icon icon="bi:chat-dots-fill" width="20" height="24" />,
  },
];

const page = () => {
  return (
    <div className="bg-[#F6F7FB]">
      {/* // * Sidebar  */}
      <nav className="w-64 h-screen py-6 bg-white flex flex-col">
        <div className="flex-grow">
          <Image
            className="ml-6"
            alt="panduai logo"
            src="/images/logo.png"
            width={144}
            height={42}
          />
          <Separator className="my-4" />
          <div>
            {SIDEBAR_ITEMS.map((item) => (
              <SidebarItem {...item} key={item.name} />
            ))}
          </div>
        </div>
        <SidebarProfile />
      </nav>
    </div>
  );
};

export default page;
