export default function Contact() {
  return (
    <section className="position-relative py-4 py-xl-5">
      <div className="container position-relative">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 className="fw-bold">Contact Me</h2>
            <p className="w-lg-50 fs-5">
              I am interested in part-time freelance opportunities. Please send
              me a message if you'd like to learn more about working together.
              I'd love to hear from you!
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="d-flex flex-column justify-content-center align-items-start h-100">
              <div className="d-flex align-items-center p-3">
                <div className="px-2">
                  <h6 className="mb-0 fs-5 fw-bold text-decoration-underline">
                    Phone
                  </h6>
                  <h4 className="mb-0">
                    <a
                      href="tel:9365725585"
                      className="text-success text-decoration-none"
                    >
                      (936) 572-5585
                    </a>
                  </h4>
                </div>
              </div>
              <div className="d-flex align-items-center p-3">
                <div className="px-2">
                  <h6 className="mb-0 fs-5 fw-bold text-decoration-underline">
                    Email
                  </h6>
                  <h4 className="mb-0">
                    <a
                      href="mailto:blanecummings@hotmail.com"
                      className="text-success text-decoration-none"
                    >
                      blanecummings@hotmail.com
                    </a>
                  </h4>
                </div>
              </div>
              <div className="d-flex align-items-center p-3">
                <div className="px-2">
                  <h6 className="mb-0 fs-5 fw-bold text-decoration-underline">
                    Location
                  </h6>
                  <h4 className="mb-0">
                    <a
                      href="https://www.google.com/maps/place/163+Doogieville+Loop,+Joaquin,+TX+75954/@31.9628497,-94.0396566,17z/data=!3m1!4b1!4m6!3m5!1s0x86373fa562ec2261:0x17ef20b95a45d95d!8m2!3d31.9628452!4d-94.0370817!16s%2Fg%2F11j7mr4fmy?entry=ttu"
                      className="text-success text-decoration-none"
                    >
                      163 Doogieville Loop
                      <br />
                      Joquin, Texas 75954
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
