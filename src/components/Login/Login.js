import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../hooks/useAuth";
import "./login.css";

toast.configure();
const Login = () => {
  // login states
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { isLoading, setIsLoading, signInWithEmail, signinWithGoogle } =
    useAuth();
  const [emailError, setEmailError] = useState();
  const [passError, setPassError] = useState();
  const history = useHistory();
  const location = useLocation();

  const notify = () => {
    toast.success("Login Successfull!", {
      // we can also change the notify by inline styles here
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const redirect_ui = location.state?.from || "/";

  //    signin with email
  const handleSignInWithEmail = (e) => {
    e.preventDefault();
    values.email ? setEmailError(false) : setEmailError(true);
    values.password ? setPassError(false) : setPassError(true);
    if (values.email === "" || values.password === "") {
      setError("Input filelds cannot be empty");
      return;
    }
    signInWithEmail(values.email, values.password)
      .then((result) => {
        notify();
        setError("");
        history.push(redirect_ui);

        // console.log(result.user);
      })
      .catch((error) => {
        setError("Invalid Email or Password");
      });
  };
  //   sign in with google
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    signinWithGoogle()
      .then((result) => {
        notify();
        history.push(redirect_ui);
      })
      .catch((error) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="login-container">
      <div className="loginform-container p-5">
        <form autoComplete="off" noValidate onSubmit={handleSignInWithEmail}>
          <h4 className="text-center primary-color fw-bold">
            Log in to your account
          </h4>

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
              required
              fullWidth
              color="secondary"
              label="Password"
              variant="filled"
              onBlur={(e) => {
                setValues({ ...values, password: e.target.value });
              }}
            />
            <p className="text-danger my-1">{error}</p>
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
              Log In
            </Button>
          </div>
          <span>
            Not have an account?<Link to="/signup">Sign Up</Link>
          </span>
        </form>
        <hr className="text-secondary " />
        <p className="text-secondary text-center"> or use google sign-in</p>
        <div className="d-flex justify-content-center align-items-center">
          <Button
            onClick={handleGoogleSignIn}
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
              <FcGoogle style={{ fontSize: "1.6em" }} />
            </span>
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;

// const [user, setUser] = useState({ email: "", password: "" });
//   const [emailError, setEmailError] = useState(false);
//   const [passError, setPassError] = useState(false);
//   const [gender, setGender] = useState("male");

//   const handleOnChange = (e) => {
//     e.preventDefault();
//     user.email ? setEmailError(false) : setEmailError(true);
//     user.password ? setPassError(false) : setPassError(true);
//   };
