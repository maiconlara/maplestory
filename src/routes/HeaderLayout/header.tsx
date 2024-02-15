import logoLeaf from "../../assets/leafLogo.png";

const Header = () => {
  return (
    <div className="flex px-24 max-w-full max-h-[115px] min-h-[115px] w-full h-full gap-20 bg-white/40 fixed top-0 justify-start items-center">
      <img src={logoLeaf} className="h-16" />
      <p className="font-poppins uppercase font-semibold text-lg cursor-pointer hover:text-[#d1400b] transition-colors">
        Download
      </p>
      <p className="font-poppins uppercase font-semibold text-lg cursor-pointer hover:text-[#d1400b] transition-colors">
        Register
      </p>
      <p className="font-poppins uppercase font-semibold text-lg cursor-pointer hover:text-[#d1400b] transition-colors">
        Rankings
      </p>
      <p className="font-poppins uppercase font-semibold text-lg cursor-pointer hover:text-[#d1400b] transition-colors">
        Vote
      </p>
      <p className="font-poppins uppercase font-semibold text-lg cursor-pointer hover:text-[#d1400b] transition-colors">
        Premium
      </p>
    </div>
  );
};
export default Header;
