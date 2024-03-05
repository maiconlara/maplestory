import DefaultButton from "../default-button";

const Hero = () => {
  return (
    <div className="flex flex-col lg:px-24 2xl:px-32 gap-12 bg-hero bg-cover w-full min-h-screen h-full bg-no-repeat bg-center overflow-hidden justify-center">
      <div className="flex flex-col gap-3 pt-6">
        <p className="font-poppins font-medium text-4xl  ">MuLung Story</p>
        <p className="font-poppins font-medium text-4xl ">
          The new era Maple Server!
        </p>
      </div>
      <div className="flex flex-row gap-6">
        <DefaultButton text="get started" link="download" />
        <DefaultButton text="read more" link="#overview" useHref />
      </div>
    </div>
  );
};
export default Hero;
