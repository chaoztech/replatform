import React, { useState } from "react";
import "./Services.scss";
import oneClickDeployment from "../../../assets/homeServicesImages/one_click_deployment.svg";
import appConfig from "../../../assets/homeServicesImages/app_config.svg";
import appAlert from "../../../assets/homeServicesImages/app_alerts.svg";
import appCatalog from "../../../assets/homeServicesImages/app_catalog.svg";
import appIncident from "../../../assets/homeServicesImages/app_incident.svg";
import appLogging from "../../../assets/homeServicesImages/app_logging.svg";
import appMonitoring from "../../../assets/homeServicesImages/app_monitoring.svg";
import appSliSlo from "../../../assets/homeServicesImages/app_sli_slo.svg";

const SERVICES = [
  {
    service: "One-click Kubernetes deployment",
    description: "Streamline Kubernetes deployment with a single click.",
    imgUrl: oneClickDeployment,
  },
  {
    service: "App config Management",
    description:
      "Efficiently handle application configuration with streamlined App Config Management.",
    imgUrl: appConfig,
  },
  {
    service: "Incident/RCA management",
    description:
      "Efficiently handle incident and root cause analysis (RCA) management.",
    imgUrl: appIncident,
  },
  {
    service: "SLIs/SLOs management",
    description:
      "Efficiently manage SLIs (Service Level Indicators) and SLOs (Service Level Objectives) for optimal performance and reliability.",
    imgUrl: appSliSlo,
  },
  {
    service: "App Monitoring",
    description:
      "Continuous monitoring of application performance for optimal functionality and user experience.",
    imgUrl: appMonitoring,
  },
  {
    service: "App Logging",
    description:
      "Efficient app logging for streamlined troubleshooting and analysis.",
    imgUrl: appLogging,
  },
  {
    service: "Alert Management",
    description:
      "Efficiently oversee and respond to alerts through strategic alert management.",
    imgUrl: appAlert,
  },
  {
    service: "Service Catalog",
    description:
      "A Service Catalog organizes and presents a comprehensive list of available services within an organization.",
    imgUrl: appCatalog,
  },
];

const Services = () => {
  const [servicesList, SetServicesList] = useState(SERVICES);
  return (
    <div id="services" className="">
      <div className="container">
        <div className=" center">
          <p className="service-chip">OUR EXPERTISE</p>
          <p className="section-heading">What we are doing for you?</p>
        </div>
        <div className="services">
          {servicesList.map((service) => (
            <div key={service.service} className="card-details">
              <img src={service.imgUrl} />
              <h2 className="heading">{service.service}</h2>
              <p className="description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;