
import Image from "next/image";
import Link from "next/link";



const ProjNav = () => {
    return ( 
        <div className=" h-20   flex justify-between items-start text-neutral-400 font-medium text-sm pr-8 pt-8  w-full   ">

            <Link href={"/"}><Image src={"/logo.svg"} width={70} className=" mx-8 " height={70} alt="" /></Link>

            <div className="flex gap-5   ">
                <Link
                className="hover:text-white"
                href={"/"}
                >
                    Home
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
 
export default ProjNav;