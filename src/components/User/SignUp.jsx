import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Input } from "semantic-ui-react";
import Validate, { ValidationItems } from "react-real-time-form-validation";
import { useDispatch } from "react-redux";
import { toast } from "react-semantic-toasts";
import { validateEmail } from "../../utils/commonfunction";
import { userRegisteration } from "../../redux/actions/userAction";

function Signup() {
  const formValidation = new Validate();
  const [userType, setUserType] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [verify, setVerify] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function createValid() {
      formValidation.createValidation(
        "name",
        (name) => name.length > 4,
        "Name must be greater than or equal to 4"
      );
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
    const params = {
      ...data,
      userType,
    };
    const res = await dispatch(userRegisteration(params));
    if (res.is_success) {
      toast({
        type: "success",
        icon: "smile outline",
        title: `${userType} Signup Success`,
        description: `${res.data.message}`,
      });
    } else {
      toast({
        type: "error",
        icon: "shutdown",
        title: `${userType} Signup Failure`,
        description: `${res.message}`,
      });
    }
  }
  return (
    <>
      {verify === false ? (
        <>
          <div className="form-container">
            <div className="input-container">
              <div className="input-container-selection">
                <label>Want to continue as</label>
                <div className="option-container">
                  <div
                    className={
                      userType === "vendor"
                        ? "vendor-button selected"
                        : "vendor-button"
                    }
                    onClick={() => setUserType("VENDOR")}
                  >
                    As Vendor
                  </div>
                  <div
                    className={
                      userType === "user"
                        ? "candidate-button selected"
                        : "candidate-button"
                    }
                    onClick={() => setUserType("CANDIDATE")}
                  >
                    Candidate
                  </div>
                </div>
              </div>
              <label>Name</label>
              <Input
                name="name"
                placeholder="Enter your Full Name"
                onChange={handleChange}
              />
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
              <label>Mobile</label>
              <Input
                name="phoneNumber"
                placeholder="Enter your mobile"
                type="text"
                onChange={handleChange}
              />
            </div>

            <div className="btn-container">
              <button
                type="submit"
                className="signup-button"
                onClick={() => {
                  handleSubmit();
                  setVerify(true);
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3>Enter eBench Verification code</h3>
          <div className="form-container">
            <div className="input-container">
              <label>Verification Code</label>
              <Input
                name="otp"
                placeholder="Enter your Ebench Code"
                onChange={handleChange}
              />
            </div>
            <div className="btn-container">
              <button
                type="submit"
                className="signup-button"
                onClick={() => setVerify(true)}
              >
                Verify
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default withRouter(Signup);
