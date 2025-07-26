import React from 'react';

export default function Navbar({ data }) {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light  shadow-sm" style={{backgroundColor:'#0072BC'}}>
      <div className="container-fluid">
       <a className="navbar-brand fw-bold text-light d-flex align-items-center gap-2" href="#">
  <img src={data.logo} className="img-profile" alt="Logo" width="40" />
  {data.navbarTitle}
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {data.navbarList.map((ele, index) => (
              <li className="nav-item text-light" key={index}>
                <a className="nav-link text-light" href={ele.link}>
                  {ele.name}
                </a>
              </li>
            ))}

            {/* Dropdown */}
            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                {data.navDropdown.map((ele, index) => (
                  <li key={index}>
                    <a className="dropdown-item" href={ele.link}>
                      {ele.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
  .navbar {
    transition: all 0.3s ease;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  }

  .navbar-brand {
    font-weight: 800;
    letter-spacing: 1px;
  }

  .nav-link {
    position: relative;
    padding: 0.5rem 1rem !important;
    transition: color 0.3s;
  }

  .nav-link:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 80%;
    height: 2px;
    background: #fff;
    transform: scaleX(0);
    transition: transform 0.3s;
  }

  .nav-link:hover,
  .nav-link.active {
    color: #fff !important;
  }

  .nav-link:hover:after,
  .nav-link.active:after {
    transform: scaleX(1);
  }

  .dropdown-menu {
    border: none;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .dropdown-item {
    transition: all 0.2s;
    padding: 0.5rem 1.25rem;
  }

  .dropdown-item:hover {
    background: #0072BC;
    color: #fff !important;
    transform: translateX(5px);
  }

  /* Testimonials Marquee */
  .testimonial-marquee-container {
    overflow: hidden;
    position: relative;
    white-space: nowrap;
  }

  .testimonial-marquee-track {
    display: flex;
    gap: 1rem;
    animation: scrollLeft 25s linear infinite;
  }

  .testimonial-card {
    flex: 0 0 auto;
    width: 300px;
    min-height: 200px;
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .testimonial-card img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  @keyframes scrollLeft {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`}</style>

    </nav>
  );
}
