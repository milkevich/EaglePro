import React, { useEffect, useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { FaQuestion } from "react-icons/fa6";
import { RiAiGenerate } from "react-icons/ri";
import { TbCopy } from "react-icons/tb";
import { FiCalendar } from "react-icons/fi";
import logo from '../assets/bilaldesigner-attachments/eaglepro files 2.png';

const Transport = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSmallScreen2, setIsSmallScreen2] = useState(false);
  const [isSmallScreen3, setIsSmallScreen3] = useState(false);
  const [isSmallScreen4, setIsSmallScreen4] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1400);
      setIsSmallScreen2(window.innerWidth <= 900)
      setIsSmallScreen3(window.innerWidth <= 600)
      setIsSmallScreen4(window.innerWidth <= 400)
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [transportData, setTransportData] = useState({
    vehicles: [],
    distance: 0,
    pickupCoords: null,
    pickupLocation: '',
    destinationCoords: null,
    destination: '',
    estimatedCost: 0,
  });

  const [generatedCode, setGeneratedCode] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem('transportData');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setTransportData({
          vehicles: Array.isArray(parsedData.vehicles) ? parsedData.vehicles : [],
          distance: parsedData.distance || 0,
          pickupCoords: parsedData.pickupCoords || null,
          pickupLocation: parsedData.pickupLocation || '',
          destinationCoords: parsedData.destinationCoords || null,
          destination: parsedData.destination || '',
          estimatedCost: parsedData.estimatedCost || 0,
        });
      } catch (error) {
        console.error('Error parsing transport data:', error);
      }
    }
  }, []);

  const generateCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setGeneratedCode(code);
  };

  const { vehicles, distance, pickupLocation, destination, estimatedCost } = transportData;

  if (!pickupLocation || !destination) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ minHeight: '80vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: isSmallScreen3 ? '10px 20px' : '10px 60px', borderBottom: '1px solid var(--border-color)', position: 'sticky', top: 0, zIndex: 10000000, backgroundColor: 'var(--main-bg-color)', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <BsArrowLeft color='var(--main-color)' size={16} style={{ backgroundColor: 'var(--main-bg-color)', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-color)', cursor: 'pointer' }} onClick={() => navigate(-1)} />
          <div style={{ marginBottom: '2px' }}>
            <h2 style={{ margin: 0 }}>Transport Details</h2>
            <Breadcrumbs style={{ color: 'var(--sec-color)' }} separator='/' aria-label="breadcrumb">
              <a style={{ color: 'var(--sec-color)' }} href="/home">EaglePro</a>
              <a style={{ color: 'var(--sec-color)' }} href="/brokers">Brokers</a>
              <a href="/brokers/transport/:transportInfo">Transport</a>
            </Breadcrumbs>
          </div>
        </div>
        <div style={{display: isSmallScreen4 ? 'none' : 'block'}}>
          <img style={{ maxWidth: '42px', marginTop: '5px' }} src={logo} alt="EaglePro Logo" />
        </div>
      </div>
      <h3 style={{ margin: 0, marginLeft: isSmallScreen3 ? '20px' : '60px', marginTop: '40px' }}>Review your order</h3>
      <p style={{ margin: 0, color: 'var(--sec-color)', marginLeft: isSmallScreen3 ? '20px' : '60px', marginBottom: '-60px', marginRight: isSmallScreen3 ? '20px' : '60px', }}>Make sure your pick-up / destination is relatively close to a specific location.</p>
      <div style={{ display: isSmallScreen2 ? 'block' : 'flex', alignItems: 'start', justifyContent: 'space-between', marginLeft: isSmallScreen3 ? '20px' : '60px', marginRight: isSmallScreen3 ? '20px' : '60px', border: '1px solid var(--border-color)', padding: '20px 30px', marginTop: '80px', borderRadius: '20px' }}>
        <div style={{ padding: isSmallScreen2 ? '0px' : '20px 60px 20px 20px', borderRight: isSmallScreen2 ? '1px solid rgba(0, 0, 0, 0)' : '1px solid var(--border-color)', width:  '100%'}}>
          <div>
            <p style={{ margin: 0, color: 'var(--sec-color)' }}>From</p>
            <p style={{ margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{pickupLocation}</p>
          </div>
          <div>
            <p style={{ margin: 0, color: 'var(--sec-color)' }}>To</p>
            <p style={{ margin: 0 }}>{destination}</p>
          </div>
        </div>
        {isSmallScreen2 && 
          <div style={{width: '100%', height: '1px', backgroundColor: 'var(--border-color)', marginTop: '20px'}}/>
        }
        <div style={{ padding: isSmallScreen2 ? '0px' : '20px 20px 20px 60px', width: '100%', marginTop: isSmallScreen2 ? '20px' : ''  }}>
          <p style={{ margin: 0, color: 'var(--sec-color)', marginBottom: isSmallScreen3 ? '' : '0px' }}>Vehicles</p>
          {Array.isArray(vehicles) && vehicles.length > 0 ? (
            vehicles.map((vehicle, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p style={{ margin: 0 }}>{vehicle.type.charAt(0).toUpperCase() + vehicle.type.slice(1)}:</p>
                <p style={{ margin: 0 }}>
                  {vehicle.discountedPricePerMile || vehicle.basePricePerMile}
                  {vehicle.covered && <span> + $99 Covered</span>}
                </p>
              </div>
            ))
          ) : (
            <p>No vehicles</p>
          )}
        </div>
      </div>
      <div style={{ backgroundColor: 'var(--main-bg-color)', marginLeft: isSmallScreen3 ? '20px' : '60px', width: isSmallScreen3 ? 'calc(100% - 80px)' : 'calc(100% - 200px)', padding: isSmallScreen3 ? '0px 20px' : '0px 40px', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', marginTop: '20px', border: '1px solid var(--border-color)' }}>
        <p style={{ fontWeight: 800 }}>Total <span style={{ color: 'var(--sec-color)', fontWeight: 400 }}>est.</span></p>
        <p>${estimatedCost}</p>
      </div>
      <h3 style={{ margin: 0, marginLeft: isSmallScreen3 ? '20px' : '60px', marginTop: '40px' }}>Pick a date for transportation <span style={{ color: '#bd2626' }}>*</span></h3>
      <p style={{ margin: 0, color: 'var(--sec-color)', marginLeft: isSmallScreen3 ? '20px' : '60px', marginBottom: '20px' }}>Please fill out the fields below.</p>
      <div style={{ display: isSmallScreen3 ? 'block' : 'flex', justifyContent: 'space-between', width: isSmallScreen3 ? 'calc(100% - 100px)' : 'calc(100% - 185px)', marginLeft: isSmallScreen3 ? '20px' : '60px', gap: '20px', padding: '10px 30px 30px 30px', border: '1px solid var(--border-color)', borderRadius: '20px' }}>
        <div style={{ width: '100%', position: 'relative' }}>
          <p style={{ marginBottom: '7px', fontSize: '14px', color: 'var(--sec-color)' }}>Enter a pick-up date</p>
          <input
            style={{
              width: 'calc(100% - 40px)',
              border: '1px solid var(--border-color)',
              outline: 'none',
              backgroundColor: 'var(--main-bg-color)',
              padding: '0px 20px',
              borderRadius: '10px',
              color: 'var(--main-color)',
              appearance: 'none', 
              WebkitAppearance: 'none', 
              MozAppearance: 'none',
              height: '57.5px'
            }}
            type='date'
          />
          <FiCalendar color='var(--sec-color)' style={{ position: 'absolute', right: 20, bottom: 22.5, pointerEvents: 'none' }} />
        </div>
        <div style={{ width: '100%', position: 'relative' }}>
          <p style={{ marginBottom: '7px', fontSize: '14px', color: 'var(--sec-color)' }}>Enter a delivery day</p>
          <input
            style={{
              width: 'calc(100% - 40px)',
              border: '1px solid var(--border-color)',
              outline: 'none',
              backgroundColor: 'var(--main-bg-color)',
              padding: '0px 20px',
              borderRadius: '10px',
              color: 'var(--main-color)',
              appearance: 'none', 
              WebkitAppearance: 'none', 
              MozAppearance: 'none',
              height: '57.5px'
            }}
            type='date'
          />
          <FiCalendar color='var(--sec-color)' style={{ position: 'absolute', right: 20, bottom: 22.5, pointerEvents: 'none' }} />
        </div>
      </div>
      <h3 style={{ margin: 0, marginLeft: isSmallScreen3 ? '20px' : '60px', marginTop: '40px' }}>Tell us about yourself! <span style={{ color: '#bd2626' }}>*</span></h3>
      <p style={{ margin: 0, color: 'var(--sec-color)', marginLeft: isSmallScreen3 ? '20px' : '60px', marginBottom: '-20px' }}>Please fill out the fields below.</p>
      <div style={{ margin: isSmallScreen3 ? '40px 20px' : '40px 60px', display: isSmallScreen2 ? 'block' : 'flex', justifyContent: 'space-between', gap: '40px' }}>
        <div style={{ width: isSmallScreen2 ? 'calc(100% - 60px)' : '100%', padding: '15px 30px 30px 30px', border: '1px solid var(--border-color)', borderRadius: '20px' }}>
          <div style={{ display: isSmallScreen4 ? 'block' : 'flex', gap: '20px' }}>
            <div style={{ width: '100%' }}>
              <p style={{ marginBottom: '7px', fontSize: '14px', color: 'var(--sec-color)' }}>First name</p>
              <input
                style={{
                  width: 'calc(100% - 40px)',
                  border: '1px solid var(--border-color)',
                  outline: 'none',
                  backgroundColor: 'var(--main-bg-color)',
                  padding: '20px',
                  borderRadius: '10px',
                  color: 'var(--main-color)',
                }}
                placeholder="Ex. John"
              />
            </div>
            <div style={{ width: '100%' }}>
              <p style={{ marginBottom: '7px', fontSize: '14px', color: 'var(--sec-color)' }}>Last name</p>
              <input
                style={{
                  width: 'calc(100% - 40px)',
                  border: '1px solid var(--border-color)',
                  outline: 'none',
                  backgroundColor: 'var(--main-bg-color)',
                  padding: '20px',
                  borderRadius: '10px',
                  color: 'var(--main-color)',
                }}
                placeholder="Ex. Doe"
              />
            </div>
          </div>
          <div style={{ display: isSmallScreen4 ? 'block' : 'flex', gap: '40px' }}>
            <div style={{ width: '100%' }}>
              <p style={{ marginBottom: '7px', fontSize: '14px', color: 'var(--sec-color)' }}>Enter your email</p>
              <input
                style={{
                  width: 'calc(100% - 40px)',
                  border: '1px solid var(--border-color)',
                  outline: 'none',
                  backgroundColor: 'var(--main-bg-color)',
                  padding: '20px',
                  borderRadius: '10px',
                  color: 'var(--main-color)',
                }}
                placeholder="Ex. example@gmail.com"
              />
            </div>
          </div>
        </div>
        {isSmallScreen4 &&
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '-40px' }}>
            <div>
              <h3 style={{ margin: 0, marginTop: '20px' }}>Confirm your order with us!</h3>
              <p style={{ color: 'var(--sec-color)', marginTop: '0' }}>{isSmallScreen ? 'Press the "?" button for help' : 'Generate a code and contact our employee for further assistance.'}</p>
            </div>
            <div>
              <button style={{ borderRadius: '10px', width: '34px', height: '34px', border: 'none', outline: 'none', backgroundColor: 'var(--btn-bg-color)', color: 'var(--main-color)', marginTop: '10px', cursor: 'pointer' }}><FaQuestion size={14} color='var(--sec-color)' style={{ marginTop: '3px' }} /></button>
            </div>
          </div>
          }
        <div style={{ width: isSmallScreen2 ? 'calc(100% - 60px)' : '100%', padding: '15px 30px 30px 30px', border: '1px solid var(--border-color)', borderRadius: '20px', marginTop: isSmallScreen2 ? '40px' : '' }}>
          {!isSmallScreen4 &&
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ margin: 0, marginTop: '5px' }}>Confirm your order with us!</h3>
              <p style={{ color: 'var(--sec-color)', marginTop: '0' }}>{isSmallScreen ? 'Press the "?" button for help' : 'Generate a code and contact our employee for further assistance.'}</p>
            </div>
            <div>
              <button style={{ borderRadius: '10px', width: '34px', height: '34px', border: 'none', outline: 'none', backgroundColor: 'var(--btn-bg-color)', color: 'var(--main-color)', marginTop: '-10px', cursor: 'pointer' }}><FaQuestion size={14} color='var(--sec-color)' style={{ marginTop: '3px' }} /></button>
            </div>
          </div>
          }
          <div style={{ display:  'flex', justifyContent: 'space-between', gap: 20, marginTop: isSmallScreen4 ? '17px' : '' }}>
            <div style={{ width: '100%', textAlign: 'center', letterSpacing: '0.5vw', fontWeight: '900', padding: 0, backgroundColor: 'var(--main-bg-color)', borderRadius: '10px', border: '1px solid var(--border-color)', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', position: 'relative' }}>
              <p style={{ marginTop: '15px', color: generatedCode !== "" ? 'var(--main-color)' : 'var(--sec-color)', transition: 'ease-in-out 0.3s all' }}>
                {generatedCode || "------"}
              </p>
            </div>
            <button onClick={generateCode} style={{ width: isSmallScreen4 ? '60px' : '100%', borderRadius: 10, border: 'none', outline: 'none', backgroundColor: 'var(--btn-bg-color)', color: 'var(--main-color)', fontWeight: '800', fontSize: '16px', cursor: 'pointer', height: '48px' }}>
              <RiAiGenerate size={16} style={{ marginBottom: '-2px' }} /> {!isSmallScreen4 && 'Generate'}
            </button>
          </div>
          <button style={{ width: '100%', height: '48px', marginTop: '20px', border: '1px solid var(--border-color)', outline: 'none', backgroundColor: 'var(--main-bg-color)', color: 'var(--main-color)', borderRadius: '10px', cursor: 'pointer' }}>
            Contact us
          </button>
        </div>
      </div>
      {isSmallScreen3 ? null : <br/>}
    </div>
  );
};

export default Transport;
