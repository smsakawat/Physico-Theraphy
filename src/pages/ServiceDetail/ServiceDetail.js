import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../../components/Details/Details";
// import "./ServiceDetail.css";

const ServiceDetail = () => {
  const [services, setServices] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch("/detailedServices.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      {services
        .filter((service) => service.id === id)
        .map((service) => (
          <Details key={service.id} service={service}></Details>
        ))}
    </div>
  );
};

export default ServiceDetail;
