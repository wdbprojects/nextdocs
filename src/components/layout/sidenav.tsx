import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AcmeLogo from "@/components/branding/acme-logo";
import { Power } from "lucide-react";
import NavLinks from "@/components/shared/nav-links";

const SideNav = () => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        href="/"
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-primary p-4 md:h-40"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-muted md:block"></div>
        <form>
          <Button size="sm" variant="default" className="w-full">
            <Power className="size-3.5" />
            <span className="hidden md:block">Sign Out</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SideNav;
