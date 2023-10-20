
"use client"

import Image from "next/image";
import BackgroundSVG from "../components/dots";
import Card from "@/components/card";
import ProjCard from "../components/proj-card";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Clothify = () => {

return (
<div className="overflow-hidden h-screen">

    <div className="h-[70px]  relative px-4 w-full  flex justify-start gap-5 items-center shasow-xl border-b border-gray-800   z-10 bg-[#13111C]">
        <span className="absolute sm:hidden top-5  left-[50%] text-neutral-400 flex gap-2 items-center justify-center">click to drag <ArrowDown size={20} /> </span>
        <Image src="/logo.svg" height={40} width={40} alt=""></Image>
        <div className="flex items-center justify-center gap-5   text-white">
            <span className="text-sm">
                /
            </span>
            <span className=" text-lg sm:text-base ">
                Projects
            </span>
            <span className="text-sm">
                /
            </span>
            <span className=" text-lg sm:text-base">
                Clothify
            </span>
        </div>
    </div>
    <BackgroundSVG />
    <div className=" w-full relative h-full flex items-center justify-center  ">
        <motion.div 
            drag 
            className=" flex gap-7 justify-center  flex-wrap   px-8 "
            dragConstraints={{left : 0, top :0  , right : 0, bottom :0}}
            dragElastic={.9}
            >       
                    <ProjCard 
                    title="Postgres" 
                    link="" 
                    desc="A while ago via railway" 
                    img="/postgress.svg"
                    icon="/beat.svg"
                    />

                    <ProjCard                
                    title="clothify" 
                    link="clothify-store.vercel.app" 
                    desc="A while ago via github" 
                    img="/github-mark.svg"
                    icon="/green-tick.svg"
                    />
            </motion.div>   
        <div className=" p-3 flex items-start gap-3 justify-start absolute bottom-10  left-10 z-20 w-64 h-20 ring-1 ring-neutral-800 rounded-lg shadow-md bg-[#181622] text-white ">
            <Image src={"/cmd.svg"} width={22} height={22} alt=""></Image>
            <span className="text-white ">Personal Project</span>
        </div>
    </div>

</div>
    );
}
 
export default Clothify;