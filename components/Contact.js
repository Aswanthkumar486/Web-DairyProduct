import React from 'react';

export default function Contact({ data }) {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">{data.title}</h2>
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>
          <div className="col-md-6">
            <h5>Contact Info</h5>
            <p><strong>Address:</strong> {data.address}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
          </div>
        </div>
      </div>
      <style jsx>
        {
          `
          /* Contact Section */
#contact input,
#contact textarea {
  border-radius: 10px !important;
  border: 1px solid #e1e5eb !important;
  padding: 1rem !important;
  transition: all 0.3s;
}

#contact input:focus,
#contact textarea:focus {
  border-color: #0072BC !important;
  box-shadow: 0 0 0 3px rgba(0, 114, 188, 0.15) !important;
  transform: translateY(-2px);
}

#contact .btn-primary {
  padding: 0.7rem 2.5rem;
  border-radius: 30px;
  font-weight: 600;
  background: #0072BC;
  border: none;
  transition: all 0.3s;
}

#contact .btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 114, 188, 0.4);
}
          `
        }
      </style>
    </section>
  );
}
