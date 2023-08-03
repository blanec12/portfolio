export default function Hero() {
  return (
    <section id="banner" className="py-4 py-xl-5">
      <div className="container">
        <div className="text-white bg-dark border rounded border-0 p-4 p-md-5">
          <h2 className="fw-bold text-white mb-3">Hi, I'm Blane</h2>
          <hr></hr>
          <h2 className="fw-bold text-white mb-3">Fullstack web developer</h2>
          <p className="mb-4 fs-5">
            I like to build cool software that lives on the web. My goal is to
            assist with bringing your vision to life. Let's build something that
            you can be proud of!
          </p>
          <div className="my-3">
            <a
              className="btn btn-success btn-lg me-2"
              role="button"
              href="#projects"
            >
              View my work
            </a>
            <a className="btn btn-light btn-lg" role="button" href="#about">
              Learn more about me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
