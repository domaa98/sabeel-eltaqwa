import BannerSection from "./component/bannerSection/BannerSection";
import Blog from "./component/blog/Blog";
import ClientsReview from "./component/clientsReview/clientsReview";
import ContactUs from "./component/contactUs/ContactUs";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Identity from "./component/identity/Identity";
import OurProducts from "./component/ourProducts/OurProducts";
import OurServices from "./component/ourServices/OurServices";

function App() {

  return (
    <>
    <Header />
    <BannerSection />
    <Identity />
    <OurProducts />
    <OurServices />
    <ClientsReview />
    <Blog />
    <ContactUs />
    <Footer />
    </>
  )
}

export default App;
