import React, { useContext } from 'react';
import truckImg from '../assets/bilaldesigner-attachments/truck.png';
import { HeaderContext } from '../contexts/HeaderContext';
import Input from '../shared/UI/Input';
import Footer from '../components/Footer';
import { FaRegCalendar } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Express = () => {
  const { position } = useContext(HeaderContext);

  return (
    <div>
      <div style={{ position: 'relative', maxHeight: '50vh', overflow: 'hidden', zIndex: 9, marginTop: '-1px' }}>
        <img
          style={{
            backgroundColor: 'var(--sec-bg-color)',
            minWidth: '100vw',
            maxWidth: '400px',
            marginTop: '-40vh',
          }}
          src={truckImg}
          alt="Фото флота компании на фоне с плавным переходом в черный цвет"
        />
        <div
          style={{
            background: 'linear-gradient(0deg, var(--main-bg-color) 0%, rgba(10, 10, 10, 0) 100%)',
            width: '100vw',
            height: '400px',
            position: 'absolute',
            bottom: 0,
            zIndex: 1000,
          }}
        />
        <div />
      </div>
      <div style={{ maxWidth: '450px', marginTop: '-250px', marginLeft: '40px', zIndex: 10000, position: "relative", marginBottom: '200px', opacity: position.top < -1 ? 0 : 1, transition: 'ease-in-out 0.3s all' }}>
        <h1 style={{ fontSize: '54px', margin: 0 }}>Apply to EaglePro</h1>
        <p style={{ marginTop: '10px', opacity: 0.65 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, veniam minima, fuga tenetur sint</p>
      </div>
      <div style={{ padding: '0px 40px', position: 'relative', marginTop: position.top < -1 ? '-250px' : '0', zIndex: 10000, transition: 'ease-in-out 0.3s all' }}>
        <div style={{ backgroundColor: 'var(--main-bg-color)', border: '1px solid var(--border-color)', padding: '10px 25px', borderRadius: 20, height: '300px', alignItems: 'center', justifyContent: "center", display: 'flex' }}>
          <p style={{ color: 'var(--sec-color)' }}>
            some graph
            alt - Официальные рейтинги:
            Разместить графику с официальными рейтингами компании.
          </p>
        </div>
        <div style={{ padding: '30px 0px 25px 0px' }}>
          <h1 style={{ margin: 0, padding: 0 }}>Join the team now!</h1>
          <p style={{ color: 'var(--sec-color)', margin: 0, padding: 0 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
        </div>
        <div style={{ backgroundColor: 'var(--main-bg-color)', border: '1px solid var(--border-color)', padding: '10px 25px', borderRadius: 20, marginTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'stretch', gap: '20px' }}>
            <div style={{ width: '50%' }}>
              <p>First Name</p>
              <Input def={true} placeholder='Ex. John' />
            </div>
            <div style={{ width: '50%' }}>

              <p>Last Name</p>
              <Input def={true} placeholder='Ex. Doe' />
            </div>
            <div>
              <p>Date of birth</p>
              <input type="date" style={{ padding: 8.25, outline: 'none', backgroundColor: "var(--btn-bg-color)", color: "var(--main-color)", border: "1px solid var(--border-color)", borderRadius: 10, minWidth: '400px' }} />
              <FaRegCalendar color='var(--sec-color)' size={14} style={{position: 'absolute', marginTop: '11px', marginLeft: '-25px', pointerEvents: 'none',}}/>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'stretch', gap: '20px' }}>
            <div style={{ width: '50%' }}>
              <p>Working experience</p>
              <Input select={true} placeholder='Ex. John' />
              <IoIosArrowDown color='var(--sec-color)' style={{backgroundColor: 'var(--btn-bg-color)', paddingRight: '5px', position: 'absolute', marginTop: '12px', marginLeft: '-25px',  pointerEvents: 'none'}}/>
            </div>
            <div style={{ width: '50%' }}>
              <p>Previous Companies</p>
              <Input def={true} placeholder='Ex. EaglePro' />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-10px' }}>
              <Input checkbox={true} />
              <p style={{ marginLeft: '20px' }}>Do you have a CDL?</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Input checkbox={true} />
              <p style={{ marginLeft: '20px' }}>Do you have a SSN?</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Input checkbox={true} />
              <p style={{ marginLeft: '20px' }}>Do you have a Company?</p>
            </div>

          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <p style={{ color: 'var(--sec-color)' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eligendi atque ratione vero voluptas optio mollitia</p>
            <button style={{ padding: '10px 40px', height: '40px', outline: 'none', border: 'none', borderRadius: '10px', backgroundColor: 'var(--btn-bg-color)', color: 'var(--main-color)', fontWeight: '900', cursor: 'pointer' }}>Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Express;
