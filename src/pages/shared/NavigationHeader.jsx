import React from "react";

export default function NavigationHeader() {
  return (
    <nav className="navbar navbar-expand-lg bg-light flex-wrap" id="main-navbar">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand d-flex align-items-center text-decoration-none" href={"/"}>
          E Commerce
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse nav col-12 col-lg-auto justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href={"/"}>
                Home
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href={"/categories/laptops"}>
                    Laptops
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href={"/categories/mobiles"}>
                    Mobiles
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href={"/categories/headphones"}>
                    Headphones
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href={"/login"}>
                Login
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href={"/signup"}>
                Signup
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
