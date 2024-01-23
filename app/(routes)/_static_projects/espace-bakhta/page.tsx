"use client";

import Image from "next/image";
import BackgroundSVG from "../../projects/_components/dots";
import Card from "@/components/card";
import ProjCard from "./proj-card";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const EspaceBakhta = () => {
  return (
    <div className="overflow-hidden h-screen">
      <div className="h-[70px]  relative px-4 w-full  flex justify-start gap-5 items-center shasow-xl border-b border-gray-800   z-10 bg-[#13111C]">
        <span className="absolute sm:hidden top-5  left-[50%] text-neutral-400 flex gap-2 items-center justify-center">
          click to drag <ArrowDown size={20} />{" "}
        </span>
        <Link href="/">
          <Image src="/logo.svg" height={40} width={40} alt=""></Image>
        </Link>
        <div className="flex items-center justify-center gap-5   text-white">
          <span className="text-sm">/</span>
          <span className=" text-lg sm:text-base ">Projects</span>
          <span className="text-sm">/</span>
          <span className=" text-lg sm:text-base">Espace-bakhta</span>
        </div>
      </div>
      <BackgroundSVG />
      <div className=" w-full relative h-full flex items-center justify-center  ">
        <motion.div
          drag
          className=" flex gap-7 justify-center  flex-wrap   px-8 "
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={0.9}
        >
          <ProjCard
            title="Espace-baktha"
            link="espace-bakhta.com"
            desc="A while ago via github"
            img="/github-mark.svg"
            icon="/green-tick.svg"
          />
        </motion.div>
        <div className=" sm:hidden p-3 flex items-start gap-3 justify-start absolute bottom-10  left-10 z-20 w-64 h-20 ring-1 ring-neutral-800 rounded-lg shadow-md bg-[#181622] text-white ">
          <Image src={"/cmd.svg"} width={22} height={22} alt=""></Image>
          <span className="text-white ">Real Client Project</span>
        </div>
      </div>
    </div>
  );
};

export default EspaceBakhta;
