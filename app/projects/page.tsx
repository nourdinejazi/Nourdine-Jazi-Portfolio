"use client"

import Nav from "@/components/Nav";
import ProjNav from "@/components/proj-nav";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/card";

const Projects = () => {
    const router = useRouter()
    return ( 
        <div className="w-full bg-[#13111C] min-h-screen flex flex-col items-center justify-start gap-20 text-white ">
            <ProjNav />
            <div className=" h-16 flex items-center justify-start gap-5 w-[70%] sm:w-[100%] p-2 ">
                 <Link  href={"https://github.com/nourdinejazi"} target="_blanc"><Image src={"/github-mark.svg"} className="" width={50} height={50} alt="" /></Link>
                <span className="text-xl font-semibold  sm:w-full">github.com/nourdinejazi</span>
            </div>
            <div className=" h-full  flex items-start w-[70%] ">
                <div onClick={()=> router.push('/projects/clothify')}>
                <Card 
                        repoLink="https://github.com/nourdinejazi/clothify-store" 
                        shadow="" titleColor="text-[#FFFF]" 
                        color="" title="CLOTHIFY" 
                        paragraph="Clothify, sophisticated commercial website  crafted mainly using Next.js..."
                        icon="github-mark.svg"  boxs="boxproj.svg"
                        className="bg-[#211F2D] hover:bg-opacity-50"
                        />
                </div>

           

            </div>

        </div>
     );
}
 
export default Projects;