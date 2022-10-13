import axios from "axios";
import { Link } from "react-router-dom";

const registration = ({ username, email, password, confirm_password }) => {
  if (password === confirm_password) {
    const response = axios
      .post("http://127.0.0.1:8000/api/auth/register/", {
        username,
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("isAuth", true);
        localStorage.setItem("username", response.data.user.username);
        localStorage.setItem("token", response.data.access);
        document.location.href = "/products";
      })
      .catch(() => window.alert("Something went wrong!"));
  } else {
    window.alert("Passwords are different!");
  }
};

const RegistrationPage = () => {
  let [username, email, password, confirm_password] = "";

  return (
    <form>
      <div className="container col-lg-3 mt-5">
        <div className="row justify-content-center">
          <div className="mt-5">
            <h4>Register here</h4>
          </div>
          <div className="form-outline mb-4 mt-2">
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Username"
              onChange={(event) => (username = event.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
              onChange={(event) => (email = event.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="password1"
              className="form-control"
              placeholder="Password"
              onChange={(event) => (password = event.target.value)}
            />
          </div>
          <div className="form-outline mb-4">
            <input
              type="password"
              id="password2"
              className="form-control"
              placeholder="Confirm password"
              onChange={(event) => (confirm_password = event.target.value)}
            />
          </div>

          <button
            type="button"
            className="btn btn-dark btn-block mb-4"
            onClick={() =>
              registration({ username, email, password, confirm_password })
            }
          >
            Sign up
          </button>

          <div className="text-center">
            <p>
              Have accout? <Link to={"/login"}>Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegistrationPage;
