import "../globals.css";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className=" flex flex-col items-center w-full h-screen  justify-center  ">
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
