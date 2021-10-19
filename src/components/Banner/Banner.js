import { Button, Typography } from "@mui/material";
import React from "react";
import { Carousel } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Banner.css";

const Banner = () => {
  const history = useHistory();
  return (
    <Carousel fade className="container-fluid">
      <Carousel.Item className="slider-one d-flex align-items-center">
        <div className="container text-start ">
          <Typography
            variant="h6"
            color="info.main"
            style={{ letterSpacing: 5, fontWeight: 600 }}
          >
            SUPERIOR EXPERTISE
          </Typography>

          <Typography
            variant="h3"
            style={{ fontWeight: "500", color: "#fff", marginTop: 5 }}
          >
            We've been in business since 1996
          </Typography>
          <Button
            onClick={() => history.push("/booking")}
            variant="contained"
            color="secondary"
            size="large"
            style={{ marginTop: 20 }}
          >
            Book Apponitment
          </Button>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-two d-flex align-items-center">
        <div className="container text-start ">
          <Typography
            variant="h6"
            color="info.main"
            style={{ letterSpacing: 5, fontWeight: 600 }}
          >
            HELPING YOU LIVE LIFE
          </Typography>

          <Typography
            variant="h3"
            style={{ fontWeight: "500", color: "#fff", marginTop: 5 }}
          >
            We offer highly specialized treatments
          </Typography>
          <Button
            onClick={() => {
              history.push("/signup");
            }}
            variant="contained"
            color="secondary"
            size="large"
            style={{ marginTop: 20 }}
          >
            Contact Now
          </Button>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-three d-flex align-items-center">
        <div className="container text-start ">
          <Typography
            variant="h6"
            color="info.main"
            style={{ letterSpacing: 5, fontWeight: 600 }}
          >
            COMMITED TO HELPING
          </Typography>

          <Typography
            variant="h3"
            style={{ fontWeight: "500", color: "#fff", marginTop: 5 }}
          >
            We're a unique physical therapy clinic
          </Typography>
          <Button
            onClick={() => history.push("/about")}
            variant="contained"
            color="secondary"
            size="large"
            style={{ marginTop: 20 }}
          >
            More About Us
          </Button>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-four d-flex align-items-center">
        <div className="container text-start ">
          <Typography
            variant="h6"
            color="info.main"
            style={{ letterSpacing: 5, fontWeight: 600 }}
          >
            GOAL-ORIENTED APPROACH
          </Typography>

          <Typography
            variant="h3"
            style={{ fontWeight: "bold", color: "#fff", marginTop: 5 }}
          >
            A practice build on honesty and integrity
          </Typography>
          <Button
            onClick={() => history.push("/signup")}
            variant="contained"
            color="secondary"
            size="large"
            style={{ marginTop: 20 }}
          >
            Get In Touch
          </Button>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
