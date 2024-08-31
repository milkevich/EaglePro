import React, { useContext, useState, useEffect } from 'react';
import ImgBgFade from '../components/ImgBgFade';
import roadImg from '../assets/bilaldesigner-attachments/road.png';
import { HeaderContext } from '../contexts/HeaderContext';
import Review from '../components/Review';
import { FaTruck } from "react-icons/fa";
import s from '../shared/Styles/Brokers.module.scss';
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import axios from 'axios';
import { getDistance } from 'geolib';
import { useNavigate } from 'react-router-dom';

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
  const [suggestions, setSuggestions] = useState([]);
  const [pickupCoords, setPickupCoords] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);
  const [distance, setDistance] = useState(null);
  const [activeInput, setActiveInput] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [vehicles, setVehicles] = useState([]);
  const [estimatedCost, setEstimatedCost] = useState(null);
  const [costBreakdown, setCostBreakdown] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSmallScreen2, setIsSmallScreen2] = useState(false);
  const [isSmallScreen3, setIsSmallScreen3] = useState(false);
  const [isSmallScreen4, setIsSmallScreen4] = useState(false);
  const [isSmallScreen5, setIsSmallScreen5] = useState(false);
  const [isSmallScreen6, setIsSmallScreen6] = useState(false);
  const [isSmallScreen7, setIsSmallScreen7] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
      setIsSmallScreen2(window.innerWidth <= 640);
      setIsSmallScreen3(window.innerWidth <= 1200);
      setIsSmallScreen4(window.innerWidth <= 1100);
      setIsSmallScreen5(window.innerWidth <= 550);
      setIsSmallScreen6(window.innerWidth <= 475);
      setIsSmallScreen7(window.innerWidth <= 420);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    console.log('Initial Vehicles:', vehicles);
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (pickupLocation && activeInput === 'pickup') {
        fetchSuggestions(pickupLocation);
      } else if (destination && activeInput === 'destination') {
        fetchSuggestions(destination);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [pickupLocation, destination, activeInput]);

  const fetchSuggestions = async (query) => {
    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          q: query,
          format: 'json',
          addressdetails: 1,
          limit: 5,
          'accept-language': 'en',
          countrycodes: 'us',
        },
      });

      const filteredSuggestions = response.data
        .filter((result) => {
          const { city, town, village } = result.address;
          return city || town || village;
        })
        .map((result) => {
          const { city, town, village, state, country } = result.address;
          const locationName = `${city || town || village}, ${state}, ${country}`;
          return {
            display_name: locationName,
            lat: result.lat,
            lon: result.lon,
          };
        });

      setSuggestions(filteredSuggestions);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  useEffect(() => {
    if (pickupCoords && destinationCoords) {
      const distanceInMeters = getDistance(pickupCoords, destinationCoords);
      const distanceInMiles = Math.round(distanceInMeters * 0.000621371);
      setDistance(distanceInMiles);
    }
  }, [pickupCoords, destinationCoords]);

  const handleAnimationEnd = () => {
    if (loopAnimCheck) {
      setLoopAnim(false);
      setTimeout(() => {
        setLoopAnim(true);
      }, 300);
    } else {
      setNoDestination(true);
    }
  };

  const calculateDiscountedPrice = (basePrice, vehicleIndex) => {
    if (vehicleIndex === 1) {
      return basePrice * 0.85;
    } else if (vehicleIndex === 2) {
      return basePrice * 0.75;
    } else {
      return basePrice;
    }
  };

  const addVehicle = () => {
    console.log('Adding vehicle');
    if (Array.isArray(vehicles) && vehicles.length >= 3) return;
    if (selectedType) {
      let basePricePerMile;
      switch (selectedType) {
        case 'sedan':
          basePricePerMile = 1;
          break;
        case 'suv':
          basePricePerMile = 1.05;
          break;
        case 'truck':
          basePricePerMile = 1.15;
          break;
        default:
          basePricePerMile = 1;
      }

      const discountedPricePerMile = calculateDiscountedPrice(basePricePerMile, vehicles.length);
      setVehicles((prevVehicles) => [
        ...prevVehicles,
        {
          type: selectedType,
          basePricePerMile: `$${basePricePerMile.toFixed(2)}/mile`,
          discountedPricePerMile: discountedPricePerMile !== basePricePerMile ? `$${discountedPricePerMile.toFixed(2)}/mile` : null,
          covered: false,
        },
      ]);
      setSelectedType('');
    }
  };

  const toggleCoverage = (index) => {
    setVehicles((prevVehicles) =>
      prevVehicles.map((vehicle, i) =>
        i === index ? { ...vehicle, covered: !vehicle.covered } : vehicle
      )
    );
  };

  const removeVehicle = (index) => {
    setVehicles((prevVehicles) => {
      const updatedVehicles = prevVehicles.filter((_, i) => i !== index);
      return updatedVehicles.map((vehicle, i) => ({
        ...vehicle,
        discountedPricePerMile: calculateDiscountedPrice(parseFloat(vehicle.basePricePerMile.slice(1)), i) !== parseFloat(vehicle.basePricePerMile.slice(1))
          ? `$${calculateDiscountedPrice(parseFloat(vehicle.basePricePerMile.slice(1)), i).toFixed(2)}/mile`
          : null,
      }));
    });
  };

  const calculateEstimatedCost = () => {
    let totalCost = 0;
    const breakdown = vehicles.map((vehicle, index) => {
      const pricePerMile = parseFloat(vehicle.discountedPricePerMile ? vehicle.discountedPricePerMile.slice(1) : vehicle.basePricePerMile.slice(1));
      const vehicleCost = pricePerMile * distance;
      totalCost += vehicleCost;

      let coverageCost = 0;
      if (vehicle.covered) {
        coverageCost = 99;
        totalCost += coverageCost;
      }

      return {
        vehicleType: vehicle.type.charAt(0).toUpperCase() + vehicle.type.slice(1),
        vehicleCost: vehicleCost.toFixed(2),
        coverageCost: vehicle.covered ? coverageCost.toFixed(2) : null,
      };
    });

    setEstimatedCost(totalCost.toFixed(2));
    setCostBreakdown(breakdown);
  };

  useEffect(() => {
    calculateEstimatedCost();
  }, [vehicles, distance]);

  const navigateToTransportPage = () => {
    console.log('Navigating to transport page');
    if (!Array.isArray(vehicles) || vehicles.length === 0 || !distance) return;
    const carNames = vehicles.map(vehicle => vehicle.type).join('-');
    const url = `/brokers/transport/${carNames}-${distance}mil`;

    localStorage.setItem('transportData', JSON.stringify({ vehicles, distance, pickupCoords, pickupLocation, destinationCoords, destination, estimatedCost }));
    navigate(url);
  };

  const marginMeasurement = () => {
    return window.innerHeight / 100 * 40 > 800 ? '-700px' : '-40vh';
  };

  return (
    <div>
      <ImgBgFade img={roadImg} />
      <div style={{ maxWidth: '1470px', margin: 'auto' }}>
        <div style={{ maxWidth: '450px', marginTop: isSmallScreen ? isSmallScreen6 ? '-150px' : '-200px' : '-250px', marginLeft: isSmallScreen ? '20px' : '40px', zIndex: 10000, position: "relative", marginBottom: isSmallScreen ? isSmallScreen6 ? '100px' : '150px' : '200px', opacity: position.top < -1 ? 0 : 1, transition: 'ease-in-out 0.3s all' }}>
          <h1 style={{ fontSize: isSmallScreen ? '32px' : '54px', margin: 0, }}>EaglePro - Brokers</h1>
          <p style={{ marginTop: isSmallScreen6 ? '0px' : '10px', opacity: 0.65, fontSize: isSmallScreen ? '16px' : '18px' }}>{isSmallScreen6 ? 'Lorem ipsum dolor amet consectetur dolor.' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, veniam minima, fuga tenetur sint'}</p>
        </div>
        <div
          style={{
            padding: isSmallScreen ? '0px 20px' : '0px 40px',
            position: 'relative',
            marginTop: position.top < -1 ? isSmallScreen6 ? '-35vh' : marginMeasurement() : '-60px',
            zIndex: 10000,
            transition: 'ease-in-out 0.3s all',
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--main-bg-color)',
              border: '1px solid var(--border-color)',
              borderRadius: 20,
              marginTop: '20px',
              marginBottom: '40px',
              transition: '0.3s ease-in-out',
              display: isSmallScreen4 && vehicles.length > 0 ? 'block' : 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ width: Array.isArray(vehicles) && vehicles.length > 0 ? isSmallScreen4 ? 'calc(100% - 45px)' : '60%' : '100%', padding: '25px', margin: '0', borderRight: Array.isArray(vehicles) && vehicles.length > 0 ? isSmallScreen4 ? '1px solid rgba(0, 0, 0, 0)' : '1px solid var(--border-color)' : '1px solid rgba(0, 0, 0, 0)', transition: 'ease-in-out 0.3s all' }}>
              <h3 style={{ margin: 0, marginTop: '-5px' }}>
                Calculate transportation
              </h3>
              <p style={{ color: 'var(--sec-color)', margin: 0 }}>
                {isSmallScreen5 ? 'Lorem ipsum, dolor sit consectetur.' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
              </p>
              <br />
              <div
                style={{
                  display: isSmallScreen7 ? 'block' : 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '20px',
                }}
              >
                <div style={{ width: '100%', transition: '0.3s ease-in-out all', position: 'relative' }}>
                  <p
                    style={{
                      marginBottom: '7px',
                      fontSize: '14px',
                      color: 'var(--sec-color)',
                    }}
                  >
                    {isSmallScreen2 ? isSmallScreen6 ? 'Pick-up' : 'Pick-up location' : 'Enter the pick-up location'}
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
                      setPickupLocation(e.target.value);
                      setActiveInput('pickup');
                      if (pickupLocation.trim() === '' && e.target.value.trim() !== '') {
                        if (!expandAnim) {
                          setExpandAnim(true);
                          setTimeout(() => {
                            setExpandAnimDelay(true);
                          }, 300);
                        }
                      } else if (pickupLocation.trim() !== '' && e.target.value.trim() === '') {
                        setExpandAnimDelay(false);
                        setExitAnim(false);
                        setLoopAnim(false);
                        setNoDestination(true);
                        setTimeout(() => {
                          setExpandAnim(false);
                        }, 300);
                      }
                    }}
                    onFocus={() => setActiveInput('pickup')}
                  />
                  {activeInput === 'pickup' && Array.isArray(suggestions) && suggestions.length > 0 && (
                    <div style={{ listStyleType: 'none', marginTop: '-8px', position: 'absolute', width: '100%', backgroundColor: 'var(--main-bg-color)', zIndex: 100000, borderRadius: '0px 0px 10px 10px', border: '1px solid var(--border-color)', borderTop: 'none' }}>
                      {suggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          className={s.locationSuggestion}
                          onClick={() => {
                            setPickupLocation(suggestion.display_name);
                            setPickupCoords({ latitude: parseFloat(suggestion.lat), longitude: parseFloat(suggestion.lon) });
                            setSuggestions([]);
                            if (!destinationAnim) {
                              setDestinationAnim(true);
                            }
                          }}
                        >
                          {suggestion.display_name}
                        </li>
                      ))}
                    </div>
                  )}
                </div>
                {!isSmallScreen7 &&
                  <div
                    style={{
                      width: expandAnim ? 'calc(100% - 120px)' : '3%',
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
                        onAnimationEnd={handleAnimationEnd}
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
                    <p style={{ textAlign: 'center', margin: 0, fontSize: '14px', opacity: distance ? 1 : 0, position: 'absolute', width: '100%', color: 'var(--sec-color)', transition: 'ease-in-out 0.3s all' }}>
                      {distance} miles
                    </p>
                  </div>
                }
                {isSmallScreen7 && distance &&
                  <>
                    <div style={{ height: '1px', width: 'calc(50% - 95px)', backgroundColor: 'var(--border-color)', position: 'absolute', marginTop: '29px', zIndex: 1 }} />
                    <p style={{ textAlign: 'center', backgroundColor: 'var(--main-bg-color)', zIndex: 10, color: 'var(--sec-color)' }}>{distance} miles</p>
                    <div style={{ height: '1px', width: 'calc(50% - 95px)', backgroundColor: 'var(--border-color)', position: 'absolute', marginTop: '-27px', zIndex: 1, right: 45 }} />
                  </>
                }
                <div
                  style={{ width: '100%', transition: '0.3s ease-in-out all', position: 'relative' }}
                >
                  <p
                    style={{
                      marginBottom: '7px',
                      fontSize: '14px',
                      color: 'var(--sec-color)',
                    }}
                  >
                    {isSmallScreen2 ? isSmallScreen6 ? 'Destination' : 'Destination location' : 'Enter the destination'}
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
                      setActiveInput('destination');
                      if (destination.trim() === '' && value.trim() !== '') {

                      } else if (destination.trim() !== '' && value.trim() === '') {
                        setDestinationAnim(false);
                        setExitAnim(false);
                        setLoopAnimCheck(false);
                        setTimeout(() => {
                          setLoopAnim(false);
                        }, 4000);
                      }
                    }}
                    onFocus={() => setActiveInput('destination')}
                  />
                  {activeInput === 'destination' && Array.isArray(suggestions) && suggestions.length > 0 && (
                    <div style={{ listStyleType: 'none', marginTop: '-8px', position: 'absolute', width: '100%', backgroundColor: 'var(--main-bg-color)', zIndex: 100000, borderRadius: '0px 0px 10px 10px', border: '1px solid var(--border-color)', borderTop: 'none' }}>
                      {suggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          className={s.locationSuggestion}
                          onClick={() => {
                            setDestination(suggestion.display_name);
                            setDestinationCoords({ latitude: parseFloat(suggestion.lat), longitude: parseFloat(suggestion.lon) });
                            setSuggestions([]);
                            setExitAnim(true);
                            setTimeout(() => {
                              setLoopAnim(true);
                            }, 300);
                          }}
                        >
                          {suggestion.display_name}
                        </li>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <p style={{ marginBottom: '-10px', fontSize: '14px', color: 'var(--sec-color)' }}>What's your vehicle type?</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '10px',
                    width: '100%',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                >
                  <div
                    style={{
                      backgroundColor: selectedType === 'sedan' ? 'var(--btn-bg-color)' : 'transparent',
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRight: '1px solid var(--border-color)',
                      width: '100%',
                      transition: '0.3s ease-in-out all'
                    }}
                    onClick={() => {
                      setSelectedType('sedan');
                    }}
                  >
                    <p style={{ margin: 0, marginTop: selectedType === 'sedan' ? '5px' : '', transition: '0.3s ease-in-out all' }}>
                      Sedan
                      <p style={{ color: 'var(--sec-color)', margin: 0, fontSize: '12px', marginTop: selectedType === 'sedan' ? '0' : '-2px', opacity: selectedType === 'sedan' ? 1 : 0, transition: '0.3s ease-in-out all' }}>
                        $1/mile
                      </p>
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundColor: selectedType === 'suv' ? 'var(--btn-bg-color)' : 'transparent',
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      transition: '0.3s ease-in-out all'
                    }}
                    onClick={() => {
                      setSelectedType('suv');
                    }}
                  >
                    <p style={{ margin: 0, marginTop: selectedType === 'suv' ? '5px' : '', transition: '0.3s ease-in-out all' }}>
                      SUV
                      <p style={{ color: 'var(--sec-color)', margin: 0, fontSize: '12px', marginTop: selectedType === 'suv' ? '0' : '-2px', opacity: selectedType === 'suv' ? 1 : 0, transition: '0.3s ease-in-out all' }}>
                        $1.05/mile
                      </p>
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundColor: selectedType === 'truck' ? 'var(--btn-bg-color)' : 'transparent',
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderLeft: '1px solid var(--border-color)',
                      width: '100%',
                      transition: '0.3s ease-in-out all'
                    }}
                    onClick={() => {
                      setSelectedType('truck');
                    }}
                  >
                    <p style={{ margin: 0, marginTop: selectedType === 'truck' ? '5px' : '', transition: '0.3s ease-in-out all' }}>
                      Truck
                      <p style={{ color: 'var(--sec-color)', margin: 0, fontSize: '12px', marginTop: selectedType === 'truck' ? '0' : '-2px', opacity: selectedType === 'truck' ? 1 : 0, transition: '0.3s ease-in-out all' }}>
                        $1.15/mile
                      </p>
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', gap: '20px' }}>
                <button
                  onClick={addVehicle}
                  disabled={Array.isArray(vehicles) && vehicles.length >= 3}
                  style={{
                    width: '100%',
                    padding: '10px',
                    outline: 'none',
                    border: Array.isArray(vehicles) && vehicles.length >= 1 ? '1px solid var(--border-color)' : '1px solid var(--btn-bg-color)',
                    backgroundColor: Array.isArray(vehicles) && vehicles.length >= 1 ? 'var(--main-bg-color)' : 'var(--btn-bg-color)',
                    borderRadius: '10px',
                    color: 'var(--main-color)',
                    cursor: Array.isArray(vehicles) && vehicles.length >= 3 ? 'not-allowed' : 'pointer',
                    display: Array.isArray(vehicles) && vehicles.length >= 3 ? 'none' : 'block',
                    height: '46px'
                  }}
                >
                  {Array.isArray(vehicles) && !isSmallScreen6 && vehicles.length >= 1 ? 'Add another vehicle' : 'Add a vehicle'}
                  <span>
                    {Array.isArray(vehicles) && vehicles.length === 1 ? ' -15%' : vehicles?.length === 2 ? ' -25%' : ''}
                  </span>
                </button>
                {Array.isArray(vehicles) && vehicles.length >= 1 && (
                  <div style={{ position: 'relative', width: '100%' }}>
                    <button
                      onClick={navigateToTransportPage}
                      style={{
                        width: '100%',
                        padding: '10px',
                        outline: 'none',
                        border: 'none',
                        backgroundColor: 'var(--btn-bg-color)',
                        borderRadius: '10px',
                        color: 'var(--main-color)',
                        height: '46px',
                        cursor: 'pointer',
                      }}
                    >
                      {isSmallScreen6 ? 'Transport' : 'Transport Now!'}
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div style={{ width: Array.isArray(vehicles) && vehicles.length > 0 ? isSmallScreen3 ? isSmallScreen4 ? '100%' : '50%' : '40%' : '0%', padding: '0', margin: '0', marginTop: '0px', transition: 'ease-in-out 0.3s all', overflow: 'hidden', position: 'relative' }}>
              {Array.isArray(vehicles) && vehicles.map((vehicle, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: isSmallScreen4 ? '0px 20px' : '10px 20px',
                    borderBottom: isSmallScreen4 ? '1px solid rgba(0, 0, 0, 0)' : '1px solid var(--border-color)',
                    transition: '0.3s ease-in-out all',
                    height: 'auto',
                    overflow: 'hidden',
                  }}
                >
                  <div>
                    <p>
                      - <strong>{vehicle.type === 'suv' ? vehicle.type.toUpperCase() : vehicle.type.charAt(0).toUpperCase() + vehicle.type.slice(1)}</strong>{' '}
                      <span style={{ fontSize: '14px', color: 'var(--sec-color)' }}>
                        {vehicle.discountedPricePerMile && !isSmallScreen5 && (
                          <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>
                            {vehicle.basePricePerMile}
                          </span>
                        )}
                        {!isSmallScreen7 &&
                          <>
                            {vehicle.discountedPricePerMile ? vehicle.discountedPricePerMile : vehicle.basePricePerMile}
                          </>
                        }
                      </span>
                    </p>
                  </div>
                  <div style={{ position: 'relative', display: 'flex', gap: '20px' }}>
                    <button
                      onClick={() => toggleCoverage(index)}
                      style={{
                        height: '36px',
                        marginBottom: '0',
                        paddingLeft: '15px',
                        paddingRight: '15px',
                        outline: 'none',
                        border: '1px solid var(--border-color)',
                        borderRadius: '10px',
                        backgroundColor: vehicle.covered ? 'var(--btn-bg-color)' : 'var(--main-bg-color)',
                        color: 'var(--main-color)',
                        cursor: 'pointer',
                      }}
                    >
                      {vehicle.covered ? '- $99 Coverage' : '+ $99 Coverage'}
                    </button>
                    <button
                      onClick={() => removeVehicle(index)}
                      style={{
                        height: '36px',
                        marginBottom: '0',
                        width: '36px',
                        paddingLeft: '15px',
                        paddingRight: '15px',
                        outline: 'none',
                        border: '1px solid var(--border-color)',
                        borderRadius: '10px',
                        backgroundColor: 'var(--main-bg-color)',
                        color: 'var(--main-color)',
                        cursor: 'pointer',
                      }}
                    >
                      <MdOutlineRemoveCircleOutline size={16} style={{ marginBottom: '-2px', marginLeft: '-6px' }} />
                    </button>
                  </div>
                </div>
              ))}
              <div style={{ height: isSmallScreen4 && vehicles.length == 3 ? '170px' : vehicles.length == 2 ? '130px' : vehicles.length == 1 ? '100px' : '0px' }} />
              {costBreakdown && (
                <div style={{ marginTop: '5px', color: 'var(--main-color)', textAlign: 'left', position: 'absolute', width: '100%', bottom: 10, borderTop: Array.isArray(vehicles) && vehicles.length === 3 ? 'none' : '1px solid var(--border-color)', paddingTop: Array.isArray(vehicles) && vehicles.length === 3 ? '0' : '6px' }}>
                  <div style={{ marginLeft: '20px' }}>
                    {costBreakdown.map((item, index) => (
                      <div style={{ margin: '2px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} key={index}>
                        <p style={{ margin: vehicles.length === 3 ? '3px' : 0, color: 'var(--sec-color)' }}>{item.vehicleType}:</p>
                        <p style={{ margin: 0, marginRight: '20px' }}>${item.vehicleCost} {item.coverageCost && (
                          <span> + {isSmallScreen6 ? `Covered` : `Coverage: ${item.coverageCost}`}</span>
                        )}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '7px 20px 0px 20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '10px', borderTop: '1px solid var(--border-color)' }}>
                    <p style={{ margin: 0 }}>Total <span style={{ color: 'var(--sec-color)' }}>(est.)</span></p>
                    <p style={{ margin: 0 }}>${estimatedCost}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <h1 className={s.trustedTitle}>Trusted Perspectives</h1>
          <p className={s.trustedDescription}>{isSmallScreen5 ? 'Lorem ipsum dolor sit amet consectetur' : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit'}</p>
          <Review />
        </div>
      </div>
    </div>
  );
};

export default Brokers;
