import SideNav from "@/components/layout/sidenav";
import { LayoutProps } from "@/config/types";

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
};

export default DashboardLayout;
