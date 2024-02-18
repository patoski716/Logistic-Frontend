import React from 'react'

function Tracking() {
  return (
    <>
    <div className="cover">
        <div className="text-center pt-3 text-light">
            <h2 className="pt-5">Tracking</h2>
            <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i> Tracking</p>
        </div>
    </div>
        <div className="container mt-5 mb-3">
            <div className="row">
                <div className="col-md-6" data-aos="fade-up">
                <h2>TRACK YOUR SHIPMENT</h2>
                    <div className='bg-red'></div>
                    <div className="pt-5">
                        <p>If you require maximum visibility to your Freight transactions, contact our logistic customer team or you can track your cargo by using below tracking system.</p>
                    </div>
                </div>
                <div className="col-md-6" data-aos="fade-up">
                <input type="email" placeholder='Enter your tracking ID Here' className="form-control mt-3 mb-3" />
                <button className="btn btn-danger">Track</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Tracking