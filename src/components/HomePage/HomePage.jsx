import "./HomePage.scss";
import HeroAnim from "./HeroAnim/HeroAnim";
import Results from "./Results/Results";

const HomePage = () => {
  return (
    <main className="home">
      <HeroAnim />
      <Results />
    </main>
  );
};

export default HomePage;
