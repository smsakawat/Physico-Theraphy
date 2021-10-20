import { getAuth, updateProfile } from "@firebase/auth";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../hooks/useAuth";
import "./Signup.css";

toast.configure();
const Signup = () => {
  const auth = getAuth();
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [nameError, setNameError] = useState(false);
  // redirecting user after login
  const history = useHistory();
  // show  success message
  const notify = () => {
    toast.success("Welcome in Physico Theraphy!!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  // destructuring from use auth
  const { signinWithGoogle, signUpUsingEmailAndPass } = useAuth();
  // sign up with google
  const handleGoogleSignUP = () => {
    signinWithGoogle()
      .then((result) => {
        notify();
        history.push("/home");
      })
      .catch((err) => {});
  };

  // sign up on from submit
  const hanldeFormSubmit = (e) => {
    e.preventDefault();
    values.name ? setNameError(false) : setNameError(true);
    values.email ? setEmailError(false) : setEmailError(true);
    values.password ? setPassError(false) : setPassError(true);
    if (values.name === "" || values.email === "" || values.password === "") {
      return;
    } else {
      signUpUsingEmailAndPass(values.email, values.password, values.name)
        .then((result) => {
          updateProfile(auth.currentUser, {
            displayName: values.name,
          }).then(() => {
            notify();
            history.push("/home");
          });
        })
        .catch((error) => {});
    }
  };
  return (
    <>
      <div className="signup-container">
        <div className="form-container p-5">
          <form autoComplete="off" noValidate onSubmit={hanldeFormSubmit}>
            <h4 className="text-start fw-bold primary-color">Sign UP Here</h4>
            <div className="my-3">
              <TextField
                error={nameError}
                required
                fullWidth
                color="secondary"
                label="Full Name"
                variant="filled"
                onBlur={(e) => {
                  setValues({ ...values, name: e.target.value });
                }}
              />
            </div>
            <div className="my-3">
              <TextField
                error={emailError}
                required
                fullWidth
                color="secondary"
                label="Email Adress"
                variant="filled"
                onBlur={(e) => {
                  setValues({ ...values, email: e.target.value });
                }}
              />
            </div>
            <div className="my-3">
              <TextField
                error={passError}
                fullWidth
                color="secondary"
                label="Password"
                variant="filled"
                onBlur={(e) => {
                  setValues({ ...values, password: e.target.value });
                }}
              />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                style={{
                  width: 400,
                  borderRadius: 8,
                  margin: "8px 0",
                  padding: "10px 20px",
                }}
              >
                Sign Up
              </Button>
            </div>
            <span>
              Already have an account?<Link to="/login">Login Here</Link>
            </span>
          </form>
          <hr className="text-secondary " />
          <p className="text-secondary text-center"> or use google sign-in</p>
          <div className="d-flex justify-content-center align-items-center">
            <Button
              onClick={handleGoogleSignUP}
              variant="outlined"
              style={{
                border: "2px solid lightgray",
                backgroundColor: "transparent",
                padding: "6px 16px",
                borderRadius: 9,
                color: "gray",
              }}
            >
              <span className="me-2">
                <FcGoogle style={{ fontSize: "2em" }} />
              </span>
              Sign up with Google
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
