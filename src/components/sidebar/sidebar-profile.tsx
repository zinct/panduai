import { Icon } from "@iconify/react";
import React from "react";

const SidebarProfile = () => {
  return (
    <div className="h-14 rounded-full bg-primary w-52 text-white cursor-pointer hover:bg-primary/90 flex items-center px-3 py-x ml-6 gap-2">
      {/* <Image
    src={"https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=yaa"}
    width={40}
    height={40}
    alt="profile"
  /> */}
      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      <h5 className="font-medium">Nisrina Thifal</h5>
      <Icon icon="solar:settings-bold" width="24" height="24" />
      {/* https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=yaa */}
    </div>
  );
};

export default SidebarProfile;
