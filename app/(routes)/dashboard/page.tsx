import ProjectRow from "@/components/project-row";
import { db } from "@/lib/db";
import { Project } from "@prisma/client";

const Dashboard = async () => {
  const projects = await db.project.findMany();

  return (
    <div className="w-full h-screen flex items-start my-12 justify-center ">
      <div className=" border overflow-y-auto h-[500px]">
        {projects.map((project: Project) => (
          <ProjectRow key={project.projectId} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
