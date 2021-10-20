import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { img, title, description, id } = props.service;
  return (
    <div className="col-md-4">
      {" "}
      <div className="card-div" style={{ backgroundImage: `url(${img})` }}>
        <div className="card-content">
          <h3 className="card-heading fw-bold">{title}</h3>
          <p className="card-desc my-3">{description}</p>
          <Link to={`/services/${id}`} className="card-btn">
            Learn More
            <span className="ms-2">
              <i class="fas fa-chevron-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
