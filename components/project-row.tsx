"use client";

import { Project } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Edit2, Settings2 } from "lucide-react";

interface ProjectRowProps {
  project: Project;
}

const ProjectRow = ({ project }: ProjectRowProps) => {
  const router = useRouter();
  return (
    <div className="w-full flex items-center justify-between gap-5 px-8 border-b  h-20">
      <Badge variant="secondary" className="text-lg  ">
        {project.name}
      </Badge>

      <Button onClick={() => router.push(`/dashboard/${project.projectId}`)}>
        <Edit2 />
      </Button>
    </div>
  );
};

export default ProjectRow;
