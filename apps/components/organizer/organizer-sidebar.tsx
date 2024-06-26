"use client";

import { Home, PenSquare, PlusSquare } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    {
      icon: Home,
      href: "/organizer",
      label: "Home",
    },
    {
      icon: PlusSquare,
      href: "/",
      label: "Issue",
    },
    {
      icon: PenSquare,
      href: "/",
      label: "Generate",
    },
  ];

  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
      <div className="p-3 flex-1 flex justify-center">
        <div className="space-y-2">
          {routes.map((route) => (
            <div
              key={route.href}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href && "bg-primary/10 text-primary"
              )}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                <route.icon className="h-5 w-5" />
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
