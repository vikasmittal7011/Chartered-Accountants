import Footer from "../components/common/Footer";
import DetailsSection from "../components/home/DetailsSection";
import Navbar from "../components/home/Navbar";
import PlansSection from "../components/home/PlansSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <PlansSection />
      <DetailsSection />
      <Footer />
    </>
  );
};

export default Home;
