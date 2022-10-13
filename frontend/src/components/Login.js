import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = ({login}) => {
  return (
    <form>
      <div className="container col-lg-3 mt-5">
        <div className="row justify-content-center">
          <div className="form-outline mb-4 mt-5">
            <input type="email" id="form2Example1" className="form-control" />
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className="form-control"
            />
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
          </div>

          <div className="row mb-4">
            <div className="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-dark btn-block mb-4"
            onClick={() => {login()}}
          >
            Sign in
          </button>

          <div className="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
            <p>or sign up with:</p>
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
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
