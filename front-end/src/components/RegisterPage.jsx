import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext} from "react";
import {registerUser } from "../utils/RegisterUtils";
import { AuthContext } from "../providers/AuthProvider";

export const RegisterPage = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {setUserId, setToken} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegisterUser = async (event) => {
      event.preventDefault()
      const registerResponseData = await registerUser(firstName, lastName, email, password)
      if(registerResponseData != -1){
        setUserId(registerResponseData.userId)
        setToken(registerResponseData.token)
        navigate("/home")
      } else {
        alert("Something went wrong")
      } 
    }
    return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div
        className="card shadow-sm p-4"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Register</h3>
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter first name"
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter last name"
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                className="form-control"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="d-flex flex-column align-items-center">
              <button type="submit" className="btn btn-primary mt-3" onClick={handleRegisterUser}>
                Submit
              </button>
              <Link to="/login" className="mt-3">
                Already have an account? Sign in now.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
