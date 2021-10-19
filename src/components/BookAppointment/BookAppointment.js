import { Button, TextField } from "@mui/material";
import "./BookAppointment.css";

const BookAppointment = () => {
  return (
    <div className="appointment-container">
      <div className="bookform-container">
        <div
          className="fw-bold text-start px-5 py-2 "
          style={{ backgroundColor: "#9c27b0", color: "#fff" }}
        >
          REQUEST AN APPOINTMENT
        </div>
        <form autoComplete="off" noValidate className="p-5">
          <p className="text-secondary text-start">
            Please confirm that you would like to request the following
            appointment:
          </p>
          <p className="fw-bold text-secondary">Your Information</p>
          <small className="text-secondary">
            please enter your first name,last name and email address:
          </small>
          <div className="mb-3 mt-1">
            <TextField
              required
              fullWidth
              color="secondary"
              label="First Name"
              variant="standard"
            />
          </div>
          <div className="my-3">
            <TextField
              required
              fullWidth
              color="secondary"
              label="Last Name"
              variant="standard"
            />
          </div>
          <div className="my-3">
            <TextField
              fullWidth
              color="secondary"
              label="Email Adress"
              variant="standard"
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Button
              type="submit"
              variant="outlined"
              color="secondary"
              style={{
                width: 400,
                borderRadius: 8,
                margin: "8px 0",
                padding: "10px 20px",
              }}
            >
              Confirm Booking
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
