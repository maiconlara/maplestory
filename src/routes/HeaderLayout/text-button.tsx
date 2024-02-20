import { useNavigate } from "react-router-dom";

interface TextButtonProps {
  text: string;
  link: string;
}

const TextButton = ({ text, link }: TextButtonProps) => {

  const navigate = useNavigate();


  return (
    <p
      className="font-poppins uppercase font-semibold text-lg cursor-pointer hover:text-[#d1400b] transition-colors select-none"
      onClick={() => navigate(`/${link}`)}
    >
      {text}
    </p>
  );
};
export default TextButton;
