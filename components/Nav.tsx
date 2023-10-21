
import Image from "next/image";
import Link from "next/link";



const Nav = () => {
    return ( 
        <div className=" h-20 z-50  flex justify-around items-start text-neutral-400 text-sm font-semibold pr-8  sm:w-full pt-8 w-[80%] ">

            {/* <Image src={"/logo.svg"} width={70} className="ml-32" height={70} alt="" /> */}

            <div className="flex gap-5 ml-auto  ">
                <Link
                className="hover:text-white"
                href={"/projects"}
                >
                    Projects
                </Link>
                <Link
                className="hover:text-white"
                href={"/resume"}>
                    Resume
                </Link>
                <Link  href={"https://github.com/nourdinejazi"} target="_blanc"><Image src={"/github-mark.svg"} className="" width={25} height={25} alt="" /></Link>
            </div>
        </div>
     );
}
 
export default Nav;