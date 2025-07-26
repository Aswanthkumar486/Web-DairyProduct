import React from 'react';

export default function Products({ data }) {
  return (
    <section id="products" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">{data.title}</h2>
        <div className="row">
          {data.items.map((product, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card h-100 shadow-sm">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="fw-bold text-success">₹{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {
          `
          /* Product Cards */
#products .card {
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s;
}

#products .card:hover {
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

#products .card-img-top {
  height: 220px;
  object-fit: cover;
  transition: transform 0.5s;
}

#products .card:hover .card-img-top {
  transform: scale(1.05);
}

#products .text-success {
  position: relative;
  display: inline-block;
  padding: 0.25rem 1rem;
}

#products .text-success:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(40, 167, 69, 0.15);
  border-radius: 30px;
  transform: scaleX(0.9) translateY(-50%);
  z-index: -1;
}
          `
        }
      </style>
    </section>
  );
}
