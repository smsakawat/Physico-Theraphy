import { Button } from "@mui/material";
import { useHistory } from "react-router";
import "./Support.css";

const Support = () => {
  const history = useHistory();
  return (
    <div className="support-container">
      <div className="px-5 mx-5 w-75">
        <h2 className="fw-bolder text-light text-center ">
          No matter whether your condition was caused by a sport, work accident
          or otherwise, we welcome the chance to serve you.
        </h2>
        <div className="d-flex justify-content-center">
          <Button
            onClick={() => history.push("/booking")}
            variant="contained"
            style={{
              marginTop: 50,
              width: 250,
              borderRadius: 250,
              backgroundColor: "transparent",
              border: "2px solid lightgray",
              padding: "10px 0",
            }}
          >
            Schedule An Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Support;
