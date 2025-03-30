const Footer = () => {
  const backTotOP = () => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    

      <div className=" ">
        <button
          className="btn btn-dark w-100 "
          style={{ height: "100px", borderRadius: "0px" }}
          onClick={backTotOP}
        >
          Back To Top
        </button>
      </div>
      <footer className="bg-dark text-light py-5 ">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3 footer-item">
              <img src="/Logo.png" alt="logo" className="my-3" />
              <h5>About Us</h5>
              <p>
                We provide the best services and resources to help you build
                professional websites with ease and top quality.
              </p>
            </div>
            <div className="col-md-4 mb-3 footer-item">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-3 footer-item">
              <h5>Follow Us</h5>
              <div className="d-flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="text-light fs-4"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="text-light fs-4"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="text-light fs-4"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="text-light fs-4"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <hr className="border-secondary" />
          <p className="text-center mb-0">
            &copy; 2025 All rights reserved | Designed by Moaze{" "}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
