import axios from "axios";
import { Link } from "react-router-dom";

const login = ({ username, password }) => {
  const response = axios
    .post("http://127.0.0.1:8000/api/auth/login/", {
      username,
      password,
    })
    .then((response) => {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", response.data.user.username);
      localStorage.setItem("token", response.data.access);
      document.location.href = "/products";
    })
    .catch(() => window.alert("Something went wrong!"));
};

const LoginPage = () => {
  let [username, password] = "";

  return (
    <form>
      <div className="container col-lg-3 mt-5">
        <div className="row justify-content-center">
          <div className="mt-5">
            <h4>Login here</h4>
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
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              onChange={(event) => (password = event.target.value)}
            />
          </div>

          {/* <div className="row mb-4">
            <div className="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div> */}

          <button
            type="button"
            className="btn btn-dark btn-block mb-4"
            onClick={() => {
              login({ username, password });
            }}
          >
            Sign in
          </button>

          <div className="text-center">
            <p>
              Not a member? <Link to={"/registration"}>Sign up</Link>
            </p>
            {/* <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-github"></i>
            </button> */}
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
