import React, { useContext } from 'react'
import mechanicsImg from '../assets/bilaldesigner-attachments/mechanics.png'
import ImgBgFade from '../components/ImgBgFade'
import { HeaderContext } from '../contexts/HeaderContext'
import Review from '../components/Review'
import ramLogo from '../assets/bilaldesigner-attachments/ramlogo.png'
import fordLogo from '../assets/bilaldesigner-attachments/fordlogo.png'
import { FaRegCalendar } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Input from '../shared/UI/Input'
import s from '../shared/Styles/Mechanics.module.scss'

const Mechanics = () => {
  const { position } = useContext(HeaderContext)

  return (
    <div className={s.container}>
      <ImgBgFade img={mechanicsImg} />
      <div className={s.contentWrapper}>
        <div 
          className={s.header}
          style={{ opacity: position.top < -1 ? 0 : 1 }}
        >
          <h1 className={s.title}>EaglePro Mechanics</h1>
          <p className={s.description}>Наш сервисный центр обслуживает траки, которые не принадлежат нашей компании. Мы рады предложить высокий уровень сервиса и профессионализма независимо от сотрудничества с нами.</p>
        </div>
        <div 
          className={s.pricesWrapper}
          style={{ marginTop: position.top < -1 ? '-350px' : '-135px' }}
        >
          <div className={s.pricesHeader} style={{ opacity: position.top < -1 ? 1 : 0 }}>
            <h1 className={s.pricesTitle}>Prices</h1>
            <p className={s.pricesDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit, aliquid quibusdam.</p>
          </div>
          <div className={s.pricesList}>
            <div className={s.card}>
              <div className={s.cardHeader}>
                <h3 className={s.cardTitle}>Dodge RAM 3500</h3>
                <img src={ramLogo} className={s.cardLogo} />
              </div>
              <div className={s.cardRow}>
                <p>- Oil change</p>
                <p className={s.cardPrice}>$180</p>
              </div>
              <div className={s.cardRow}>
                <p>- Full kit change</p>
                <p className={s.cardPrice}>$380</p>
              </div>
              <div className={s.cardRow}>
                <p>- Axile oil change</p>
                <p className={s.cardPrice}>$180</p>
              </div>
              <div className={s.cardRow}>
                <p>- Front break pads</p>
                <p className={s.cardPrice}>$180</p>
              </div>
              <div className={s.cardRow}>
                <p>- Rear braker pads</p>
                <p className={s.cardPrice}>$200</p>
              </div>
              <div className={s.cardRow}>
                <p>- Tire TBB</p>
                <p className={s.cardPrice}>$200</p>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.cardHeader}>
                <h3 className={s.cardTitle}>Ford F-350</h3>
                <img src={fordLogo} style={{width: '55px'}} className={s.cardLogo} />
              </div>
              <div className={s.cardRow}>
                <p>- Oil change</p>
                <p className={s.cardPrice}>$200</p>
              </div>
              <div className={s.cardRow}>
                <p>- Full kit change</p>
                <p className={s.cardPrice}>$400</p>
              </div>
              <div className={s.cardRow}>
                <p>- Axile oil change</p>
                <p className={s.cardPrice}>$180</p>
              </div>
              <div className={s.cardRow}>
                <p>- Front break pads</p>
                <p className={s.cardPrice}>$180</p>
              </div>
              <div className={s.cardRow}>
                <p>- Rear braker pads</p>
                <p className={s.cardPrice}>$200</p>
              </div>
              <div className={s.cardRow}>
                <p>- Tire TBB</p>
                <p className={s.cardPrice}>$200</p>
              </div>
            </div>
            <div className={s.card}>
            <div className={s.cardHeader}>
              <h3 className={s.cardTitle}>Trailer</h3>
              </div>
              <div className={s.cardRow}>
                <p>- Change brake and bearing set 7K</p>
                <p className={s.cardPrice}>$200</p>
              </div>
              <div className={s.cardRow}>
                <p>- Change drum 7K</p>
                <p className={s.cardPrice}>$200</p>
              </div>
              <div className={s.cardRow}>
                <p>- Tire Copartner</p>
                <p className={s.cardPrice}>$200</p>
              </div>
              <div className={s.cardRow}>
                <p>- Change brake and bearing set 10K</p>
                <p className={s.cardPrice}>$300</p>
              </div>
              <div className={s.cardRow}>
                <p>- Change drum 10K</p>
                <p className={s.cardPrice}>$300</p>
              </div>
              <div className={s.cardRow}>
                <p>- Welding 1 hr</p>
                <p className={s.cardPrice}>$150</p>
              </div>
            </div>
          </div>
          <h1 className={s.locationTitle}>Where & When</h1>
          <p className={s.locationDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className={s.locationWrapper}>
            <div>
              <p className={s.locationLabel}>Working hours</p>
              <p className={s.locationStatus}>Open</p>
            </div>
            <div>
              <p className={s.locationLabel}>Mon - Fri</p>
              <p>NN:NN am - NN:NN pm</p>
            </div>
            <div>
              <p className={s.locationLabel}>Location</p>
              <p>419 Industrial Dr, North Wales, PA</p>
            </div>
            <div>
              <p className={s.locationLabel}>In Construction</p>
              <p>4 Larwin Rd, Cherry Hill, NJ</p>
            </div>
          </div>
          <h1 className={s.joinTitle}>Join the Team</h1>
          <p className={s.joinDescription}>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
          <div className={s.joinWrapper}>
            <div className={s.joinRow}>
              <div className={s.joinField}>
                <p>First Name</p>
                <Input def={true} placeholder='Ex. John' />
              </div>
              <div className={s.joinField}>
                <p>Last Name</p>
                <Input def={true} placeholder='Ex. Doe' />
              </div>
              <div className={s.joinFieldDate}>
                <p>Date of birth</p>
                <input type="date" className={s.dateInput} />
                <FaRegCalendar color='var(--sec-color)' size={14} className={s.calendarIcon} />
              </div>
            </div>
            <div className={s.joinRow}>
              <div className={s.joinFieldBottom}>
                <p>Working experience</p>
                <Input select={true} placeholder='Ex. John' />
                <IoIosArrowDown color='var(--sec-color)' className={s.arrowIcon} />
              </div>
              <div className={s.joinFieldBottom}>
                <p>Previous Companies</p>
                <Input def={true} placeholder='Ex. EaglePro' />
              </div>
            </div>
            <div className={s.submitWrapper}>
              <p className={s.submitDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <button className={s.submitButton}>Submit</button>
            </div>
          </div>
          <h1 className={s.trustedTitle}>Trusted Perspectives</h1>
          <p className={s.trustedDescription}>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
          <Review />
        </div>
      </div>
    </div>
  )
}

export default Mechanics
