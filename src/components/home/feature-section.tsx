import {
  IconBalloon,
  IconBan,
  IconCoinBitcoin,
  IconConfetti,
  IconMoodTongueWink,
  IconRocket,
  IconTrendingUp,
} from "@tabler/icons-react";
import DefaultButton from "../default-button";
import asset1 from "../../assets/asset1.png";
import asset2 from "../../assets/asset2.png";

const FeatureSection = () => {
  return (
    <div className="flex flex-col lg:w-[90vw] 2xl:w-[60vw] items-center justify-center gap-12 ">
      <p className="font-poppins font-semibold text-4xl ">Features</p>

      <div className="flex flex-row w-full items-center">
        <div className="flex flex-col gap-8 w-full justify-start ">
          <div className="flex flex-row gap-4 w-full items-center justify-start ">
            <IconTrendingUp size={24} />
            <p className="font-poppins font-semibold text-lg">
              Game Progression:{" "}
              <span className="font-normal font-poppins">
                {" "}
                3.2x EXP, 6x Quests, 2x DROP and 8x MESOS;{" "}
              </span>{" "}
            </p>
          </div>

          <div className="flex flex-row gap-4 w-full items-center justify-start ">
            <IconRocket size={24} />
            <p className="font-poppins font-semibold text-lg">
              Maximum Level 220:
              <span className="font-normal font-poppins">
                {" "}
                To make the game more competitive;{" "}
              </span>{" "}
            </p>
          </div>

          <div className="flex flex-row gap-4 w-full items-center justify-start ">
            <IconConfetti size={24} />
            <p className="font-poppins font-semibold text-lg">
              All party quests available:
              <span className="font-normal font-poppins">
                {" "}
                Creating a friendly environment;{" "}
              </span>{" "}
            </p>
          </div>

          <div className="flex flex-row gap-4 w-full items-center justify-start ">
            <IconBalloon size={24} />
            <p className="font-poppins font-semibold text-lg">
              Seasonal hosted events:
              <span className="font-normal font-poppins">
                {" "}
                Making everyone happy and beauty;{" "}
              </span>{" "}
            </p>
          </div>
          <div className="flex flex-row gap-4 w-full items-center justify-start ">
            <IconBan size={24} />
            <p className="font-poppins font-semibold text-lg">
              Functional anti-cheat:
              <span className="font-normal font-poppins">
                {" "}
                So no one could outlevel you;{" "}
              </span>{" "}
            </p>
          </div>
          <div className="flex flex-row gap-4 w-full items-center justify-start ">
            <IconCoinBitcoin size={24} />
            <p className="font-poppins font-semibold text-lg">
              Own Cryptocurrency:
              <span className="font-normal font-poppins">
                {" "}
                I heard people like that NFT thing;{" "}
              </span>{" "}
            </p>
          </div>
          <div className="flex flex-row gap-4 w-full items-center justify-start ">
            <IconMoodTongueWink size={24} />
            <p className="font-poppins font-semibold text-lg">And much more!</p>
          </div>
          <DefaultButton text="lets play!" link="register" />
        </div>
        <div className="flex justify-end items-center w-[40%] h-full">
          <div className="flex relative w-[300px] h-[200px] select-none">
            <img src={asset1} className=" absolute bottom-0 right-0   " />
            <img src={asset2} className=" absolute bottom-0 right-20   " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
