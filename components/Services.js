import React from 'react'

export default function Services({ data }) {
  return (
    <section id="services" className="py-5">
      <div className="container text-center">
        <h2 className="mb-4">{data.title}</h2>
        <p className="mb-5">{data.description}</p>
        <div className="row">
          {data.items?.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow text-center">
                <div className="card-body">
                  <i className={`${service.icon} fs-1 text-primary mb-3`}></i>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {
          `
          /* Services Cards */
#services .card {
  border: none;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: translateY(0);
}

#services .card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 30px rgba(0,0,0,0.12);
}

#services .card-body {
  padding: 2.5rem 1.5rem;
}

#services .card i {
  display: inline-block;
  transition: transform 0.5s;
}

#services .card:hover i {
  transform: rotateY(360deg);
}
          `
        }
      </style>
    </section>
  )
}
