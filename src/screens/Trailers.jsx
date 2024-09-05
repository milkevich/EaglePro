import React, { useContext, useState } from 'react';
import ImgBgFade from '../components/ImgBgFade';
import trailersImg from '../assets/bilaldesigner-attachments/trailers.png';
import { HeaderContext } from '../contexts/HeaderContext';
import Review from '../components/Review';
import ramLogo from '../assets/bilaldesigner-attachments/ramlogo.png';
import trailerImg from '../assets/bilaldesigner-attachments/trailers.png';
import { MdInsertPhoto } from "react-icons/md";
import s from '../shared/Styles/Trailers.module.scss';
import { Fade, Slide } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Trailers = () => {
  const { position } = useContext(HeaderContext);
  const navigate = useNavigate()

  const marginMeasurment = () => {
    return window.innerHeight / 100 * 40 > 800 ? '-700px' : '-40vh';
  };

  const trailers = new Array(8).fill({
    year: "2023",
    name: "Dodge RAM",
    mileage: "123123 mil",
    availability: "Available Now",
    rent: "$123 / mo",
    buy: "$23123",
    photos: "3 photos",
    img: trailerImg,
    logo: ramLogo,
    id: 'sadf7ysdfh87sadfh8'
  });

  return (
    <div>
      <ImgBgFade img={trailersImg} />
      <div className={s.mainContainer}>
        <div className={s.introSection} style={{ opacity: position.top < -1 ? 0 : 1 }}>
          <h1 className={s.mainTitle}>EaglePro Trailers</h1>
          <p className={s.mainDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, veniam minima, fuga tenetur sint</p>
        </div>
        <div className={s.trailersSection} style={{ marginTop: position.top < -1 ? marginMeasurment() : '-60px' }}>
          <div className={s.trailersIntro} style={{ opacity: position.top < -1 ? 1 : 0 }}>
            <h1 className={s.trailersTitle}>Our Trailers</h1>
            <p className={s.trailersSubtitle}>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className={s.trailersGrid}>
            {trailers.map((trailer, index) => (
              <div key={index} className={s.trailerCard}>
                <img src={trailer.img} className={s.trailerImage} />
                <div className={s.photoBadge}>
                  <MdInsertPhoto />
                  <span>{trailer.photos}</span>
                </div>
                <div className={s.trailerInfo}>
                  <div>
                    <h3>{trailer.year} {trailer.name}</h3>
                    <div className={s.trailerDetails}>
                      <p className={s.mileage}>{trailer.mileage}</p>
                      <p className={s.availability}><span className={s.availabilityDot}>•</span>{trailer.availability}</p>
                    </div>
                  </div>
                  <img className={s.trailerLogo} src={trailer.logo} />
                </div>
                <div className={s.trailerPricing}>
                  <div className={s.pricingRow}>
                    <p>Rent</p>
                    <p>{trailer.rent}</p>
                  </div>
                  <p className={s.divider}><span className={s.dividerText}>or</span></p>
                  <div className={s.pricingRow}>
                    <p>Buy</p>
                    <p>{trailer.buy}</p>
                  </div>
                  <button onClick={() => navigate(`/EaglePro/trailers/${trailer.id}`)} className={s.viewMoreButton}>View more</button>
                </div>
              </div>
            ))}
          </div>
          <Review />
        </div>
      </div>
    </div>
  );
}

export default Trailers;
