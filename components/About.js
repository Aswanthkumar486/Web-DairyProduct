import React from 'react';

export default function About({ data }) {
  return (
    <section className="py-5 " style={{backgroundColor:'#93c6eaff'}} id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={data.image}
              alt="About Aavin"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Text */}
          <div className="col-md-6">
            <h2 className="mb-3 text-light">{data.title}</h2>
            <p className=" text-dark">{data.description}</p>
            <ul className="list-unstyled mt-3">
              {data?.points.map((point, index) => (
                <li key={index} className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>
        {
          `
          /* About Section */
#about {
  background: linear-gradient(135deg, #93c6ea 0%, #a1d6ff 100%);
}

#about .img-fluid {
  border-radius: 15px !important;
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
  transform: rotate(-2deg);
  transition: all 0.4s;
}

#about .img-fluid:hover {
  transform: rotate(0) scale(1.02);
}

#about ul li {
  position: relative;
  padding-left: 35px;
  margin-bottom: 15px;
}

#about ul li i {
  position: absolute;
  left: 0;
  top: 3px;
  font-size: 1.4rem;
  transition: transform 0.3s;
}

#about ul li:hover i {
  transform: scale(1.2);
}
          `
        }
      </style>
    </section>
  );
}
