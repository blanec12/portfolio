export default function Contact() {
  return (
    <section
      id="contact"
      className="position-relative py-4 py-xl-5"
      style={{ marginBottom: 400 }}
    >
      <div className="container position-relative">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 style={{ fontSize: 40, fontWeight: "bold" }}>Contact</h2>
            <i
              className="fas fa-envelope"
              style={{ fontSize: 35, marginBottom: 15 }}
            ></i>
            <p className="w-lg-50" style={{ fontSize: 20 }}>
              I am interested in part-time freelance opportunties. Please leave
              a message below if you have a question or you'd like to work
              together. I'd love to hear from you!
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div
              className="d-flex flex-column justify-content-center align-items-start h-100"
              style={{ marginRight: 0 }}
            >
              <div className="d-flex align-items-center p-3">
                <div
                  className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon"
                  style={{ background: "var(--bs-emphasis-color)" }}
                >
                  <svg
                    className="bi bi-telephone-fill text-white p-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                  </svg>
                </div>
                <div className="px-2">
                  <h6 className="mb-0" style={{ fontWeight: "bold" }}>
                    Phone
                  </h6>
                  <p className="mb-0">(936) 572-5585</p>
                </div>
              </div>
              <div className="d-flex align-items-center p-3">
                <div
                  className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon"
                  style={{ background: "var(--bs-emphasis-color)" }}
                >
                  <svg
                    className="bi bi-envelope-fill text-white p-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                  </svg>
                </div>
                <div className="px-2">
                  <h6 className="mb-0" style={{ fontWeight: "bold" }}>
                    Email
                  </h6>
                  <p className="mb-0">blanecummings@hotmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 col-xl-4">
            <div>
              <form className="p-3 p-xl-4" method="post">
                <div className="mb-3">
                  <input
                    id="name-1"
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    id="email-1"
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    id="message-1"
                    className="form-control"
                    name="message"
                    rows={6}
                    placeholder="Message"
                  ></textarea>
                </div>
                <div>
                  <button
                    className="btn btn-primary d-block w-100"
                    type="submit"
                    style={{ fontWeight: "bold" }}
                  >
                    Send{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}