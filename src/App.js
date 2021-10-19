import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookAppointment from "./components/BookAppointment/BookAppointment";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Signup from "./components/Sign Up/Signup";
import AuthProvider from "./Context/AuthProvider";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home.";
import NotFound from "./pages/NotFound/NotFound";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <PrivateRoute exact path="/booking">
            <BookAppointment />
          </PrivateRoute>
          <PrivateRoute path="/blogs">
            <Blogs />
          </PrivateRoute>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/services/:id">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
