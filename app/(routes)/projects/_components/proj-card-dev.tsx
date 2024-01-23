"use client";

import Card from "@/components/card";
import { Project } from "@prisma/client";
import { useRouter } from "next/navigation";

interface ProjCardProps {
  project: Project;
}

const ProjCard = ({ project }: ProjCardProps) => {
  const router = useRouter();

  return (
    <div onClick={() => router.push(`/projects/${project.projectId}`)}>
      <Card
        repoLink={project.gitRepoLink}
        titleColor="text-[#FFFF]"
        color=""
        title={project.name.toUpperCase()}
        paragraph={project.miniParagraph}
        icon="github-mark.svg"
        boxs="boxproj.svg"
        className="bg-[#211F2D] hover:bg-opacity-50 cursor-pointer "
      />
    </div>
  );
};

export default ProjCard;
