import { Separator } from "@/components/separator";
import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  href: string;
  currentPath: string;
  icon: React.ReactNode;
};

const SidebarItem = ({ href, name, icon, currentPath }: Props) => {
  return (
    <Link
      href={href}
      key={name}
      className={`flex items-center justify-between pl-10 text-neutral-5 font-medium gap-4 h-14 ${
        currentPath === href
          ? "bg-secondary-accent !font-bold text-primary "
          : "hover:bg-gray-100"
      }`}
    >
      <div className="flex items-center gap-4 pr-4">
        {icon}
        <h6>
          <span className="mr-3">{name}</span>
        </h6>
      </div>
      {currentPath === href ? (
        <Separator orientation="vertical" className="w-1 bg-primary" />
      ) : null}
    </Link>
  );
};

export default SidebarItem;
