import React, { useState, useEffect } from "react";
import { Input } from "semantic-ui-react";
import Validate, { ValidationItems } from "react-real-time-form-validation";
import { useDispatch } from "react-redux";
import { toast } from "react-semantic-toasts";
import jwtDecode from "jwt-decode";
import { userLogin } from "../../redux/actions/userAction";
import { validateEmail } from "../../utils/commonfunction";

export default (props) => {
  const formValidation = new Validate();
  const [data, setData] = useState({
    password: "",
    email: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    async function createValid() {
      formValidation.createValidation(
        "email",
        (email) => validateEmail(email),
        "Email must be valid"
      );
    }
    createValid();
  }, []);
  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    formValidation.onChangeStatus(e.target.name, e.target.value);
  }
  async function handleSubmit() {
    const params = data;

    const res = await dispatch(userLogin(params));
    if (res.is_success) {
      toast({
        type: "success",
        icon: "smile outline",
        title: "Signin Success",
        description: `${res.data.message}`,
      });
      localStorage.setItem("token", res.data.token);
      jwtDecode(localStorage.getItem("token"));
      props.history.push("/adminuser");
    } else {
      toast({
        type: "error",
        icon: "shutdown",
        title: `Signin Failure`,
        description: `${res.message}`,
      });
    }
  }
  return (
    <>
      <div className="bg-coloradmin">
        <div className="Admin-login">
          <h1>eBench</h1>
          <h3>Welcome to Login</h3>

          <div className="form-container">
            <div className="input-container">
              <label>Email</label>
              <Input
                name="email"
                placeholder="Enter your email"
                type="email"
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>
                <ValidationItems name="email" />
              </p>
            </div>
            <div className="input-container">
              <label>Password</label>
              <Input
                name="password"
                placeholder="Enter your password"
                type="password"
                onChange={handleChange}
              />
            </div>

            <div className="btn-container">
              <button
                type="submit"
                className="signup-button"
                onClick={() => handleSubmit()}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
