import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../utils/LoginUtils";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {setUserId} = useContext(AuthContext)

  const handleLoginPress = async (event) => {
    event.preventDefault();
    const userId = await loginUser(email, password);
    if(userId != -1){
      navigate("/home")
      setUserId(userId)
    } else {
      alert("Invalid credentials")
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div
        className="card shadow-sm p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Login</h3>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                className="form-control"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter email"
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                value={password}
              />
            </div>
            <div className="d-flex flex-column align-items-center">
              <button
                className="btn btn-primary mt-3"
                onClick={handleLoginPress}
              >
                Submit
              </button>
              <Link to="/register" className="mt-3">
                Don't have an account? Create one now.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
