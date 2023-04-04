import "./hotel.css";
// Without importing React
import { useState, useEffect } from "react";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/273067181.jpg?k=65beee7d5b0b9c74fe234bab1487f6d7136d728177d7d2379edbab23a3200aa8&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/273067181.jpg?k=65beee7d5b0b9c74fe234bab1487f6d7136d728177d7d2379edbab23a3200aa8&o=&hp=1",
    },
    {
      src: "  https://cf.bstatic.com/xdata/images/hotel/max1280x900/376289112.jpg?k=e1a2f0d41b1458274269d22ebf5752257c05e7489abd9187cd3b266e206be8b2&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/376289113.jpg?k=3c6225b76245e4ade7b574fb0c598cecd78fadbfe29c7f2656d502ca47b134d3&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/376289113.jpg?k=3c6225b76245e4ade7b574fb0c598cecd78fadbfe29c7f2656d502ca47b134d3&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/376289113.jpg?k=3c6225b76245e4ade7b574fb0c598cecd78fadbfe29c7f2656d502ca47b134d3&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSlideNumber;
    if ((direction = "i")) {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar></Navbar>
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="slierImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocation} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                qui nisi porro non dignissimos repellendus nesciunt cum iure,
                eligendi voluptate doloribus tenetur atque necessitatibus
                pariatur. Quas iusto nesciunt vitae repudiandae! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Rem exercitationem
                ad maiores, voluptate praesentium natus necessitatibus optio
                distinctio laborum dolorum fugit a perspiciatis, ipsum harum
                atque reprehenderit assumenda consequuntur id. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Mollitia, ab! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quia facere commodi
                magnam nisi, minima neque asperiores eaque.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
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
  );
};

export default Hotel;
