import { Link, useNavigate } from 'react-router-dom';

import bannerImg from "../../../../assets/banner-img.jpg";

import "./HeroSection.scss";

const HeroSection = () => {
  const navigate = useNavigate();
  // const handleToGetDemo =() => {
  //   navigate("https://calendly.com/praveen-shukla-c42/30min");
  // }
  return (
    <div className="heroBanner">
        <div className="backdrop-img">
          <img src={bannerImg} />
        </div>
        <div className="opacity-layer"></div>
        <div className="content">
          <div className="heroBannerContent">
          <p className="title">Reimagine your platform/SRE/DevOps engineering workflows</p>
          <p className="subTitle">
            "RePlatform simplifies Kubernetes deployment, config management, and incident handling. Enjoy real-time monitoring, customizable alerts, and a user-friendly interface to streamline workflows and boost efficiency. Focus on building, we handle the rest."
          </p>


            <div className="searchInput">
              <button type="submit">
                {/* Subscribe Now */}
                <Link to={"https://calendly.com/praveen-shukla-c42/30min"} target='_blank'> Request For Demo </Link>
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeroSection;