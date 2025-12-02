import HeroSection from '../components/HeroSection.jsx';
import FeaturedMonasteries from "../components/FeaturedMonasteries.jsx";
import AISection from "../components/AISection"
import AISearch from "../components/AI/AISearch";

const Home = () => {
  return (
    <>
      <HeroSection />
        <FeaturedMonasteries />
         <AISection />
          <AISearch />  
    </>
  );
};

export default Home;
