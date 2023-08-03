export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-dark py-3" data-bs-theme="dark">
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center h1 fs-2"
          href="#banner"
        >
          <span>./Blane Cummings</span>
        </a>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navcol-5"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-5">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link fs-5" href="#skills">
                My skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fs-5"
                href="mailto:blanecummings@hotmail.com"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
