"use client";
import { useRouter } from "next/navigation";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LoginForm } from "@/components/auth/login-form";
import { cn } from "@/lib/utils";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
  className?: string;
}

export const LoginButton = ({
  children,
  mode = "modal",
  asChild,
  className,
}: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/");
  };

  if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild} className={className}>
          {children}
        </DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <span
      onClick={onClick}
      className={cn("cursor-pointer text-center ", className)}
    >
      {children}
    </span>
  );
};
