"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary flex justify-center items-center p-4 gap-8 rounded-xl w-full shadow-sm">
      <div className="flex gap-x-2">
        <Button
          asChild
          variant={pathname === "/dashboard" ? "default" : "outline"}
        >
          <Link href="/dashboard">Dashboard</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/dashboard/new" ? "default" : "outline"}
        >
          <Link href="/dashboard/new">Add New Project</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};
