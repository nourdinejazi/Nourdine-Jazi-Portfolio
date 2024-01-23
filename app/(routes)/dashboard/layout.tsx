import { RoleGate } from "@/components/auth/role-gate";
import { Navbar } from "./[projectid]/_components/navbar";
import { UserRole } from "@prisma/client";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <RoleGate allowedRole={UserRole.ADMIN}>{children}</RoleGate>
    </div>
  );
};

export default DashboardLayout;
