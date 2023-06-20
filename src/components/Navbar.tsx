import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-dark py-3 sticky-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <span style={{ fontSize: 30, fontWeight: "bold" }}>
            Blane Cummings
          </span>
        </a>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navcol-5"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navcol-5" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                href=""
                style={{ fontSize: 20 }}
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href=""
                style={{ fontSize: 20 }}
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href=""
                style={{ fontSize: 20 }}
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
              >
                Contact
              </Link>
            </li>
          </ul>
          <a
            className="btn btn-primary ms-md-2"
            style={{ fontSize: 20 }}
            role="button"
            href="https://myblog.com"
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
}
