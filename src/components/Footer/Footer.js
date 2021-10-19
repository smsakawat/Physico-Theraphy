// import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import { Typography } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container mb-0">
        <div className="container">
          <div className="footer-title py-4">
            <div className="contact-container">
              <div>
                <a
                  className="mx-2"
                  style={{
                    fontSize: "1.8em",
                    color: "#c1c7ce",
                    cursor: "pointer",
                  }}
                >
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a
                  className="mx-2"
                  style={{
                    fontSize: "1.8em",
                    color: "#c1c7ce",
                    cursor: "pointer",
                  }}
                >
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a
                  className="mx-2"
                  style={{
                    fontSize: "1.8em",
                    color: "#c1c7ce",
                    cursor: "pointer",
                  }}
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  className="mx-2"
                  style={{
                    fontSize: "1.8em",
                    color: "#c1c7ce",
                    cursor: "pointer",
                  }}
                >
                  <i className="fab fa-youtube-square"></i>
                </a>
              </div>
              <div className="pe-4 py-1 mt-2  d-flex justify-content-center align-items-center ">
                <div className="contact-icon me-3">
                  <HomeIcon sx={{ fontSize: 40, color: "#c1c7ce" }} />
                </div>
                <div>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: 600, color: "#fff" }}
                  >
                    Visit Our Location
                  </Typography>

                  <Typography variant="subtitle2" style={{ color: "#c1c7ce" }}>
                    235 Main Street New York
                  </Typography>
                </div>
              </div>
              <div className="pe-4 py-1  mt-2  d-flex justify-content-center align-items-center">
                <div className="contact-icon me-3">
                  <CallIcon sx={{ fontSize: 40, color: "#c1c7ce" }} />
                </div>
                <div>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    style={{ fontWeight: 600, color: "#fff" }}
                  >
                    Give Us a Call
                  </Typography>
                  <Typography variant="subtitle2" style={{ color: "#c1c7ce" }}>
                    +(19)123 455 - 4490
                  </Typography>
                </div>
              </div>
              <div className="pe-4 py-1  mt-2  d-flex justify-content-center align-items-center">
                <div className="contact-icon me-3">
                  <EmailIcon sx={{ fontSize: 40, color: "#c1c7ce" }} />
                </div>
                <div>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    style={{ fontWeight: 600, color: "#fff" }}
                  >
                    Send us a Message
                  </Typography>
                  <Typography variant="subtitle2" style={{ color: "#c1c7ce" }}>
                    info@phyisicotherapy.com
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <hr className=" text-light d-none d-md-block" />
        </div>
        <div className="container">
          <div className="py-4 d-flex justify-content-between align-items-center footer-middle">
            <div
              className="text-light text-start footer-about"
              style={{ width: "250px" }}
            >
              <h5 className="fw-bold">About Us</h5>
              <Typography
                variant="subtitle1"
                style={{ color: "#c1c7ce", marginTop: 45 }}
              >
                Our team of highly trained professionals uses the latest healing
                technologies to restore you to pain-free health, quickly and
                easily.This includes, but is not limited to, your work and home
                stressors, overall body condition.
              </Typography>
            </div>
            <div className="text-start text-light footer-services">
              <h5 className="fw-bold text-start">Our Services</h5>
              <div className="my-4">
                <div className="services">
                  <i className="fas fa-chevron-right me-3"></i>View all Services
                </div>
                <div className="services">
                  <i className="fas fa-chevron-right me-3"></i>Chyropractice
                  Therapy
                </div>
                <div className="services">
                  <i className="fas fa-chevron-right me-3"></i>Clinical Plates
                </div>
                <div className="services">
                  <i className="fas fa-chevron-right me-3"></i>Message Therapy
                </div>
                <div className="services">
                  <i className="fas fa-chevron-right me-3"></i>Physical Therapy
                </div>
                <div className="services">
                  <i className="fas fa-chevron-right me-3"></i>Sport Injuries
                </div>
                <div className="services">
                  <i className="fas fa-chevron-right me-3"></i>Work Injuries
                </div>
              </div>
            </div>
            <div className="text-start pt-4">
              <h5 className="fw-bold text-light">Opening Hours</h5>
              <div className="my-4">
                <div
                  className="fw-bold py-2 d-flex justify-content-between align-items-center"
                  style={{
                    borderBottom: "1px solid #c1c7ce",
                    color: "#fff",
                  }}
                >
                  <small className="me-4">Sunday</small>
                  <small>08:00AM-09:00PM</small>
                </div>
                <div
                  className=" d-flex py-w justify-content-between align-items-center"
                  style={{
                    borderBottom: "1px solid #c1c7ce",
                    color: "#c1c7ce",
                  }}
                >
                  <small className="me-4">Monday</small>
                  <small>08:00AM-05:00PM</small>
                </div>
                <div
                  className=" d-flex py-2 justify-content-between align-items-center"
                  style={{
                    borderBottom: "1px solid #c1c7ce",
                    color: "#c1c7ce",
                  }}
                >
                  <small className="me-4">Tuesday</small>
                  <small>08:00AM-07:00PM</small>
                </div>
                <div
                  className=" d-flex py-2 justify-content-between align-items-center"
                  style={{
                    borderBottom: "1px solid #c1c7ce",
                    color: "#c1c7ce",
                  }}
                >
                  <small className="me-4">Wednasday</small>
                  <small>08:00AM-09:00PM</small>
                </div>
                <div
                  className=" d-flex py-2 justify-content-between align-items-center"
                  style={{
                    borderBottom: "1px solid #c1c7ce",
                    color: "#c1c7ce",
                  }}
                >
                  <small className="me-4">Thursday</small>
                  <small>08:00AM-10:00PM</small>
                </div>
                <div
                  className=" d-flex py-2 justify-content-between align-items-center"
                  style={{
                    borderBottom: "1px solid #c1c7ce",
                    color: "#c1c7ce",
                  }}
                >
                  <small className="me-4">Friday</small>
                  <small className="fw-bold">CLOSED</small>
                </div>
                <div
                  className=" d-flex py-2 justify-content-between align-items-center"
                  style={{
                    color: "#c1c7ce",
                  }}
                >
                  <small className="me-4">SATURDAY</small>
                  <small className="fw-bold">CLOSED</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-end "
        style={{ backgroundColor: "#555a5f", height: 65 }}
      >
        <div className="container d-flex justify-content-between align-items-center pt-4 footer-last">
          <Typography variant="body2" style={{ color: "#c1c7ce" }}>
            &copy; Copyright 2021 Physico Theraphy Developedy By{" "}
            <span className="fw-bold">Sakawat</span>{" "}
          </Typography>
          <Typography variant="subtitle2" style={{ color: "#c1c7ce" }}>
            Schedule Your next{" "}
            <span className="fw-bold text-light">
              <i className="fas fa-calendar-check"></i>Appointment
            </span>
          </Typography>
          <a href="#top">
            {" "}
            <i
              className="fas fa-arrow-alt-circle-up"
              style={{ fontSize: "1.8em", color: "#c1c7ce" }}
            ></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
