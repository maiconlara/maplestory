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
    <div className="flex flex-col w-full items-center justify-center gap-6 ">
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
              Maximum Level 220;
            </p>
          </div>

          <div className="flex flex-row gap-4 w-full items-center justify-start ">
            <IconConfetti size={24} />
            <p className="font-poppins font-semibold text-lg">
              All party quests available;
            </p>
          </div>

          <div className="flex flex-row gap-4 w-full items-center justify-start ">
            <IconBalloon size={24} />
            <p className="font-poppins font-semibold text-lg">
              Seasonal hosted events;
            </p>
          </div>
          <div className="flex flex-row gap-4 w-full items-center justify-start ">
            <IconBan size={24} />
            <p className="font-poppins font-semibold text-lg">
              Functional anti-cheat;
            </p>
          </div>
          <div className="flex flex-row gap-4 w-full items-center justify-start ">
            <IconCoinBitcoin size={24} />
            <p className="font-poppins font-semibold text-lg">
              Own Cryptocurrency;
            </p>
          </div>
          <div className="flex flex-row gap-4 w-full items-center justify-start ">
            <IconMoodTongueWink size={24} />
            <p className="font-poppins font-semibold text-lg">And much more!</p>
          </div>
          <DefaultButton text="lets play!" link="register" />
        </div>
        <div className="flex justify-center items-center w-full h-full">
          <div className="flex relative w-[300px] h-[200px] select-none">
            <img src={asset1} className=" absolute bottom-0 left-24   " />
            <img src={asset2} className=" absolute bottom-0 left-12   " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
