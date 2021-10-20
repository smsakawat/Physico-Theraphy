import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <div className="container my-5 " id="services">
        <div className="service-title">
          <h1 className="fw-bold  text-center">
            Our <span className="primary-color"> Services</span>
          </h1>
          <div className=" py-2 text-center mt-2">
            <h3>
              We{" "}
              <span className="fw-bold">offer various Physical Services</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row  g-5">
          {services?.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
