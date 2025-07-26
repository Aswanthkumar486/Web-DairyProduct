import React from 'react';

export default function Testimonals({ data }) {
  return (
    <section id="testimonals" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">{data.title}</h2>
        <div className="marquee-wrapper">
          <div className="marquee d-flex">
            {data.reviews.map((review, idx) => (
              <div className="testimonial-card card shadow mx-3" key={idx}>
                <div className="card-body text-center">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <p className="card-text">“{review.comment}”</p>
                  <h6 className="mt-3">– {review.name}</h6>
                </div>
              </div>
            ))}
            {/* Repeat to create infinite scroll effect */}
            {data.reviews.map((review, idx) => (
              <div className="testimonial-card card shadow mx-3" key={`repeat-${idx}`}>
                <div className="card-body text-center">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <p className="card-text">“{review.comment}”</p>
                  <h6 className="mt-3">– {review.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ CSS-in-JSX styles */}
      <style jsx>{`
        .marquee-wrapper {
          overflow: hidden;
          position: relative;
        }

        .marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }

        .testimonial-card {
          min-width: 300px;
          max-width: 300px;
          flex-shrink: 0;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
