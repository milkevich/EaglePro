import React, { useState, useEffect, useContext } from 'react';
import { collection, getDocs, doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Divider from '@mui/material/Divider';
import Button from '../shared/UI/Button';
import { Alert, Breadcrumbs, Fade, Grow, Rating, Slide } from '@mui/material';
import { BsArrowLeft } from 'react-icons/bs';
import logo from '../assets/bilaldesigner-attachments/eaglepro files 2.png'
import { FiCalendar } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [mealType, setMealType] = useState('b');
    const [cart, setCart] = useState({ b: {}, l: {}, d: {} });
    const [imageLoaded, setImageLoaded] = useState({});
    const [showConfirm, setShowConfirm] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [success, setSuccess] = useState(false);
    const [fullName, setFullName] = useState('');
    const [truckNum, setTruckNum] = useState('');
    const [takeOutDate, setTakeOutDate] = useState('');
    const [alertShown, setAlertShown] = useState(false);
    const [alertMessage, setAlertMessage] = useState('Something went wrong');
    const [entryPopUpShown, setEntryPopUpShown] = useState(false);
    const [entryPopUpShownAnim, setEntryPopUpShownAnim] = useState(false);
    const navigate = useNavigate()
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isSmallScreen2, setIsSmallScreen2] = useState(false);
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 600);
            setIsSmallScreen2(window.innerWidth <= 950)
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const menuCollection = collection(db, 'menu');
                const menuSnapshot = await getDocs(menuCollection);
                const menuList = menuSnapshot.docs.map((doc) => doc.data());
                setMenuItems(menuList);

                const calculatedRatings = menuList.map((_, index) => (index % 2 === 0 ? 5.0 : 4.9));
                setRatings(calculatedRatings);

                setEntryPopUpShown(true);
                setEntryPopUpShownAnim(true)
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            } catch (error) {
                console.error('Error fetching menu items:', error);
            }
        };

        fetchMenuItems();
    }, []);

    const filteredMenuItems = menuItems.filter((item) => item.id.startsWith(mealType));

    const getTotalItemsForMealType = (mealType) => {
        return Object.values(cart[mealType]).reduce((acc, qty) => acc + qty, 0);
    };

    const handleAddToCart = (id) => {
        if (getTotalItemsForMealType(mealType) < 5) {
            setCart((prevCart) => ({
                ...prevCart,
                [mealType]: {
                    ...prevCart[mealType],
                    [id]: (prevCart[mealType][id] || 0) + 1,
                },
            }));
        } else {
            setAlertShown(true);
            setAlertMessage('You can only select up to 5 dishes');
            setTimeout(() => {
                setAlertShown(false);
            }, 3000);
        }
    };

    const handleIncreaseQuantity = (id) => {
        if (cart[mealType][id] < 5 && getTotalItemsForMealType(mealType) < 5) {
            setCart((prevCart) => ({
                ...prevCart,
                [mealType]: {
                    ...prevCart[mealType],
                    [id]: prevCart[mealType][id] + 1,
                },
            }));
        } else {
            setAlertShown(true);
            setAlertMessage('You can only select up to 5 dishes');
            setTimeout(() => {
                setAlertShown(false);
            }, 3000);
        }
    };

    const handleDecreaseQuantity = (id) => {
        setCart((prevCart) => {
            const updatedMealCart = { ...prevCart[mealType] };
            if (updatedMealCart[id] > 1) {
                updatedMealCart[id] -= 1;
            } else {
                delete updatedMealCart[id];
            }
            return {
                ...prevCart,
                [mealType]: updatedMealCart,
            };
        });
    };

    const getCartItems = () => {
        const allCartItems = [];
        for (const [meal, items] of Object.entries(cart)) {
            for (const [id, quantity] of Object.entries(items)) {
                const menuItem = menuItems.find((item) => item.id === id);
                if (menuItem) {
                    allCartItems.push({
                        ...menuItem,
                        meal,
                        quantity,
                    });
                }
            }
        }
        return allCartItems;
    };

    const submitOrder = async () => {
        const uniqueId = `${fullName.split(' ').join('')}-${takeOutDate.split('-').join('')}`;

        try {
            const ordersCollection = collection(db, 'orders');
            const existingOrderDocRef = doc(ordersCollection, uniqueId);
            const existingOrderSnapshot = await getDoc(existingOrderDocRef);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            if (existingOrderSnapshot.exists()) {
                setAlertShown(true);
                setAlertMessage('Order already exists');
                setTimeout(() => {
                    setAlertShown(false);
                }, 3000);
                return;
            }
        } catch (error) {
            console.error('Error checking existing order:', error);
            setAlertShown(true);
            setAlertMessage('Something went wrong');
            setTimeout(() => {
                setAlertShown(false);
            }, 3000);
            return;
        }

        const orderData = {
            cart,
            fullName,
            truckNum,
            takeOutDate,
            timestamp: new Date(),
            id: uniqueId,
            done: false,
        };

        try {
            const ordersCollection = collection(db, 'orders');
            const orderDocRef = doc(ordersCollection, uniqueId);
            await setDoc(orderDocRef, orderData);
            setCart({ b: {}, l: {}, d: {} });
            setFullName('');
            setTruckNum('');
            setTakeOutDate('');
            setSuccess(true);
        } catch (error) {
            console.error('Error submitting order:', error);
            setAlertShown(true);
            setAlertMessage('Something went wrong');
            setTimeout(() => {
                setAlertShown(false);
            }, 3000);
        }
    };

    const today = new Date().toISOString().split('T')[0];


    return (
        <div>
            {entryPopUpShown &&
                <Fade in={entryPopUpShownAnim}>
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        width: '100vw',
                        height: '100vh',
                        zIndex: 100000000000000,
                        margin: 0,
                        padding: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <Slide direction='up' in={entryPopUpShownAnim}>
                            <div style={{
                                maxWidth: 350,
                                width: '100%',
                                height: 320,
                                backgroundColor: "var(--main-bg-color)",
                                borderRadius: 20,
                                padding: 20,
                                position: 'relative',
                                border: '1px solid var(--border-color)'
                            }}>
                                <div>
                                    <h3 style={{ margin: 0 }}>Как пользоваться:</h3>
                                    <p style={{ color: 'var(--main-secondary-color)' }}>- Выберите не менее 5 блюд из каждой секции (5 завтраков, 5 обедов, 5 ужинов)</p>
                                    <p style={{ color: 'var(--main-secondary-color)' }}>- Можно заказать несколько одинкавых блюд в каждой секции</p>
                                    <p style={{ color: 'var(--main-secondary-color)' }}>- укажите свои имя и бортовой номер трака</p>
                                </div>
                                <div style={{ position: 'absolute', bottom: 16 }}>
                                    <Button onClick={() => {
                                        setEntryPopUpShownAnim(false)
                                        setTimeout(() => {
                                            setEntryPopUpShown(false)
                                        }, 300);
                                    }} borderRadius={10} width={350}>Продолжить</Button>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </Fade>


            }
            {alertShown &&
                <div style={{ width: "100vw", margin: "auto", zIndex: 100000000, marginTop: 78, position: 'fixed' }}>
                    <div style={{ width: '320px', margin: 'auto' }}>
                        <Slide direction="down" in={alertShown} mountOnEnter unmountOnExit>
                            <Alert sx={{ marginTop: "10px", position: "fixed", width: '290px' }} severity="error">{alertMessage}</Alert>
                        </Slide>
                    </div>
                </div>
            }
            <div style={{ padding: isSmallScreen ? '10px 20px' : '10px 60px', borderBottom: '1px solid var(--border-color)', position: 'sticky', top: 0, zIndex: 10000000, backgroundColor: 'var(--main-bg-color)' }}>
                <div style={{ maxWidth: '1440px', margin: 'auto', display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <BsArrowLeft color='var(--main-color)' size={16} style={{ backgroundColor: 'var(--main-bg-color)', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-color)', cursor: 'pointer' }} onClick={() => {
                            navigate(-1);
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                        }} />
                        <div style={{ marginBottom: '4px' }}>
                            <h2 style={{ margin: 0 }}>
                                {showConfirm ? 'Confirm your order' :
                                    <>
                                        {showForm ? 'Fill out the form' :
                                            <>
                                                Order {mealType === 'b' ? 'breakfast' : mealType === 'l' ? 'lunch' : 'dinner'}
                                            </>
                                        }
                                    </>
                                }
                            </h2>
                            <p style={{ margin: 0, color: 'var(--sec-color)', marginTop: '-5px' }}>
                                {showConfirm ? 'Review the chosen dishes' :
                                    <>
                                        {showForm ? 'Fill out all the fields below' :
                                            <>
                                                Select 5 dishes for {mealType === 'b' ? 'breakfast' : mealType === 'l' ? 'lunch' : 'dinner'}
                                            </>
                                        }
                                    </>
                                }
                            </p>
                        </div>
                    </div>
                    <div>
                        <img style={{ maxWidth: '42px', marginTop: '5px' }} src={logo} />
                    </div>
                </div>
            </div>
            <br />
            <div style={{ maxWidth: '1440px', margin: 'auto' }}>
                {success &&
                    <div style={{
                        maxWidth: '400px',
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '30vh',
                        textAlign: 'center'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '40vh' }}>
                            <div style={{ textAlign: 'center' }}>
                                <h3 style={{ margin: 0 }}>Thanks for your order!</h3>
                                <p style={{ margin: 0, color: 'var(--sec-color)', marginTop: '5px' }}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div style={{ maxWidth: '200px', margin: 'auto' }}>
                                <button onClick={() => {
                                    navigate(-1);
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth'
                                    });
                                }} style={{ padding: '12.5px 60px', border: 'none', outline: 'none', backgroundColor: 'var(--btn-bg-color)', color: 'var(--main-color)', borderRadius: '10px', cursor: 'pointer', width: '100%' }}>Go back</button>
                            </div>
                        </div>
                    </div>
                }
                <div style={{ display: 'grid', width: isSmallScreen ? 'calc(100% - 40px)' : 'calc(100% - 200px)', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', margin: 'auto', marginBottom: 0, paddingBottom: 0, minHeight: '50vh', padding: isSmallScreen ? '0px 20px' : '' }}>
                    {!showForm && !showConfirm && filteredMenuItems.map((item, index) => (
                        <div style={{ width: '100%', backgroundColor: 'var(--main-bg-color)', borderRadius: '20px', padding: '0px 0px', position: 'relative', border: '1px solid var(--border-color)' }} key={item.id}>
                            <div style={{ margin: 'auto', padding: 20, position: 'relative' }}>
                                <div style={{ height: 200, overflow: 'hidden', borderRadius: 10, width: '100%' }}>
                                    {!imageLoaded[item.id] && (
                                        <div style={{ width: 'calc(100% - 40px)', height: '200px', backgroundColor: 'var(--btn-bg-color)', position: 'absolute', borderRadius: 10, zIndex: 5 }} />
                                    )}
                                    <img
                                        src={item.photoURL}
                                        alt={item.dishName}
                                        style={{ width: '100%', height: 'auto', zIndex: '10', display: imageLoaded[item.id] ? 'block' : 'none' }}
                                        onLoad={() => setImageLoaded((prev) => ({ ...prev, [item.id]: true }))}
                                    />
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <p>{item.dishName}</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--sec-color)' }}>
                                        <span>{ratings[index].toFixed(1)}</span>
                                        <Rating size='small' max={1} name="read-only" defaultValue={0.5} value={0.5} readOnly />
                                    </div>
                                </div>
                                {cart[mealType][item.id] ? (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                        <Button special={true} secondary={true} borderRadius={10} onClick={() => handleDecreaseQuantity(item.id)}>
                                            -
                                        </Button>
                                        <Button disabled={true} special={true} secondary={true} borderRadius={10} width={'100%'}>
                                            {cart[mealType][item.id]}
                                        </Button>
                                        <div style={{ opacity: getTotalItemsForMealType(mealType) === 5 ? 0.5 : 1 }}>
                                            <Button disabled={getTotalItemsForMealType(mealType) === 5} special={true} secondary={true} borderRadius={10} onClick={() => handleIncreaseQuantity(item.id)}>
                                                +
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    <Button
                                        secondary={getTotalItemsForMealType(mealType) === 5}
                                        disabled={getTotalItemsForMealType(mealType) === 5}
                                        borderRadius={10}
                                        width={'100%'}
                                        onClick={() => handleAddToCart(item.id)}
                                    >
                                        Add
                                    </Button>
                                )}
                            </div>
                            <Divider />
                        </div>
                    ))}
                    {showForm &&
                        <div style={{ width: "100%", margin: "auto", minHeight: '76vh', maxWidth: '1470px' }}>
                            <div style={{ display: isSmallScreen2 ? 'block' : 'flex', width: '100%', justifyContent: 'space-between' }}>
                                <>
                                    <div style={{ backgroundColor: 'var(--main-bg-color)', width: isSmallScreen ? 'calc(100% - 20px)' : '100%', padding: isSmallScreen ? '10px' : '15px 25px 25px 25px' }}>
                                        <h3 style={{ margin: 0, padding: 0 }}>Как вас зовут?<span style={{ color: "#bd2626" }}>*</span></h3>
                                        <p style={{ marginTop: 0, padding: 0, color: 'var(--main-secondary-color)' }}>Пожалуйста введите своё полное имя.</p>
                                        <input style={{ padding: '15px 35px 15px 15px', width: isSmallScreen2 ? 'calc(100% - 60px)' : 'calc(100% - 30px)', border: '1px solid var(--border-color)', outline: 'none', borderRadius: '10px', backgroundColor: 'var(--main-bg-color)', color: 'var(--main-color)' }} name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Ex. John Doe" />
                                    </div>
                                    <br />
                                </>
                                <>
                                    <div style={{ backgroundColor: 'var(--main-bg-color)', width: isSmallScreen ? 'calc(100% - 20px)' : '100%', padding: isSmallScreen ? '10px' : '15px 25px 25px 25px' }}>
                                        <h3 style={{ margin: 0, padding: 0 }}>Номер трака<span style={{ color: "#bd2626" }}>*</span></h3>
                                        <p style={{ marginTop: 0, padding: 0, color: 'var(--main-secondary-color)' }}>Пожалуйста введите номер своего трака.</p>
                                        <input style={{ padding: '15px 35px 15px 15px', width: isSmallScreen2 ? 'calc(100% - 60px)' : '100%', border: '1px solid var(--border-color)', outline: 'none', borderRadius: '10px', backgroundColor: 'var(--main-bg-color)', color: 'var(--main-color)' }} name="truckNum" value={truckNum} onChange={(e) => setTruckNum(e.target.value)} placeholder="Ex. VV-9, VD-12" />
                                    </div>
                                    <br />
                                </>
                            </div>
                            <>
                                <div style={{ backgroundColor: 'var(--main-bg-color)', width: isSmallScreen ? 'calc(100% - 20px)' : '100%', padding: isSmallScreen ? '10px' : '15px 25px 25px 25px', position: 'relative' }}>
                                    <h3 style={{ margin: 0, padding: 0 }}>Дата получения заказа<span style={{ color: "#bd2626" }}>*</span></h3>
                                    <p style={{ marginTop: 0, padding: 0, color: 'var(--main-secondary-color)' }}>Выберите дату получения заказа.</p>
                                    <input style={{ padding: '0px 15px', width: 'calc(100% - 30px)', border: '1px solid var(--border-color)', outline: 'none', borderRadius: '10px', backgroundColor: 'var(--main-bg-color)', color: 'var(--main-color)', height: '47.5px' }} placeholder='mm/dd/yyyy' min={today} value={takeOutDate} onChange={(e) => setTakeOutDate(e.target.value)} type="date" />
                                    <FiCalendar color='var(--sec-color)' style={{ position: 'absolute', right: isSmallScreen ? '25px' : 40, bottom: isSmallScreen ? '27.5px' : 42.5, pointerEvents: 'none', zIndex: 10000 }} />
                                </div>
                                <br />
                            </>
                        </div>
                    }
                    {showConfirm &&
                        <div style={{ display: isSmallScreen ? 'flex' : 'grid', width: '100%', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', margin: 'auto', marginBottom: 0, paddingBottom: 0, marginTop: '0px', flexDirection: isSmallScreen ? 'column' : '' }}>
                            {getCartItems().map(item => (
                                <div key={item.id} style={{ width: "100%", margin: "auto", paddingTop: 20, paddingBottom: 0, position: 'relative', border: '1px solid var(--border-color)', padding: '20px 20px 0px 20px', maxWidth: isSmallScreen ? '290px' : '350px', borderRadius: '20px' }}>
                                    <div style={{ height: 200, overflow: 'hidden', borderRadius: 10 }}>
                                        {!imageLoaded[item.id] && (
                                            <div style={{ width: '320px', height: '200px', backgroundColor: 'var(--main-bg-secondary-color)', position: 'absolute', borderRadius: 10, zIndex: 5 }} />
                                        )}
                                        <img
                                            src={item.photoURL}
                                            alt={item.dishName}
                                            style={{ width: '100%', height: 'auto', zIndex: '10', display: imageLoaded[item.id] ? 'block' : 'none' }}
                                            onLoad={() => setImageLoaded(prev => ({ ...prev, [item.id]: true }))}
                                        />
                                    </div>
                                    <p>{item.dishName} - {item.quantity} шт.</p>
                                    <p style={{ marginTop: '-10px', color: 'var(--sec-color)' }}>Тип питания: {item.meal === 'b' ? 'Завтрак' : item.meal === 'l' ? 'Обед' : 'Ужин'}</p>
                                </div>
                            ))}
                        </div>
                    }
                </div>
                <div style={{ height: '10px' }} />
                <div style={{ position: 'sticky', bottom: 0, backgroundColor: 'var(--main-bg-color)', width: '100%', paddingBottom: 'env(safe-area-inset-bottom)', zIndex: 1000, padding: '10px 0px' }}>
                    {!showForm && !success ?
                        <>
                            {showConfirm && !success ?
                                <div>
                                    <div style={{ flexDirection: 'row', display: 'flex', width: isSmallScreen ? 'calc(100% - 40px)' : 'calc(100% - 200px)', margin: 'auto', justifyContent: 'space-between', paddingTop: 10, gap: '20px' }}>
                                        <Button onClick={() => {
                                            setShowConfirm(false)
                                            setShowForm(true)
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'smooth'
                                            });
                                        }} secondary={true} borderRadius={10} width="100%">Go back</Button>
                                        <Button onClick={submitOrder} borderRadius={10} width="100%">Confirm</Button>
                                    </div>
                                </div>
                                :
                                <>
                                    {mealType === 'b' ?
                                        <div style={{ width: isSmallScreen ? 'calc(100% - 40px)' : 'calc(100% - 200px)', margin: 'auto', justifyContent: 'space-between', paddingTop: 10, marginLeft: isSmallScreen ? '20px' : '100px' }}>
                                            <Button secondary={getTotalItemsForMealType(mealType) < 5} disabled={getTotalItemsForMealType(mealType) < 5} onClick={() => {
                                                setMealType('l')
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: 'smooth'
                                                });
                                            }} borderRadius={10} width="100%">Next</Button>
                                        </div>
                                        :
                                        <div style={{ flexDirection: 'row', display: 'flex', width: isSmallScreen ? 'calc(100% - 40px)' : 'calc(100% - 200px)', margin: 'auto', justifyContent: 'space-between', paddingTop: 10, marginLeft: isSmallScreen ? '20px' : '100px', gap: '20px' }}>
                                            <Button onClick={mealType === 'd' ? () => {
                                                setMealType('l')
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: 'smooth'
                                                });
                                            } : () => {
                                                setMealType('b')
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: 'smooth'
                                                });
                                            }} secondary={true} borderRadius={10} width="100%">Go back</Button>
                                            <Button disabled={getTotalItemsForMealType(mealType) < 5} secondary={getTotalItemsForMealType(mealType) < 5} onClick={mealType === 'l' ? () => {
                                                setMealType('d')
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: 'smooth'
                                                });
                                            } : () => {
                                                setShowForm(true)
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: 'smooth'
                                                });
                                            }} borderRadius={10} width="100%">Next</Button>
                                        </div>
                                    }
                                </>
                            }
                        </>
                        : !success &&
                        <div style={{ flexDirection: 'row', display: 'flex', width: isSmallScreen ? 'calc(100% - 60px)' : 'calc(100% - 200px)', margin: 'auto', justifyContent: 'space-between', paddingTop: 10, gap: '20px' }}>
                            <Button onClick={() => {
                                setShowForm(false)
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                });
                            }} secondary={true} borderRadius={10} width="100%">Go back</Button>
                            <Button disabled={fullName == '' || truckNum == '' || takeOutDate == ''} secondary={fullName == '' || truckNum == '' || takeOutDate == ''} onClick={() => {
                                if (fullName !== '' && truckNum !== '' && takeOutDate !== '') {
                                    setShowConfirm(true)
                                    setShowForm(false)
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth'
                                    });
                                }
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                });
                            }} borderRadius={10} width="100%">Next</Button>
                        </div>
                    }
                </div>
                <div style={{ height: '10px', marginBottom: '-40px' }} />
            </div>
        </div >
    )
}

export default Order