import DefaultButton from "../components/default-button";
import { useTabTitle } from "../hooks/useTabTitle";

const Home = () => {
  useTabTitle("Home");

  return (
    <>
      <DefaultButton />
    </>
  );
};
export default Home;
