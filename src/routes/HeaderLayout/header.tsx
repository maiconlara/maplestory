import logoLeaf from "../../assets/leafLogo.png";

const Header = () => {
  return (
    <div className="flex px-16 max-w-full max-h-[115px] min-h-[115px] w-full h-full gap-20 bg-white/40 fixed top-0 justify-start items-center">
      <img src={logoLeaf} className="h-16" />
      <p className="font-quick uppercase font-bold text-lg cursor-pointer">
        Download
      </p>
      <p className="font-quick uppercase font-bold text-lg cursor-pointer">
        Register
      </p>
      <p className="font-quick uppercase font-bold text-lg cursor-pointer">
        Rankings
      </p>
      <p className="font-quick uppercase font-bold text-lg cursor-pointer">
        Vote
      </p>
      <p className="font-quick uppercase font-bold text-lg cursor-pointer">
        Premium
      </p>
    </div>
  );
};
export default Header;
