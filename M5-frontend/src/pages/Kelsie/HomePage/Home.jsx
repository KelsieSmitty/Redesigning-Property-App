import Hero from "../../../components/kelsieComponents/homePage/Hero";
import Navbar from "../../../components/kelsieComponents/homePage/NavBar";
import Sponsors from "../../../components/kelsieComponents/homePage/Sponsors";
import Services from "../../../components/kelsieComponents/homePage/Services";
import Blog from "../../../components/kelsieComponents/homePage/Blog";
import Reviews from "../../../components/kelsieComponents/homePage/Reviews";
import Footer from "../../../components/kelsieComponents/homePage/Footer";

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Image  */}
      <Hero />

      {/* Sponsors Bar  */}
      <Sponsors />

      {/* Services Section  */}
      <Services />

      {/* Blog Section  */}
      <Blog />

      {/* Reviews Section  */}
      <Reviews />

      {/* Footer  */}
      <Footer />
    </div>
  );
};

export default HomePage;
