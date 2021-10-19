import { Typography } from "@mui/material";
import "./Details.css";

const Details = ({ service }) => {
  const { title, img1, img2, heading1, heading2, desc1, desc2 } = service || {};
  return (
    <div>
      <div className="details-header">
        <div className="d-flex justify-content-start align-items-center">
          <h1 className="fw-bold">{title}</h1>
        </div>
      </div>
      <div className="container">
        <div className="row g-3 my-4">
          <div className="col-md-5 col-6">
            <img
              src={img1}
              className="img-fluid "
              style={{ border: "1px solid hidden", borderRadius: 5 }}
            />
          </div>
          <div className="col-md-7 col-6">
            <Typography
              variant="h5"
              color="info.main"
              style={{ fontWeight: "bold", margin: "14" }}
            >
              {heading1}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ marginTop: 40, lineHeight: "1.3rem" }}
            >
              {desc1}
            </Typography>
          </div>
        </div>
        <div className="row g-3 my-4">
          <div className="col-md-5 col-6">
            <img
              src={img2}
              className="img-fluid "
              style={{ border: "1px solid hidden", borderRadius: 5 }}
            />
          </div>
          <div className="col-md-7 col-6">
            <Typography
              variant="h5"
              color="info.main"
              style={{ fontWeight: "bold", margin: "14" }}
            >
              {heading2}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ marginTop: 40, lineHeight: "1.3rem" }}
            >
              {desc2}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
