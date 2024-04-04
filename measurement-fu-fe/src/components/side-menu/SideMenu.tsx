"use client";

import NavLink from "./NavLink";

const SideMenu = () => {
  return (
    <div className="bg-[#094a8f] text-white h-full w-[260px]">
      <div className="flex flex-col h-full p-3">
        <div className="pt-3 flex justify-center"></div>
        <div className="border-t border-gray-300 mt-4"></div>
        <div className="pt-10 flex-grow overflow-y-auto">
          <div className="pb-2">
            <NavLink text="Home" url="/" />
          </div>
          <div className="pb-2">
            <NavLink text="All Devices" url="/dashboard/devices" />
          </div>
          <div className="pb-2">
            {/* <DropdownMenu
              text="Devices"
              items={menuItems}
            /> */}
          </div>
        </div>

        <div className="border-t border-gray-300 mt-4"></div>
      </div>
    </div>
  );
};

export default SideMenu;
