import HeroSection from '../components/HeroSection.jsx';
import FeaturedMonasteries from "../components/FeaturedMonasteries.jsx";
import AISection from "../components/AISection"
import AISearch from "../components/AI/AISearch";
import BackgroundVideo from '../components/backgroundVideo.jsx';

const Home = () => {
  return (
    <>
      <HeroSection />
        <FeaturedMonasteries />
        <BackgroundVideo/>
         <AISection />
          <AISearch />  
    </>
  );
};

export default Home;
