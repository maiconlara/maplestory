import { useNavigate } from "react-router-dom";

const DefaultButton = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex relative flex-col group overflow-hidden  w-[250px] h-[40px] rounded-full items-center justify-center border-[2.5px] border-[#851a0e] cursor-pointer"
      onClick={() => navigate("/awpdpkakwo")}
    >
      <p className="absolute text-white font-patrick text-lg tracking-wider uppercase">
        Bem Vindo
      </p>
      <div className="flex w-full h-full bg-[#da4f0e] group-hover:bg-[#ffbf00] transition-colors duration-[440ms]"></div>
      <div className="flex w-full h-full bg-[#d1400b] group-hover:bg-[#ffa900] transition-colors duration-[440ms]"></div>
    </div>
  );
};
export default DefaultButton;
