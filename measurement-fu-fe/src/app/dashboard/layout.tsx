import SideMenu from "@/components/side-menu/SideMenu";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DashboardLayout = async ({ children }: Props) => {
  return (
    <div className="overflow-hidden w-full h-full relative flex z-0">
      <div>
        <SideMenu />
      </div>
      <div className="w-full h-full max-w-full overflow-scroll bg-[#f2f4f6]">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
