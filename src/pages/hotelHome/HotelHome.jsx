import "./HotelHome.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const HotelHome = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/557889554.jpg?k=d5a885ab492d3b8bbbe82e15fe4d4e5ca637f960accf5c9f3b619d4557d30791&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/557889570.jpg?k=b5e679747ce04cad5c91acdf948b1072855046350ccd4800bffea54c8eeea4c0&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/557889545.jpg?k=a74163d8b5900fe124e63722198fb53820a50b67429be8ef8c736cf09806123f&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/557892810.jpg?k=5ba19ba85a733d9213f8ccc23dfcb0d51c14b464d29aecdd78ccf3cbcdb6e2b2&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/557893848.jpg?k=9af22f1ba798ab3d5070aea189272f087012e0f046f1294fa4de130cf2470e90&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/557889540.jpg?k=7a7c4ff5e7923d0720bddc0475f96c5413fd8d614ef902d266ecbe2d328e7334&o=&hp=1"
    },
  ];

  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
          </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $156 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImageWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
              You're eligible for a Genius discount at State-of-the-Art 1 bedroom Apartments near Wembley Park! 
              To save at this property, all you have to do is sign in.State-of-the-Art 1 bedroom Apartments near 
              Wembley Park is located in London, just a 8-minute walk from London Designer Outlet and half a mile 
              from Wembley Stadium. This apartment provides accommodations with a balcony. Free Wifi is available 
              throughout the property and Wembley Arena is a 6-minute walk away.

              The apartment is composed of 1 separate bedroom, a living room, a fully equipped kitchen with a dishwasher 
              and microwave, and 1 bathroom. Towels and bed linen are provided in the apartment. For added privacy, the 
              accommodation features a private entrance.

              Preston Road Tube Station is 1.4 miles from the apartment, while Kenton Tube Station is 2.7 miles away.
              The nearest airport is London Heathrow Airport, 12 miles from State-of-the-Art 1 bedroom Apartments near Wembley Park.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Located in the real heart of krakow, this property has an excellent location score of 9.8!</span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default HotelHome
