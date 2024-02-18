import React from 'react'

function Contact() {
  return (
    <>
    <div className="cover">
        <div className="text-center pt-3 text-light">
            <h2 className="pt-5">Contact</h2>
            <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i>Contact</p>
        </div>
    </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-5">
            <p className="fw-bold">
              {" "}
              Kindly Call / Chat us or Send us an email.
            </p>
            <div className="">
              <div className="mb-3">
                <a href="tel:09137029216" className='text-decoration-none text-dark'>
                  <span className="me-3">
                    <i className="fa fa-phone"></i>
                  </span>
                  +234 9137029216
                </a>
              </div>
              <div className="mt-3">
                <a href="https://wa.me/+2349137029216" className='text-decoration-none text-dark'>
                  <span className="me-3">
                  <i className="fab fa-whatsapp"></i>
                  </span>
                  +234 9137029216
                </a>
              </div>
              <div className="mt-3">
                <a href="mailto:info@crystalshipment.com" className='text-decoration-none text-dark'>
                  <span className="me-3">
                    <i className="fa fa-envelope"></i>
                  </span>
                  info@crystalshipment.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-8">
          <form action="">
            <div className="d-flex mt-3">
              <div className="flex-grow-1 me-2">
              <input type="text" className="form-control" placeholder='Name' />
              </div>
              <div className="flex-grow-1 ms-2">
              <input type="email" className="form-control" placeholder='Email' />
              </div>
            </div>

            <div className="d-flex mt-3">
              <div className="flex-grow-1 me-2">
              <input type="text" className="form-control" placeholder='Phone (Optional)' />
              </div>
              <div className="flex-grow-1 ms-2">
              <input type="text" className="form-control" placeholder='Subject' />
              </div>
            </div>

            <textarea name="" id="" className='form-control mt-3' placeholder='Enter your message here' cols="30" rows="10"></textarea>
            <div className="mt-3">
              <button className="btn btn-danger">Submit</button>
            </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact