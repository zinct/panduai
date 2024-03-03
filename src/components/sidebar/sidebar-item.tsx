import { Separator } from "@/components/separator";
import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const SidebarItem = (item: Props) => {
  return (
    <Link
      href={item.href}
      key={item.name}
      className={`flex items-center justify-between pl-10 text-gray-600 font-medium gap-4 h-14 ${
        item.name == "Dashboard"
          ? "bg-secondary-accent !font-bold text-primary "
          : "hover:bg-gray-100"
      }`}
    >
      <div className="flex items-center gap-4 pr-4">
        {item.icon}
        <h6>
          <span className="mr-3">{item.name}</span>
        </h6>
      </div>
      {item.name === "Dashboard" ? (
        <Separator orientation="vertical" className="w-1 bg-primary" />
      ) : null}
    </Link>
  );
};

export default SidebarItem;
