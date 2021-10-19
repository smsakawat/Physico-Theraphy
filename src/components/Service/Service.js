import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { img, title, description, id } = props.service;
  return (
    <div className="col single-service">
      <div className="card h-100">
        <div className="img-div">
          <img
            src={img}
            className="card-img-top service-img"
            alt="here was a therapy photo"
          />
          <div className="overlay"></div>
        </div>
        <div className="card-body">
          <h5 className="card-title " id="title">
            {title}
          </h5>
          <Typography variant="subtitle2" color="text.disabled">
            {description}
          </Typography>
        </div>
        <div className="d-flex justify-content-start align-items-center ps-2">
          <Link to={`/services/${id}`} style={{ textDecoration: "none" }}>
            <Button variant="text" style={{ color: "#66c1e8" }}>
              Find Out More
              <span className="arrow ms-2">
                <ArrowForwardIosIcon style={{ fontSize: 16 }} />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
