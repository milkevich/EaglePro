import React, { useContext, useState } from 'react';
import ImgBgFade from '../components/ImgBgFade';
import roadImg from '../assets/bilaldesigner-attachments/road.png';
import { HeaderContext } from '../contexts/HeaderContext';
import Review from '../components/Review';
import { FaTruck } from "react-icons/fa";
import s from '../shared/Styles/Brokers.module.scss';

const Brokers = () => {
  const { position } = useContext(HeaderContext);
  const [expandAnim, setExpandAnim] = useState(false);
  const [expandAnimDelay, setExpandAnimDelay] = useState(false);
  const [destinationAnim, setDestinationAnim] = useState(false);
  const [exitAnim, setExitAnim] = useState(false);
  const [loopAnim, setLoopAnim] = useState(false);
  const [loopAnimCheck, setLoopAnimCheck] = useState(true);
  const [noDestination, setNoDestination] = useState(false);

  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <div>
      <ImgBgFade img={roadImg} />
      <div style={{ maxWidth: '1470px', margin: 'auto' }}>
        <div
          style={{
            maxWidth: '550px',
            marginTop: '-250px',
            marginLeft: '40px',
            zIndex: 10000,
            position: 'relative',
            marginBottom: '200px',
            opacity: position.top < -1 ? 0 : 1,
            transition: 'ease-in-out 0.3s all',
          }}
        >
          <h1 style={{ fontSize: '54px', margin: 0 }}>EaglePro Brokers</h1>
          <p style={{ marginTop: '10px', opacity: 0.65 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            veniam minima, fuga tenetur sint
          </p>
        </div>
        <div
          style={{
            padding: '0px 40px',
            position: 'relative',
            marginTop: position.top < -1 ? '-350px' : '0px',
            zIndex: 10000,
            transition: 'ease-in-out 0.3s all',
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--main-bg-color)',
              border: '1px solid var(--border-color)',
              padding: '10px 25px',
              borderRadius: 20,
              marginTop: '20px',
              marginBottom: '40px',
              minHeight: '500px',
            }}
          >
            <button
              onClick={() => {
                if (!expandAnim) {
                  setExpandAnim(true);
                  setTimeout(() => {
                    setExpandAnimDelay(true);
                  }, 300);
                } else {
                  setExpandAnimDelay(false);
                  setTimeout(() => {
                    setExpandAnim(false);
                  }, 300);
                }
              }}
            >
              anim
            </button>
            <button
              onClick={() => {
                if (!destinationAnim) {
                  setDestinationAnim(true);
                } else {
                  setDestinationAnim(false);
                }
              }}
            >
              anim2
            </button>
            <button
              onClick={() => {
                if (!exitAnim) {
                  setExitAnim(true);
                  setLoopAnimCheck(true)
                  setTimeout(() => {
                    setLoopAnim(true);
                  }, 300);
                } else {
                  setExitAnim(false);
                  setLoopAnimCheck(false)
                }
              }}
            >
              anim3
            </button>
            <h3 style={{ margin: 0, marginTop: '10px' }}>
              Calculate transportation
            </h3>
            <p style={{ color: 'var(--sec-color)', margin: 0 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '20px',
              }}
            >
              <div style={{ width: '100%', transition: '0.3s ease-in-out all' }}>
                <p
                  style={{
                    marginBottom: '7px',
                    fontSize: '14px',
                    color: 'var(--sec-color)',
                  }}
                >
                  Enter the pick-up location
                </p>
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
                  placeholder="Where From"
                  value={pickupLocation}
                  onChange={(e) => {
                    const value = e.target.value;
                    setPickupLocation(value);

                    if (pickupLocation.trim() === '' && value.trim() !== '') {
                      if (!expandAnim) {
                        setExpandAnim(true);
                        setTimeout(() => {
                          setExpandAnimDelay(true);
                        }, 300);
                      }
                    } else if (pickupLocation.trim() !== '' && value.trim() === '') {
                      setExpandAnimDelay(false);
                      setTimeout(() => {
                        setExpandAnim(false);
                      }, 300);
                    }
                  }}
                />
              </div>
              <div
                style={{
                  width: expandAnim ? '100%' : '3%',
                  marginTop: expandAnimDelay ? '45px' : '25px',
                  position: 'relative',
                  transition: '0.3s ease-in-out all',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    position: 'relative',
                    height: '20px',
                    transition: '0.3s ease-in-out all',
                    overflow: 'hidden'
                  }}
                >
                  <FaTruck
                    size={21}
                    style={{
                      position: 'absolute',
                      bottom: expandAnimDelay ? 0 : -30,
                      transition: destinationAnim
                        ? exitAnim
                          ? loopAnim
                            ? '4s ease-in-out all'
                            : '0.3s ease-in-out all'
                          : '3s ease-in-out all'
                        : '0.3s ease-in-out all',
                      color: 'var(--sec-color)',
                      left: destinationAnim
                        ? exitAnim
                          ? '100%'
                          : 'calc(100% - 25px)'
                        : !loopAnimCheck
                          ? !noDestination
                            ? '-5%'
                            : 0
                          : 0,
                      animation: loopAnim ? `${s.truckLoopAnimation} 4s linear` : 'none',
                    }}
                    onAnimationEnd={() => {
                      if (loopAnimCheck) {
                        setLoopAnim(false);
                        setTimeout(() => setLoopAnim(true), 0);
                        setNoDestination(true);
                        setTimeout(() => {
                          setNoDestination(false);
                        }, 100);
                      } if (!loopAnimCheck) {
                        setNoDestination(true);
                      }
                    }}
                  />
                </div>
                <div
                  style={{
                    height: expandAnimDelay ? '1px' : '3px',
                    width: '100%',
                    backgroundColor: 'var(--border-color)',
                    borderRadius: '10px',
                    transition: '0.3s ease-in-out all',
                  }}
                />
              </div>
              <div
                style={{ width: '100%', transition: '0.3s ease-in-out all' }}
              >
                <p
                  style={{
                    marginBottom: '7px',
                    fontSize: '14px',
                    color: 'var(--sec-color)',
                  }}
                >
                  Enter the destination
                </p>
                <input
                  style={{
                    width: 'calc(100% - 40px)',
                    border: '1px solid var(--border-color)',
                    outline: 'none',
                    backgroundColor: 'var(--main-bg-color)',
                    padding: '20px',
                    borderRadius: '10px',
                    color: 'var(--main-color)',
                    transition: '0.3s ease-in-out all',
                  }}
                  placeholder="Where To"
                  value={destination}
                  onChange={(e) => {
                    const value = e.target.value;
                    setDestination(value);

                    if (destination.trim() === '' && value.trim() !== '') {
                      if (!destinationAnim) {
                        setDestinationAnim(true);
                        setTimeout(() => {
                          setExitAnim(true);
                          setTimeout(() => {
                            setLoopAnim(true);
                          }, 300);
                        }, 2800);
                      }
                    } else if (destination.trim() !== '' && value.trim() === '') {
                      setDestinationAnim(false);
                      setExitAnim(false);
                      setLoopAnimCheck(false)
                      setTimeout(() => {
                        setLoopAnim(false)
                      }, 4000);
                    }

                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '20px',
                border: '1px solid var(--border-color)',
                borderRadius: '10px',
              }}
            >
              <div
                style={{
                  backgroundColor: 'transparent',
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRight: '1px solid var(--border-color)',
                  width: '100%',
                }}
              >
                <p>Sedan</p>
              </div>
              <div
                style={{
                  backgroundColor: 'transparent',
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <p>SUV</p>
              </div>
              <div
                style={{
                  backgroundColor: 'transparent',
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderLeft: '1px solid var(--border-color)',
                  width: '100%',
                }}
              >
                <p>Bus-truck</p>
              </div>
            </div>
          </div>
          <Review />
        </div>
      </div>
    </div>
  );
};

export default Brokers;
