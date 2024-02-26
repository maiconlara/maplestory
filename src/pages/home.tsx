import {
  IconBalloon,
  IconBan,
  IconCoinBitcoin,
  IconConfetti,
  IconMoodTongueWink,
  IconRocket,
  IconTrendingUp,
} from "@tabler/icons-react";
import DefaultButton from "../components/default-button";
import { useTabTitle } from "../hooks/useTabTitle";

const Home = () => {
  useTabTitle("Home");

  return (
    <div className="flex flex-col items-center justify-center w-full h-full pb-12">
      <div className="flex flex-col px-24 gap-12 bg-hero bg-cover w-full min-h-[700px] h-full bg-no-repeat bg-center overflow-hidden justify-center">
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
      <div className="flex flex-none  w-full h-1 bg-white" />

      <div className="flex flex-col w-full max-w-full px-24 h-full mt-16 justify-center items-center gap-20 mb-6">
        <div className="flex flex-col w-full items-center justify-center gap-4 ">
          <p id="overview" className="font-poppins font-semibold text-4xl ">
            Overview
          </p>
          <p className="font-poppins font-medium text-xl text-center  ">
            MuLung Story is a MapleStory private server that is dedicated to
            providing a unique and challenging experience. We are a low-rate
            server that is focused on providing a nostalgic and challenging
            experience for our players. We are focusing on strong a late game
            content with a higher level cap and bigger line damages.
          </p>
        </div>
        <div className="flex flex-col w-full items-center justify-center gap-4 ">
          <p className="font-poppins font-semibold text-4xl ">Features</p>
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
              <p className="font-poppins font-semibold text-lg">
                And much more!
              </p>
            </div>
            <DefaultButton text="lets play!" link="register" useHref />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
