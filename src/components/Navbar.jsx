import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  //get user data from the local storage
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  // logout function
  const logout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand text-danger fw-blod" href="#">
            Frontend
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Fashion
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Electronics
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Test
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex gap-2" role="search">
              {user ? (
                <>
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Welcome {user.firstName}
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <Link class="dropdown-item" to="/profile">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/changepp">
                          Change Password
                        </Link>
                      </li>
                      <li>
                        <button onClick={logout} class="dropdown-item" to="./logout">
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <button className="btn btn-outline-danger" type="submit">
                    Login
                  </button>
                  <button className="btn btn-outline-success" type="submit">
                    Register
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;