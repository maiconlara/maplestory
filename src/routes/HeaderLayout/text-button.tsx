import { useNavigate, useLocation } from "react-router-dom";

interface TextButtonProps {
  text: string;
  link: string;
  isActive?: boolean;
}

const TextButton = ({ text, link }: TextButtonProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === `/${link}`;

  const navigate = useNavigate();

  return (
    <p
      className={`font-poppins uppercase font-semibold text-lg cursor-pointer hover:text-[#d1400b] ${
        isActive ? "text-[#d1400b]" : "text-black"
      } transition-colors select-none`}
      onClick={() => navigate(`/${link}`)}
    >
      {text}
    </p>
  );
};
export default TextButton;
