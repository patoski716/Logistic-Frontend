import React from 'react'
import pic1 from '../assets/1.png';
import pic2 from '../assets/2.png';
import pic3 from '../assets/3.png';
import pic4 from '../assets/4.png';
import pic5 from '../assets/5.png';
import pic6 from '../assets/6.png';
import Services from '../assets/services.png';

function Service() {
    // Array of card data
  const cardsData = [
    { image: pic1, title: 'Air Freight', content: 'As a leader in global air freight forwarding, OIA Global excels in providing tailored ...' },
    { image: pic2, title: 'Sea Freight', content: 'Sea Freight plays perhaps the most vital role in most transportation and supply chain ...' },
    { image: pic3, title: 'Land Freight', content: 'Cargo are transported at some stage of their journey along the world’s roads where we...' },
    { image: pic4, title: 'Warehousing', content: 'Package and store your things effectively and securely to make sure them in...' },
    { image: pic5, title: 'Door to Door Delivery', content: 'Our expertise in transport management and planning allows us to design ...' },
    { image: pic6, title: 'Packaging & Storage', content: 'Package and store your things effectively and securely to make sure them ...' },
    // Add more card data objects as needed
  ];
  return (
    <>
        <div className="cover">
            <div className="text-center pt-3 text-light">
                <h2 className="pt-5">Service</h2>
                <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i> Service</p>
            </div>
        </div>

        <div className="container mt-5">
        <section className="row">
        {cardsData.map((card, index) => (
          <div key={index} className="col-md-4 mb-5" data-aos="fade-up">
            <div className="card">
              <img src={card.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title ">{card.title}</h4>
                <p className="card-text">{card.content}
                <a href="#" className="text-danger" style={{textDecoration:'none'}}>Read more</a></p>
              </div>
            </div>
          </div>
        ))}
      </section>

        </div>
        <div className="container mt-5 mb-3">
            <div className="row">
                <div className="col-md-6" data-aos="fade-up">
                    <img src={Services} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6" data-aos="fade-up">
                    <h2>THE COMPLETE SOLUTION</h2>
                    <div className='bg-red'></div>
                    <div className="pt-5">
                        <p>Our warehousing services are known nationwide to be one of the most reliable, safe and affordable, because we take pride in delivering the best of warehousing services, at the most reasonable prices. Pleasure and praising pain was born and I will give you a complete account of system, and expound actual teachings occasionally circumstances.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Service