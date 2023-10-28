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
            <div className="ld:grid lg:grid-cols-3  md:grid md:grid-cols-3 sm:grid sm:grid-cols-1   sm:w-full  p-10   m-auto gap-10  ">
                <div onClick={()=> router.push('/projects/clothify')}>
                <Card 
                        repoLink="https://github.com/nourdinejazi/clothify-store" 
                        shadow="" titleColor="text-[#FFFF]" 
                        color="" title="CLOTHIFY" 
                        paragraph="Clothify, sophisticated commercial website  using Next.js..."
                        icon="github-mark.svg"  boxs="boxproj.svg"
                        className="bg-[#211F2D] hover:bg-opacity-50 cursor-pointer "
                        />
                </div>

                <div onClick={()=> router.push('/projects/clothify-dashboard')}>
                <Card 
                        repoLink="https://github.com/nourdinejazi/clothify-admin" 
                        shadow="" titleColor="text-[#FFFF]" 
                        color="" title="Clothify-Dashboard" 
                        paragraph="Management of an online clothing store (Clothify)"
                        icon="github-mark.svg"  boxs="boxproj.svg"
                        className="bg-[#211F2D] hover:bg-opacity-50 cursor-pointer "
                        />
                </div>


                <div onClick={()=> router.push('/projects/espace-bakhta')}>
                <Card 
                        repoLink="https://github.com/nourdinejazi/espace-bakhta" 
                        shadow="" titleColor="text-[#FFFF]" 
                        color="" title="Espace-Bakhta" 
                        paragraph="Website for a local event venue with reservation form..."
                        icon="github-mark.svg"  boxs="boxproj.svg"
                        className="bg-[#211F2D] hover:bg-opacity-50 cursor-pointer "
                        />
                </div>

            <div>
                <Card 
                            repoLink="https://github.com/nourdinejazi" 
                            shadow="" titleColor="text-[#FFFF]" 
                            color="" title="Bakhta-Manager" 
                            paragraph="Comming Soon..."
                            icon="github-mark.svg"  boxs="boxproj.svg"
                            className="bg-[#211F2D] hover:bg-opacity-50 cursor-pointer  "
                            />
            </div>


            </div>
        </div>
     );
}
 
export default Projects;