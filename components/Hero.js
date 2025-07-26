import React from 'react';

export default function Hero({ data }) {
  return (
    <section className="hero-section">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {data.images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          {data.images.map((ele, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <img
                src={ele.src}
                alt={ele.alt}
                className="d-block w-100"
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

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

<style jsx>{`
  /* Hero Carousel */
  .carousel-item {
    transition: transform 1.2s ease-in-out;
  }

  .carousel-caption {
    bottom: 15% !important;
    left: 10% !important;
    right: auto !important;
    max-width: 500px;
    text-align: left;
    animation: fadeInUp 1s ease;
    backdrop-filter: blur(2px);
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 50px;
    height: 50px;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    margin: 0 20px;
  }
`}</style>

    </section>
  );
}
