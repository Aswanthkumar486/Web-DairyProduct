import React from 'react';

export default function Gallery({ data }) {
  return (
    <section className="hero-section" id='gallery'>
      <h1 className="text-center">{data.title}</h1>

      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {data.images.map((ele, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img
                src={ele.src}
                className="d-block w-100"
                alt={ele.alt}
                style={{
                  maxHeight: '80vh',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
                <h5 className="text-white fw-bold">{ele.title}</h5>
                <p className="text-light">{ele.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Prev button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Next button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
