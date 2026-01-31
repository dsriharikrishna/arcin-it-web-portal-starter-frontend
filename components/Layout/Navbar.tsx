"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Navbar() {
  const router = useRouter();


  return (
    <header
      className={`fixed w-full top-0 z-50 transition-shadow duration-300 bg-white`}
    >
      <nav
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-3 py-3 sm:px-5 lg:px-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center">
            <span className="sr-only">ArcinIT</span>
            <Image
              className="h-8 w-auto"
              src="/arcin-it-logo.png"
              alt="ArcinIT Logo"
              width={32}
              height={32}
            />
            <span className="ml-2 font-bold text-xl text-gray-800">
              ArcinIT
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

