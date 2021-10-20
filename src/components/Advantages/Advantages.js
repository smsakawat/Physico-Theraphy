import GroupIcon from "@mui/icons-material/Group";
import HealingIcon from "@mui/icons-material/Healing";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedIcon from "@mui/icons-material/Verified";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { Typography } from "@mui/material";
const Advantages = () => {
  return (
    <div className="container py-5 my-5">
      <h1 className="text-start my-4">
        Our <span className="fw-bold">Advantages</span>
      </h1>
      <div className="d-flex justify-content-between align-items-center advantages">
        <div className=" p-4 me-1 border  d-flex justify-content-around align-items-center">
          <div className="advantage-icon me-3">
            <HealthAndSafetyIcon style={{ fontSize: 40 }} />
          </div>
          <div>
            <h5 className="fw-bold">Comportable Clinic</h5>
            <Typography variant="subtitle1" color="text.disabled">
              Our clinic feels like a comfortable health & fitness center
            </Typography>
          </div>
        </div>
        <div className="p-4 me-1 border  d-flex justify-content-between align-items-center">
          <div className="advantage-icon me-3">
            <GroupIcon style={{ fontSize: 40 }} />
          </div>
          <div>
            <h5 className="fw-bold">Practitioners Network</h5>
            <Typography variant="subtitle1" color="text.disabled">
              We will work closely with all your health practitioners
            </Typography>
          </div>
        </div>
        <div className=" border p-4 me-1 d-flex justify-content-between align-items-center">
          <div className="advantage-icon me-3">
            <VerifiedIcon style={{ fontSize: 40 }} />
          </div>
          <div>
            <h5 className="fw-bold">Therapy Goals</h5>
            <Typography variant="subtitle1" color="text.disabled">
              Setting goals is the best way to enjoy a successful outcome
            </Typography>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center my-3 advantages">
        <div className="p-4 me-1 border  d-flex justify-content-between align-items-center">
          <div className="advantage-icon me-3">
            <HealingIcon style={{ fontSize: 40 }} />
          </div>
          <div>
            <h5 className="fw-bold">Personalized Treatment</h5>
            <Typography variant="subtitle1" color="text.disabled">
              You will receive a full individualized treatment
            </Typography>
          </div>
        </div>
        <div className="p-4 me-1 border  d-flex justify-content-between align-items-center">
          <div className="advantage-icon me-3">
            <VerifiedUserIcon style={{ fontSize: 40 }} />
          </div>
          <div>
            <h5 className="fw-bold">Licensed Therapists</h5>
            <Typography variant="subtitle1" color="text.disabled">
              Your treatment will perfomed by experts here.
            </Typography>
          </div>
        </div>
        <div className=" p-4 me-1 border  d-flex justify-content-between align-items-center">
          <div className="advantage-icon me-3">
            <SchoolIcon style={{ fontSize: 40 }} />
          </div>
          <div>
            <h5 className="fw-bold">Experience Staff</h5>
            <Typography variant="subtitle1" color="text.disabled">
              Our therapists are certified in therapy technique
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
