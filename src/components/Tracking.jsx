import React, { useState } from 'react';

function Tracking() {
  const [trackingId, setTrackingId] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setTrackingId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!trackingId.trim()) {
        setError('Please enter a valid Tracking ID.');
      } else if (trackingId.trim().length !== 10) {
        setError('Tracking ID must be exactly 10 characters long.');
      } else {
        setError('');
        alert('You have to connect to an API before it will work');
      // Process tracking logic here
      console.log('Tracking ID:', trackingId);
      window.location.href = '/';

    }
  };
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
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter your Tracking ID Here' className="form-control mt-3 mb-3" value={trackingId} 
                onChange={handleInputChange}/>
                {error && <div className="text-danger">{error}</div>}

                <button className="btn btn-danger">Track</button>
                </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Tracking