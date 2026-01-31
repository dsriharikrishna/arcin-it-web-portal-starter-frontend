"use client";
import Image from "next/image";

const NavLogo = () => (
  <div className="relative w-[100px] h-[100px]">
    <Image
      src="/Arcin_logo_Name.png"
      alt="ArcinIT Logo"
      width={100}
      height={100}
      className="object-contain"
    />
  </div>
);

export default NavLogo;
