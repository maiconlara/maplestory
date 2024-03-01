import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const HeaderLayout = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="flex flex-col relative max-w-[100vw] w-full min-h-[100vh] overflow-hidden justify-start items-center bg-[#d6edff] ">
      {isDesktop && <Header />}
      <Outlet />
      <Footer />
    </div>
  );
};
export default HeaderLayout;
