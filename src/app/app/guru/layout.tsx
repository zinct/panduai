"use client";

import { Separator } from "@/components/separator";
import SidebarItem from "@/components/sidebar/sidebar-item";
import SidebarProfile from "@/components/sidebar/sidebar-profile";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BiSolidDashboard } from "react-icons/bi";
import { BsFillBookmarkDashFill } from "react-icons/bs";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { RiCompassFill } from "react-icons/ri";

const SIDEBAR_ITEMS = [
  {
    name: "Dashboard",
    href: "dashboard",
    // icon: <Icon icon="mage:dashboard-fill" width="20" height="24" />,
    icon: <BiSolidDashboard size={"20"} />,
  },
  {
    name: "Kelas",
    href: "kelas",
    icon: <BsFillBookmarkDashFill size={"20"} />,
  },
  {
    name: "PanduAjar",
    href: "pandu-ajar",
    icon: <RiCompassFill size={"20"} />,
  },
  {
    name: "ChatAI",
    href: "chat-ai",
    icon: <IoChatbubbleEllipses size={"20"} />,
  },
];

export default function AppLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <section className="bg-[#F6F7FB] flex">
      {/* Include shared UI here e.g. a header or sidebar */}
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
              <SidebarItem
                {...item}
                key={item.name}
                currentPath={pathname.split("/")[3].toLowerCase()}
              />
            ))}
          </div>
        </div>
        <SidebarProfile />
      </nav>
      <div className="px-8 pt-8 w-full">{children}</div>
    </section>
  );
}
