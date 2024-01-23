import DashboardForm from "@/components/dashboard-form";
import { db } from "@/lib/db";

const AddProject = async ({ params }: { params: { projectid: string } }) => {
  const project = await db.project.findUnique({
    where: {
      projectId: params.projectid,
    },
    include: {
      images: true,
    },
  });
  return (
    <div className="w-full min-h-screen flex items-start my-12 justify-center  ">
      <div className="w-auto border  h-auto p-4">
        <DashboardForm initialData={project} />
      </div>
    </div>
  );
};

export default AddProject;
