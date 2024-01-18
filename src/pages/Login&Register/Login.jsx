import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { loginAPI } from "../../apis/Api";
import Navbar from "../../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    const data = {
      email: email,
      password: password,
    };

    loginAPI(data)
      .then((res) => {
        if (res.data.success == false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          localStorage.setItem("token", res.data.token);

          const convertedJson = JSON.stringify(res.data.userData);
          localStorage.setItem("user", convertedJson);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Server Error");
      });
  };
  return (
    <>
      <Navbar></Navbar>
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <span className="h1 fw-bold mb-0"></span>
                </div>

                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  SIGN IN TO YOUR ACCOUNT
                </h5>

                <MDBInput
                  onChange={changeEmail}
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                />
                <MDBInput
                  onChange={changePassword}
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                />

                <div class="pt-1 mb-4">
                  <button
                    onClick={handleSubmit}
                    class="btn btn-dark btn-lg"
                    type="button"
                  >
                    L O G I N
                  </button>
                </div>
                <a className="small text-muted" href="#!">
                  Forgot password?
                </a>
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Don't have an account?{" "}
                  <a href="Register" style={{ color: "#393f81" }}>
                    Register here
                  </a>
                </p>

                <div className="d-flex flex-row justify-content-start">
                  <a href="#!" className="small text-muted me-1">
                    Terms of use.
                  </a>
                  <a href="#!" className="small text-muted">
                    Privacy policy
                  </a>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default Login;
