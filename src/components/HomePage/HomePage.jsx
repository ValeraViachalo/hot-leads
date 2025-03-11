import "./HomePage.scss";
import HeroAnim from "./HeroAnim/HeroAnim";
import Results from "./Results/Results";
import CustomSwiper from "./Results/ResultsNew/ResultsNew";

const HomePage = () => {
  return (
    <main className="home">
      <HeroAnim />
      {/* <Results /> */}
      <CustomSwiper />
    </main>
  );
};

export default HomePage;
