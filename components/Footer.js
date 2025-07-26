import React from 'react';

export default function Footer({ data }) {
  return (
    <footer className=" text-light pt-5 pb-4" style={{backgroundColor:'#0072BC'}}>
      <div className="container">
        <div className="row">
          {/* Logo and Description */}
          <div className="col-md-4 mb-4">
            <img src={data.logo} alt="Aavin Logo" width={100} className="mb-3" />
            <p style={{ fontSize: '15px', lineHeight: '1.6' }}>{data.description}</p>
          </div>

          {/* Navbar Links */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold mb-3">Explore</h5>
            <ul className="list-unstyled">
              {data.navbarList?.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.link} className="text-light text-decoration-none">
                    <i className="bi bi-chevron-right me-2"></i>{link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {data.quickLinks?.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="text-light text-decoration-none">
                    <i className="bi bi-arrow-right-circle me-2"></i>{link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <p><i className="bi bi-geo-alt-fill me-2"></i>{data.contact?.address}</p>
            <p><i className="bi bi-telephone-fill me-2"></i>{data.contact?.phone}</p>
            <p><i className="bi bi-envelope-fill me-2"></i>{data.contact?.email}</p>
            <div className="mt-3">
              {data.socials?.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-light me-3 fs-5"
                >
                  <i className={`bi bi-${social.platform}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-light" />
        <p className="text-center m-0">{data?.copyright}</p>
      </div>
<style jsx>
  {
    `
    /* Footer */
footer {
  background: linear-gradient(to right, #0062a3, #0072BC) !important;
}

footer h5 {
  position: relative;
  padding-bottom: 15px;
  margin-bottom: 20px;
}

footer h5:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: #fff;
}

footer ul li a {
  transition: all 0.3s;
  opacity: 0.8;
}

footer ul li a:hover {
  opacity: 1;
  transform: translateX(5px);
  color: #fff !important;
}

footer .socials a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  transition: all 0.3s;
}

footer .socials a:hover {
  background: #fff;
  color: #0072BC !important;
  transform: translateY(-5px);
}
    `
  }
</style>

    </footer>
  );
}
