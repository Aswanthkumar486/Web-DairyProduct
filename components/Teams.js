import React from 'react'

export default function Teams({ data }) {
  return (
    <section id="team" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4">{data.title}</h2>
        <p className="mb-5">{data.description}</p>
        <div className="row">
          {data.members.map((member, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow">
                <img src={member.image} className="card-img-top" alt={member.name} />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {
          `
          /* Team Cards */
#team .card {
  border-radius: 15px;
  overflow: hidden;
  border: none;
  transition: all 0.4s;
}

#team .card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 30px rgba(0,0,0,0.1);
}

#team .card-img-top {
  height: 280px;
  object-fit: cover;
  transition: transform 0.5s;
}

#team .card:hover .card-img-top {
  transform: scale(1.1);
}

#team .card-body {
  position: relative;
  z-index: 2;
  background: #fff;
}
          `
        }
      </style>
    </section>
  );
}
