import DefaultButton from "../components/default-button";
import { useTabTitle } from "../hooks/useTabTitle";

const Home = () => {
  useTabTitle("Home");

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col px-24 gap-12 bg-hero bg-cover w-full min-h-[700px] h-full bg-no-repeat bg-center overflow-hidden justify-center">
        <div className="flex flex-col gap-3 pt-6">
          <p className="font-poppins font-medium text-4xl  ">
            MuLung Story
          </p>
          <p className="font-poppins font-medium text-4xl ">
            The new era Maple Server!
          </p>
        </div>
        <div className="flex flex-row gap-6">
          <DefaultButton text="get started" />
          <DefaultButton text="read more" />
        </div>
      </div>
      <div className="flex flex-none  w-full h-1 bg-white" />
    </div>
  );
};
export default Home;
