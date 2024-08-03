import Header from "./Header/Header";
import PricingPage from "./PricingPage/PricingPage";
import Services from "./Services/Services";
import Demo from "./Demo/Demo";

import "./Home.scss";

const Home = () => {

  return (
    <div className="home-page">
      <Header />
      
      <Services />
      
      <Demo />
      
      <PricingPage />
      
      <div id="contactUs" className="">
        <div className="container">
          <div className="center">
            <p className="service-chip">Contact Us</p>
            <p className="section-heading">Reach out to us</p>
            <div className="contact-us-data">
              <p className="">
                Embark on a journey with us! Your thoughts matter, and we're
                eager to connect.
                <br />
                Reach out to us at{" "}
                <a href="mailto:contact@replatform.in">contact@replatform.in</a>
                , where innovation meets communication. Let's shape the future
                together!
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
