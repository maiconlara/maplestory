import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const HeaderLayout = () => {
  return (
    <div className="flex flex-col relative max-w-[100vw] w-full min-h-[100vh] overflow-hidden justify-start items-center bg-[#d6edff] ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default HeaderLayout;
