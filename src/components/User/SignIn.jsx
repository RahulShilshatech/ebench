import React, { useEffect, useState } from "react";

import { withRouter } from "react-router-dom";
import { Input, Grid } from "semantic-ui-react";
import Validate, { ValidationItems } from "react-real-time-form-validation";
import { useDispatch } from "react-redux";
import { toast } from "react-semantic-toasts";
import jwtDecode from "jwt-decode";
import { userLogin } from "../../redux/actions/userAction";
import { validateEmail } from "../../utils/commonfunction";
import CommonModal from "../Common/CommonModal";
import SignUp from "./SignUp";

function SignIn({ open, onClose, history }) {
  const formValidation = new Validate();
  const [userType] = useState("");
  const [data, setData] = useState({
    password: "",
    email: "",
  });
  const [formType, setformType] = useState("signin");
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
      onClose();
      localStorage.setItem("token", res.data.token);
      const decodedToken = jwtDecode(localStorage.getItem("token"));

      if (decodedToken.type === "vendor") {
        history.push("/v-dasbhoard");
      } else {
        history.push("/");
      }
    } else {
      toast({
        type: "error",
        icon: "shutdown",
        title: `${userType} Signin Failure`,
        description: `${res.message}`,
      });
    }
  }
  return (
    <>
      <CommonModal
        open={open}
        onClose={onClose}
        classNames={{ modal: "signup-modal" }}
      >
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              {" "}
              <div className="logo">
                <img src="/images/ebench_logo.png" alt="Logo" />
              </div>
              {formType === "signin" ? (
                <>
                  <h3>Welcome to eBench</h3>
                  <p>
                    Not Registered ? <span>Sign Up!</span>
                  </p>
                </>
              ) : (
                <>
                  <h3>Register with eBench</h3>
                  <p>
                    Already Registered ? <span>Login Here!</span>
                  </p>
                </>
              )}
              <div className="image-left">
                <img src="/images/graph.jpg" alt="acf" />
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="toggle">
                <div
                  className={formType === "signin" ? "signInActive" : "signIn"}
                  onClick={() => setformType("signin")}
                >
                  Sign in
                </div>
                <div
                  className={formType === "signup" ? "signupActive" : "signUp"}
                  onClick={() => setformType("signup")}
                >
                  Sign up
                </div>
              </div>
              {formType === "signin" ? (
                <div className="form-container">
                  <div className="input-container">
                    <p style={{ color: "red" }}>
                      <ValidationItems name="name" />
                    </p>
                  </div>
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

                  {userType === "candidate" && (
                    <div className="input-container">
                      <label>Availabilty</label>
                      <Input
                        name="availability"
                        placeholder="How many hours you can devote per week"
                        onChange={handleChange}
                      />
                    </div>
                  )}
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
              ) : (
                <SignUp />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </CommonModal>
    </>
  );
}
export default withRouter(SignIn);
