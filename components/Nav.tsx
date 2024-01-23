import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LoginButton } from "./auth/login-button";
import { currentUser } from "@/lib/auth";
import { UserButton } from "./auth/user-button";

const Nav = async () => {
  const user = await currentUser();

  return (
    <div className=" h-20  z-50 flex justify-around items-start text-neutral-400 text-sm font-semibold pr-8  sm:w-full pt-8 w-[80%] ">
      <div className="flex gap-5 ml-auto  h-full items-center justify-center ">
        <Link className="hover:text-white" href={"/projects"}>
          Projects
        </Link>
        <Link className="hover:text-white" href={"/resume.pdf"} target="_blanc">
          Resume
        </Link>
        <Link href={"https://github.com/nourdinejazi"} target="_blanc">
          <Image
            src={"/github-mark.svg"}
            className=""
            width={25}
            height={25}
            alt=""
          />
        </Link>
        <div className="">
          {user ? (
            <UserButton />
          ) : (
            <LoginButton>
              <User></User>
            </LoginButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
