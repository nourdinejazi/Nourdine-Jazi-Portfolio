import ProjNav from "@/components/proj-nav";

import Image from "next/image";
import Link from "next/link";
import { db } from "@/lib/db";
import ProjCard from "./_components/proj-card-dev";
import { Project } from "@prisma/client";

const Projects = async () => {
  const projects = await db.project.findMany();

  return (
    <div className="w-full bg-[#13111C]  min-h-screen flex flex-col items-center justify-center sm:gap-5 gap-10 text-white ">
      <ProjNav />
      <div className=" h-16 flex items-center justify-start  gap-5 w-[70%] sm:w-[100%] p-2 ">
        <Link href={"https://github.com/nourdinejazi"} target="_blanc">
          <Image
            src={"/github-mark.svg"}
            className=""
            width={50}
            height={50}
            alt=""
          />
        </Link>
        <span className="text-xl font-semibold  sm:w-full">
          github.com/nourdinejazi
        </span>
      </div>
      <div className="ld:grid lg:grid-cols-3  md:grid md:grid-cols-3 sm:grid sm:grid-cols-1    sm:w-full  p-10   m-auto gap-10  ">
        {projects.map((project: Project) =>
          project.isArchived ? (
            ""
          ) : (
            <ProjCard key={project.projectId} project={project} />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
