import BannerSection from "./component/bannerSection/BannerSection";
import Blog from "./component/blog/Blog";
import ContactUs from "./component/contactUs/ContactUs";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Identity from "./component/identity/Identity";
import OurProducts from "./component/ourProducts/OurProducts";
import Terms from "./component/terms/Terms";

function App() {

  return (
    <>
    <Header />
    <BannerSection />
    <Identity />
    <OurProducts />
    <Blog />
    <ContactUs />
    <Footer />
    <Terms />
    </>
  )
}

export default App;
