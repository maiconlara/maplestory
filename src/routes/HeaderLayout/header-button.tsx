import { IconType } from "../../lib/icon-type";

interface HeaderButtonProps {
  Icon: IconType;
  text: string;
  color: string;
}

const HeaderButton = ({ Icon, text, color }: HeaderButtonProps) => {
  return (
    <div
      className="flex  items-center justify-center font-poppins font-semibold h-[40px] w-[160px] rounded-full text-white hover:cursor-pointer"
      style={{
        backgroundColor: color,
      }}
    >
      <Icon size={24} className="" />
      <p className="ml-2 select-none">{text}</p>
    </div>
  );
};
export default HeaderButton;
