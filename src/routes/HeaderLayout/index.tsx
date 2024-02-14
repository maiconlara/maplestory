import { Outlet } from "react-router-dom";
import Header from "./header";

const HeaderLayout = () => {
  return (
    <div className="flex flex-col max-w-[100vw] w-full min-h-[100vh] overflow-hidden justify-start items-center bg-[#d6edff] ">
      <Header />
      <Outlet />
    </div>
  );
};
export default HeaderLayout;
