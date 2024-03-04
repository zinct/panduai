import React from "react";
import { RiSettings3Fill } from "react-icons/ri";

const SidebarProfile = () => {
  return (
    <div className="h-14 rounded-full bg-primary w-48 text-white cursor-pointer hover:bg-primary/90 flex items-center px-3 justify-between ml-6 ">
      {/* <Image
    src={"https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=yaa"}
    width={40}
    height={40}
    alt="profile"
  /> */}
      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      <h5 className="font-medium">Nisrina Thifal</h5>
      <RiSettings3Fill size="24" />
      {/* https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=yaa */}
    </div>
  );
};

export default SidebarProfile;
