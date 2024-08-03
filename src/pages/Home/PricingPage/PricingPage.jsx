import React from "react";

import { Button } from "../../../components";

import rightSignLogo from "../../../assets/commonImages/rightSign.svg";
import ReplatformLogo from "../../../assets/replatformlogo.png";

import "../Home.scss";
import "./PricingPage.scss";

const PricingPage = () => {
  const planDetails = [
    {
        planName: "SaaS Model",
        planMotive:  "Make infrastructure management better for teams",
        planFeatures: [
            "2 Environment support", 
            "User and team inventory",
            "Application inventory",
            "Application monitoring",
            "Application logging",
            "Application alerting",
            "RCA/Incident management",
            "Error budget",
            "Cost management"
        ],
        price: "200" 
    },
    {
        planName: "Self-Hosted Cluster Model",
        planMotive:  "BYOK model for more control with data security",
        planFeatures: [
            "All SaaS Model features", 
            "Bring your own Kubernetes (BYOK)",
            "Cluster management",
            "Multi-environment support", 
            "Customer support",
            "Role-based access control"
        ],
        price: "250" 
    },
    {
        planName: "Enterprise Model",
        planMotive:  "Ideal for big organizations",
        planFeatures: [
            "All Self-Hosted Model features", 
            "Audit trail",
            "24/7 customer support"
        ],
        price: "300" 
    }
  ];

  return (
    <div id="pricing" className="pricing-page"> 
      <div className="center">
        <p className="service-chip pricing-chip">OUR PRICING</p>
        <p className="section-heading pricing-heading">What we are offering for orgnization?</p>
      </div>
      <div className="pricing-wrapper">
        {planDetails.map((plan) => (
            <div className="plan-details flex_col" key={plan.planName}>
                <div className="plan-heading-image flex_align_center_HV">
                  <img src={ReplatformLogo} alt="ReplatformLogo" />
                </div>
                <div className="plan-name flex-col-item-center">
                    <h3>{plan.planName}</h3>
                    <p>{plan.planMotive}</p>
                </div>
                <div className="plan-features">
                  {plan.planFeatures.map((feature)=>(
                    <p className="feature" key={feature}>
                      <span className="sign">
                        <img src={rightSignLogo} alt="" />
                      </span>
                      {feature}
                    </p>
                  ))}
                </div>
                <div className="plan-price flex-col-item-center">
                    <h3>${plan.price}</h3>
                    <p>per orgnization /month</p>
                </div>
                <div className="choose-plan-btn flex_align_center_HV">
                  <Button
                    type={"button"}
                    className={"button_32_secondary"}
                    text={"Select this plan"}
                  />
                </div>

            </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
