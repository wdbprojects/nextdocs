import { LifeBuoy } from "lucide-react";
import React from "react";

const AcmeLogo = () => {
  return (
    <div className="flex flex-row items-center leading-none text-white">
      <LifeBuoy className="size-10" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
};

export default AcmeLogo;
