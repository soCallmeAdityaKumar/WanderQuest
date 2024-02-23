import React, { useEffect, useState } from "react";
import "./Popular.scss";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import img from "../../assets/beautiful-peach-tree-blossom-japan.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Scavenger Hunt",
    location: "Peru",
    grade:
      "A scavenger hunt quest where participants have to find specific landmarks or hidden items around the local area.",
  },
  {
    id: 2,
    imgSrc: img,
    destTitle: "Photography Challenge",
    location: "Mexico",
    grade:
      "Challenge participants to capture photos of iconic landmarks, beautiful scenery, or interesting street scenes.",
  },
  {
    id: 3,
    imgSrc: img,
    destTitle: "Outdoor Yoga Session",
    location: "Cambodia",
    grade:
      "A quest where participants can join an outdoor yoga session in a scenic location such as a park or beach.",
  },
  {
    id: 4,
    imgSrc: img,
    destTitle: "Local Cooking Class",
    location: "India",
    grade:
      "Offer a quest that involves participating in a cooking class to learn how to prepare traditional local dishes.",
  },
  {
    id: 5,
    imgSrc: img,
    destTitle: "Art Workshop",
    location: "India",
    grade:
      "An art workshop where participants can learn painting, pottery, or other creative activities from local artists.",
  },
  {
    id: 6,
    imgSrc: img,
    destTitle: "Nature Walk",
    location: "India",
    grade:
      "A guided nature walk through local trails or parks, highlighting the flora, fauna, and natural beauty of the area.",
  },
  {
    id: 7,
    imgSrc: img,
    destTitle: "Music Jam Session",
    location: "India",
    grade:
      "A quest where participants can join a music jam session, either playing instruments or simply enjoying the music.",
  },
  {
    id: 8,
    imgSrc: img,
    destTitle: "Sports Tournament",
    location: "India",
    grade:
      "A friendly sports tournament such as beach volleyball, soccer, or basketball, encouraging friendly competition among participants.",
  },
  {
    id: 9,
    imgSrc: img,
    destTitle: "Cultural Dance Class",
    location: "India",
    grade:
      "A quest that involves learning traditional dances from the local culture, followed by a performance or social dance event.",
  },
  {
    id: 10,
    imgSrc: img,
    destTitle: "Local Brewery or Winery Tour",
    location: "India",
    grade:
      "A tour of local breweries or wineries, where participants can learn about the production process and sample different beverages.",
  },
];

const cardsPerPage = 4;

const Popular = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [currentIndex, setcurrentIndex] = useState(0);

  const totalPages = Math.ceil(Data.length / cardsPerPage);
  const startIndex = currentIndex * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const goToPrevious = () => {
    setcurrentIndex((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
  };

  const goToNext = () => {
    setcurrentIndex((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
  };

  return (
    <section className="popular section container" id="popular">
      <div className="secContainer">
        <div className="secHeader flex">
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="textDiv"
          >
            <h2 className="secTitle mt-12">Popular Activities</h2>
            <p className="mt-2">
              From historical cities to natural specteculars, come see the best
              of the world!
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            className="iconsDiv flex"
          >
            <button onClick={goToPrevious}>
              <BsArrowLeftShort className="icon leftIcon" />
            </button>
            <button onClick={goToNext}>
              <BsArrowRightShort className="icon" />
            </button>
          </div>
        </div>
        <div className="mainContent grid mt-8">
          
        {Data.slice(startIndex, endIndex).map(({ id, imgSrc, destTitle, location, grade }, index) => (
        <div key={id} data-aos="fade-up" className={`singleDestination ${index === currentIndex ? 'active' : ''}`}>
          <div className="destImage">
            <img src={imgSrc} />
            <div className="overlayInfo">
              <h3>{destTitle}</h3>
              <p>{location}</p>
              <p className="mt-2">{grade}</p>
            </div>
          </div>
          <div className="destFooter">
            <div className="number">{`${id <= 9 ? '0' : ''}${id}`}</div>
            <div className="destText flex">
              <h6>{location}</h6>
              <span className="flex">
                <span className="dot"><BsDot className="icon" /></span>
              </span>
            </div>
          </div>
        </div>
      ))}
          
        </div>
      </div>
    </section>
  );
};

export default Popular;
