import "./HomePage.scss";
import HeroAnim from "./HeroAnim/HeroAnim";
import Results from "./Results/Results";
import CustomSwiper from "./Results/ResultsNew/ResultsNew";
import Header from "@/utils/Header/Header";
import Footer from "@/utils/Footer/Footer";
import Hero from "./Hero/Hero";
import AboutService from "./AboutService/AboutService";
import ServiceCta from "./ServiceCta/ServiceCta";

const HomePage = ({ type }) => {
  return (
    <main className="home">
      <Header />
      <Hero />
      <AboutService type={type} />
      <ServiceCta type={type} />
      <CustomSwiper />
      <Footer />
    </main>
  );
};

export default HomePage;
