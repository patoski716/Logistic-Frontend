import React from 'react';
import About from '../assets/about.png';
import pic1 from '../assets/1.png';
import pic2 from '../assets/2.png';
import pic3 from '../assets/3.png';
import Icon1 from '../assets/icon1.png';
import Icon2 from '../assets/icon2.png';
import Icon3 from '../assets/icon3.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Form from './Form';

function Homepage() {
  // Array of card data
  const cardsData = [
    { image: pic1, title: 'Air Freight', content: 'As a leader in global air freight forwarding, OIA Global excels in providing tailored ...' },
    { image: pic2, title: 'Sea Freight', content: 'Sea Freight plays perhaps the most vital role in most transportation and supply chain ...' },
    { image: pic3, title: 'Land Freight', content: 'Cargo are transported at some stage of their journey along the world’s roads where we...' },
    // Add more card data objects as needed
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // breakpoint for desktop
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // breakpoint for tablet/mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    {/* hero */}
    <div className="bg-image">
        <div className="container text-light ">
            <div className="pt-5 text-center" data-aos="bounce-in">
            <h1 className='pt-5' style={{fontSize:'48',fontWeight:'bold',marginTop:'60px'}}>
            Easy & Quick Cargo  Shipping Services 
            </h1>
            <p style={{fontSize:'24px',fontWeight:'700px'}}>Book low cost sea freight shipping services. 
            Get an instant quote.</p>
            <a href="/tracking" className="btn btn-danger">Track Goods Here</a>
            </div>
        </div>
    </div>
    {/* about */}
    <div className="container">
      <div className="text-center" data-aos="fade-up">
          <h2 className='pt-5'>Welcome to Crystal Shipment</h2>
          <div className='bg-red mx-auto'></div>
          <p>Crystal Shipment is more than logistics. We can also optimize your packaging, 
manage your materials sourcing, and so much more.</p>
      </div>
      <div className="row mt-5">
        <div className="col-md-6" data-aos="fade-up">
          <img src={About} className="rounded img-fluid mb-5" alt="about" />
        </div>
        <div className="col-md-6" data-aos="fade-up">
        <p className='text-danger'>TRANSPORTATION COMPANY</p>
        <h2>We Provide Full Range Logistics Solution</h2>
        <p>We strongly believe that pursuing all of these goals is in our interest and in the interest of all of our stakeholders are us customers, employees, investors and the planet as a whole. We add value to cargo people’s interaction with us, with excellent services or products. Engaging our employees and nurture investment on the stock holds market we show concern , by engaging our employees and nurture investment on the stock holds market we show concern.</p>
        <a href="/service" className="btn btn-danger">Learn More</a>
        
        </div>
      </div>
{/* services */}
      <div className="pt-5 text-center" data-aos="fade-up">
        <p className='text-danger'> TYPES OF LOGISTICS </p>
        <h2>Covering All Logistics Fields</h2>
      </div>

      <div className="mt-5">
      <section className="row">
      <Slider {...settings}>
        {cardsData.map((card, index) => (
          <div key={index} className="col-md-4 mb-5">
             <div className="slider-item" style={{ marginRight: '1rem' }}>
             <div className="card">
              <img src={card.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title ">{card.title}</h4>
                <p className="card-text">{card.content}
                <a href="#" className="text-danger" style={{textDecoration:'none'}}>Read more</a></p>
              </div>
            </div>
             </div>
          </div>
        ))}
        </Slider>
      </section>
    </div>
    <div className="text-center">
      <a href="/service" className="btn btn-danger">Load more</a>
    </div>
    </div>
    {/* banner */}
      <div className="bg-warning mt-5 mt-5" style={{ minHeight: '200px', padding: '20px 0' }}>
        <div className="container">
          <div className="row pt-5 d-flex justify-content-center">
            <div className='col-md-8' data-aos="fade-up">
            <h2>Delivering your world one package at a time</h2>
            <p>Crystal Shipment is more than logistics.</p>
            </div>
            <div className="col-md-4 text-md-end text-sm-start" data-aos="fade-up">
               <a href='/contact' className="btn btn-danger">Request a Quote</a> 
            </div>
          </div>
          
        </div>
      </div>

      <div className="container mt-5" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6">
            <h2>WHY CHOOSE US?</h2>
            <div className="d-flex">
              <div className="flex-grow-1 me-2">
              <img src={Icon1} alt="" />
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>Global supply Chain Solutions</h4>
            <p>Efficiently unleash cross-media information without cross-media value.</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="flex-grow-1 me-2">
              <img src={Icon2} alt="" />
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>Mobile Shipment Tracking</h4>
            <p>We Offers intelligent concepts for road and tail and well as complex special transport services</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="flex-grow-1 me-2">
              <img src={Icon3} alt="" />
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>Careful Handling of Valuable Goods</h4>
            <p>Cargo HUB are transported at some stage of their journey along the world’s roads</p>
              </div>
            </div>

           
          </div>
          <div className="col-md-6">
            <h2>REQUEST A QUOTE</h2>

            <Form/>

          </div>
        </div>
      </div>
    
    </>
  )
}

export default Homepage