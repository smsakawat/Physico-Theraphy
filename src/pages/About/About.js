import { Typography } from "@mui/material";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about-header">
        <div className="container">
          <h1 className="fw-bold">About Us</h1>
          <p className="lead text-secondary">
            We offer physical therapy services since 1996
          </p>
        </div>
      </div>
      <div className="container my-5 py-5">
        <div className="  row g-5">
          <div className="col-md-4 text-start">
            <div className="my-2">
              <h2 className="my-3">
                Our <span className="fw-bold">Vision</span>
              </h2>
              <Typography variant="sbtitle2" color="text.disabled">
                To be a company that attracts, rewards, and retains highly
                skilled physical therapy staff. Our proactive approach to the
                development of best business practices and promotion of
                effective treatment methods will help us accomplish this.
              </Typography>
            </div>
            <div className="my-2">
              <h2 className="my-3">
                Our <span className="fw-bold">Philosophy</span>
              </h2>
              <Typography variant="sbtitle2" color="text.disabled">
                Physio Physical Therapy is committed to providing high quality
                outpatient physical therapy services in beautiful
                state-of-the-art facilities.
              </Typography>
              <Typography
                variant="sbtitle2"
                color="text.disabled"
                style={{ margin: "15px" }}
              >
                As a healthcare leader we partner with groups and events within
                the communities we serve. If you're a Physical therapist looking
                to take your career to the next level, explore all the Physical
                Therapy career opportunities.
              </Typography>
            </div>
          </div>
          <div className="col-md-4">
            <div className="my-2">
              <h2 className="my-3">
                Our <span className="fw-bold">Mission</span>
              </h2>
              <Typography variant="sbtitle2" color="text.disabled">
                We are committed as primary healthcare professionals to help our
                clients resume their lifelong pursuit of health, fitness, and
                well-being.
              </Typography>
            </div>
            <div className="my-2">
              <Typography
                variant="body1"
                style={{
                  fontWeight: "bold",
                  margin: "15px 0",
                  color: "#66c1e8",
                }}
              >
                High Quality
              </Typography>
              <Typography variant="sbtitle2" color="text.disabled">
                We’ll provide hands-on treatment in the office and education you
                can take home with you, enabling you to become an active
                participant in your recovery and future physical health.
              </Typography>
            </div>

            <div className="my-2">
              <Typography
                variant="body1"
                style={{
                  fontWeight: "bold",
                  margin: "15px 0",
                  color: "#66c1e8",
                }}
              >
                Professional Service
              </Typography>
              <Typography variant="sbtitle2" color="text.disabled">
                Our five physical therapists have a combined 120 years of
                clinical experience and a shared passion for helping our
                community stay active.
              </Typography>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="https://demos.qreativethemes.com/physio/wp-content/uploads/sites/3/2015/11/about_us.jpg"
              className="img-fluid"
              style={{ border: "1px solid hidder", borderRadius: 5 }}
            />
          </div>
        </div>
      </div>
      <hr className="text-secondary" />
    </div>
  );
};

export default About;
