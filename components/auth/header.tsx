import { Poppins } from "next/font/google";
import Image from "next/image";

import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className=" w-full flex flex-col gap-y-4 items-center justify-center ">
      <Link href="/">
        <Image
          src={"/logo.svg"}
          width={70}
          className=" mx-8 "
          height={70}
          alt=""
        />
      </Link>
      <h1 className={cn("text-3xl text-center font-semibold", font.className)}>
        Login
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
