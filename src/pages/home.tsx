import { useTabTitle } from "../hooks/useTabTitle";
import OverViewSection from "../components/home/overview-section";
import FeatureSection from "../components/home/feature-section";
import Hero from "../components/home/hero";

const Home = () => {
  useTabTitle("Home");

  return (
    <div className="flex flex-col items-center justify-center w-full h-full pb-12">
      <Hero />
      <div className="flex flex-none  w-full h-1 bg-white" />

      <div className="flex flex-col w-full max-w-full px-24 h-full mt-16 justify-center items-center gap-20 mb-6">
        <OverViewSection />
        <FeatureSection />
      </div>
    </div>
  );
};
export default Home;
