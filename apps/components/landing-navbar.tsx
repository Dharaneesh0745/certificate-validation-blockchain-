"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  return (
    <nav className="p-4 bg-transparent flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center mb-4 md:mb-0 md:justify-start sm:justify-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold text-white", font.className)}>
            Generator
          </h1>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-2">
        <Link href={"/"}>
          <Button
            variant="outline"
            className="rounded-full mb-2 md:mb-0 md:mr-2"
          >
            Continue as Organizer
          </Button>
        </Link>
        <Link href={"/"}>
          <Button variant="outline" className="rounded-full">
            Continue as User
          </Button>
        </Link>
      </div>
    </nav>
  );
};
