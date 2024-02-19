import { useNavigate } from "react-router-dom";
import logoLeaf from "../../assets/leafLogo.png";

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
  const navigate = useNavigate();

  return (
    <div className="flex px-24 max-w-full max-h-[115px] min-h-[115px] w-full h-full gap-20 bg-white/40 fixed top-0 justify-start items-center">
      <img
        src={logoLeaf}
        className="h-16 cursor-pointer select-none"
        onClick={() => navigate("/")}
      />

      {headerButtons.map((item, index) => {
        return (
          <p
            className="font-poppins uppercase font-semibold text-lg cursor-pointer hover:text-[#d1400b] transition-colors select-none"
            key={index}
            onClick={() => navigate(`/${item.link}`)}
          >
            {item.text}
          </p>
        );
      })}
    </div>
  );
};
export default Header;
