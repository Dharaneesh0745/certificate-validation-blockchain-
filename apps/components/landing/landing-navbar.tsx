"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  const { setTheme } = useTheme();

  return (
    <nav className="p-4 bg-transparent flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center mb-4 md:mb-0 md:justify-start sm:justify-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1
            className={cn(
              " text-xl md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            Generator
          </h1>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-2">
        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Link href={"/organizer-login"}>
          <Button
            variant="outline"
            className="rounded-full mb-2 md:mb-0 md:mr-2 bg-white text-black"
          >
            Continue as Organizer
          </Button>
        </Link>
        <Link href={"/user-login"}>
          <Button
            variant="outline"
            className="rounded-full bg-white text-black"
          >
            Continue as User
          </Button>
        </Link>
      </div>
    </nav>
  );
};
