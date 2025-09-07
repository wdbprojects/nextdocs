"use client";

import { cn } from "@/lib/utils";
import { FileText, House, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/dashboard", icon: <House /> },
  { name: "Invoices", href: "/dashboard/invoices", icon: <FileText /> },
  { name: "Customers", href: "/dashboard/customers", icon: <Users /> },
];

const NavLinks = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            href={link.href}
            key={link.href}
            className={cn(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-primary md:flex-none md:justify-start md:p-2 md:px-3",
              link.href === pathname &&
                "bg-gray-300 hover:bg-gray-300 hover:text-foreground hover:cursor-default",
            )}
          >
            {link.icon}
            <span className="hidden md:block">{link.name}</span>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
