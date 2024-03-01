import { IconBrandDiscordFilled, IconUserFilled } from "@tabler/icons-react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HeaderButton from "./header-button";
import TextButton from "./text-button";
import logoLeaf from "../../assets/leafLogo.png";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const headerButtons = [
  {
    text: "Download",
    link: "download",
  },
  {
    text: "Register",
    link: "register",
  },
  {
    text: "Rankings",
    link: "rankings",
  },
  {
    text: "Vote",
    link: "vote",
  },
  {
    text: "Premium",
    link: "premium",
  },
];

const Header = () => {
  const [headerColor, setHeaderColor] = useState("#ffffff66");
  const navigate = useNavigate();

  const xl = useMediaQuery("(min-width: 1280px)");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    latest > 0 ? setHeaderColor("white") : setHeaderColor("#ffffff66");
  });

  return (
    <div
      className="flex px-14 xl:px-24 max-w-full max-h-[115px] min-h-[115px] shadow w-full h-full fixed top-0 justify-between  items-center z-10 transition-colors "
      style={{
        backgroundColor: headerColor,
      }}
    >
      <div className="flex flex-row lg:gap-8 xl:gap-20 items-center justify-center">
        <img
          src={logoLeaf}
          className="h-16 cursor-pointer select-none"
          onClick={() => navigate("/")}
        />

        {headerButtons.map((item, index) => {
          return <TextButton key={index} text={item.text} link={item.link} />;
        })}
      </div>

      <div className="flex flex-row items-center justify-center lg:gap-3 xl:gap-12">
        {xl && (
          <div className="flex items-center justify-center font-poppins font-semibold h-[40px] lg:w-[11vw] xl:w-[160px] bg-[#238636] rounded-full text-white ">
            {`${Math.floor(Math.random() * (107 - 100 + 1) + 100)} Online`}
          </div>
        )}
        <HeaderButton
          Icon={IconBrandDiscordFilled}
          text="Discord"
          color="#6d84d7"
        />
        <HeaderButton Icon={IconUserFilled} text="Account" color="#333333" />
      </div>
    </div>
  );
};
export default Header;
