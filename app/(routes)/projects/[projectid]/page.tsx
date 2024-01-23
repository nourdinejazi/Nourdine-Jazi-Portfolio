import Image from "next/image";

import { ArrowDown } from "lucide-react";
import Link from "next/link";
import ProjSheet from "../_components/proj-sheet";
import BackgroundSVG from "../_components/dots";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const ProjectHomePage = async ({
  params,
}: {
  params: { projectid: string };
}) => {
  const project = await db.project.findUnique({
    where: {
      projectId: params.projectid,
    },
    include: {
      images: true,
    },
  });
  if (!project) {
    redirect("/");
  }
  return (
    <div className="overflow-hidden h-screen">
      <div className="h-[70px]  relative px-4 w-full  flex justify-start gap-5 items-center shasow-xl border-b border-gray-800   z-10 bg-[#13111C]">
        <span className="absolute sm:hidden top-5  left-[50%] text-neutral-400 flex gap-2 items-center justify-center">
          click to view <ArrowDown size={20} />{" "}
        </span>
        <Link href="/">
          <Image src="/logo.svg" height={40} width={40} alt=""></Image>
        </Link>
        <div className="flex items-center justify-center gap-5   text-white">
          <span className="text-sm">/</span>
          <span className=" text-lg sm:text-base ">Projects</span>
          <span className="text-sm">/</span>
          <span className=" text-lg sm:text-base">{project?.name}</span>
        </div>
      </div>
      <BackgroundSVG />
      <div className=" w-full relative h-full flex items-center justify-center  ">
        <div className=" flex gap-7 justify-center  flex-wrap   px-8 ">
          {/* <ProjSheet
            title="Postgres"
            link=""
            desc="A while ago via railway"
            img="/postgress.svg"
            icon="/beat.svg"
          /> */}

          <ProjSheet
            title={project?.name.toLowerCase()}
            link={project?.link.replace("https://", "")}
            desc="A while ago via github"
            img="/github-mark.svg"
            icon="/green-tick.svg"
            project={project}
          />
        </div>
        <div className=" sm:hidden p-3 flex items-start gap-3 justify-start absolute bottom-10  left-10 z-20 w-64 h-20 ring-1 ring-neutral-800 rounded-lg shadow-md bg-[#181622] text-white ">
          <Image src={"/cmd.svg"} width={22} height={22} alt=""></Image>
          <span className="text-white ">{project?.type}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectHomePage;
