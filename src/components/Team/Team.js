import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Team.css";
const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("/teamMembers.json")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data));
  }, []);
  return (
    <>
      <div className="container fluid my-5 py-4">
        <div className="container">
          <h1 className="my-5">
            Meet <span className="fw-bold">The Team</span>
          </h1>
          <div className="row g-3 ">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-md-3 single-member">
                <Card className="h-100 ">
                  <div className="img-div">
                    <Card.Img
                      variant="top"
                      src={member.img}
                      className="theraphist-img"
                      style={{ height: "210px" }}
                    />{" "}
                    <div className="overlay"></div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{member.name}</h5>
                    <h6 className="fw-bold primary-color">
                      {member.speciality}
                    </h6>
                    <hr className="my-3 px-2 text-secondary" />
                    <Typography variant="body2" color="text.disabled">
                      {member.description}
                    </Typography>
                    <div className="mt-3">
                      {" "}
                      <Link to="/signup" style={{ textDecoration: "none" }}>
                        <Button variant="text">
                          Know More
                          <i className="fas fa-chevron-right ms-2"></i>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
