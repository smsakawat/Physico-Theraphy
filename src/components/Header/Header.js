import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  const [scrollNavbar, setScrollNavbar] = useState(false);

  const onScrollNavbar = () => {
    if (window.scrollY >= 50) {
      setScrollNavbar(true);
    } else {
      setScrollNavbar(false);
    }
  };
  // change navbar on scroll
  window.addEventListener("scroll", onScrollNavbar);
  return (
    <div>
      <div className="title-contianer d-none d-md-block" id="top">
        <div className="contact-container container">
          <div className="pe-4 py-1 mt-2 border-end d-flex justify-content-center align-items-center">
            <div className="contact-icon me-3">
              <HomeIcon color="disabled" sx={{ fontSize: 40 }} />
            </div>
            <div>
              <Typography
                variant="body1"
                color="text.secondary"
                style={{ fontWeight: 600 }}
              >
                Visit Our Location
              </Typography>

              <Typography variant="subtitle2" color="text.disabled">
                235 Main Street New York
              </Typography>
            </div>
          </div>
          <div className="pe-4 py-1  mt-2 border-end d-flex justify-content-center align-items-center">
            <div className="contact-icon me-3">
              <CallIcon color="disabled" sx={{ fontSize: 40 }} />
            </div>
            <div>
              <Typography
                variant="body1"
                color="text.secondary"
                style={{ fontWeight: 600 }}
              >
                Give Us a Call
              </Typography>
              <Typography variant="subtitle2" color="text.disabled">
                +(19)123 455 - 4490
              </Typography>
            </div>
          </div>
          <div className="pe-4 py-1  mt-2 border-end d-flex justify-content-center align-items-center">
            <div className="contact-icon me-3">
              <EmailIcon color="disabled" sx={{ fontSize: 40 }} />
            </div>
            <div>
              <Typography
                variant="body1"
                color="text.secondary"
                style={{ fontWeight: 600 }}
              >
                Send us a Message
              </Typography>
              <Typography variant="subtitle2" color="text.disabled">
                info@phyisicotherapy.com
              </Typography>
            </div>
          </div>
          <div className="pe-4 py-1  mt-2 d-flex justify-content-center align-items-center">
            <div className="contact-icon me-3">
              <AccessTimeFilledIcon color="disabled" sx={{ fontSize: 40 }} />
            </div>
            <div>
              <Typography
                variant="body1"
                color="text.secondary"
                style={{ fontWeight: 600 }}
              >
                Opening Hours
              </Typography>
              <Typography variant="subtitle2" color="text.disabled">
                Monday-Thursday:8AM-6PM
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Navbar
        style={{ backgroundColor: "#fff" }}
        variant="light"
        className={scrollNavbar ? "shadow-sm" : "shadow-none"}
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand
            href="#home"
            className="d-flex align-items-center justify-cotent-center"
          >
            <span className="me-2">
              <AcUnitIcon color="secondary" sx={{ fontSize: 40 }} />
            </span>
            <span>
              <Typography variant="h6" style={{ fontWeight: 600 }}>
                Physico Therapy
              </Typography>
              <Typography variant="subtitle2" color="text.disabled">
                Physical Therapy Clinic WP
              </Typography>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto">
              <Nav.Link
                style={{ fontWeight: "bold", paddingRight: 10 }}
                as={Link}
                to="/home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                style={{ fontWeight: "bold", paddingRight: 25 }}
                as={Link}
                to="/about"
              >
                About Us
              </Nav.Link>
              <Nav.Link
                style={{ fontWeight: "bold", paddingRight: 25 }}
                as={Link}
                to="/booking"
              >
                Book Now
              </Nav.Link>

              <Navbar.Text style={{ margin: "0 10px" }}>
                {user.email && user.displayName}
              </Navbar.Text>
              {user.email ? (
                <div className="pt-1">
                  <LogoutIcon
                    onClick={logOut}
                    style={{
                      fontSize: "2em",
                      bordr: "none",
                      cursor: "pointer",
                    }}
                  />
                </div>
              ) : (
                <>
                  <Nav.Link
                    style={{ fontWeight: "bold", paddingRight: 15 }}
                    as={Link}
                    to="/signup"
                  >
                    <Button variant="outlined" color="secondary" size="small">
                      Sign Up
                    </Button>
                  </Nav.Link>
                  <p className="text-secondary m-2">or</p>
                  <Nav.Link
                    style={{ fontWeight: "bold", paddingRight: 15 }}
                    as={Link}
                    to="/login"
                  >
                    <Button variant="outlined" color="info" size="small">
                      Log In
                    </Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
