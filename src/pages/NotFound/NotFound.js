import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const history = useHistory();
  return (
    <div className="error-container d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="error text-light"> 404</h1>
        <h2 className="error-title text-light">PAGT NOT FOUND</h2>
        <div className="d-flex justify-content-center align-items-center mb-4">
          {" "}
          <small className="lead text-color w-50 text-center">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable
          </small>
        </div>

        <Button
          onClick={() => history.push("/home")}
          variant="contained"
          color="primary"
        >
          <i className="fas fa-arrow-left me-2 text-light"></i> Back To Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
<i className="fas fa-arrow-left me-2 text-light"></i>;
