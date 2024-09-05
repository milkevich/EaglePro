import React, { useEffect, useState } from 'react';
import { db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import s from '../../shared/Styles/Mechanics.module.scss'
import { FiEdit } from "react-icons/fi";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";

const ExpressAdmin = () => {
    const [data, setData] = useState(null);
    const [isSmallScreen2, setIsSmallScreen2] = useState(false);
    const [isSmallScreen3, setIsSmallScreen3] = useState(false);
    const [timeFrom, setTimeFrom] = useState('');
    const [timeTo, setTimeTo] = useState('');
    const [location, setLocation] = useState('');
    const [locationC, setLocationC] = useState('');
    const [editing, setEditing] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen2(window.innerWidth <= 1000);
            setIsSmallScreen3(window.innerWidth <= 515);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const getData = async () => {
            try {
                const docRef = doc(db, "admin", "expressScreen");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const fetchedData = docSnap.data();
                    setData(fetchedData);

                    setTimeFrom(fetchedData.timeFrom || '');
                    setTimeTo(fetchedData.timeTo || '');
                    setLocation(fetchedData.location || '');
                    setLocationC(fetchedData.locationInConstraction || '');
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching document:", error);
            }
        };

        getData();
    }, []);

    return (
        <div style={{marginTop: '10px'}}>
            {data ? (
                <div>
                    <p style={{fontSize: '21px', margin: 0, marginBottom: '0px', fontWeight: 600}}>General</p>
                    <p style={{fontSize: '16px', margin: 0, marginBottom: '10px', color: 'var(--sec-color)'}}>Click the edit button to edit</p>
                    <br />
                    {isSmallScreen3 && <br />}
                    {isSmallScreen3 && <br />}
                    <div style={{width: editing ? '200px' : '', flexDirection: editing ? 'row' : '', display: editing ? 'flex' : '', gap: editing ? '10px' : ''}} className={s.editContainer}>{!editing ? <p onClick={() => setEditing(true)}><FiEdit /> Edit</p> : <><p style={{width: '100%'}} onClick={() => setEditing(true)}><FaRegSave /> Save</p><p style={{width: '100%'}} onClick={() => setEditing(false)}><MdOutlineRemoveCircleOutline /> Cancel</p></>}</div>
                    
                    {!isSmallScreen2 &&
                        <div style={{borderRadius: '20px 0px 20px 20px'}} className={s.locationWrapper}>
                            <div>
                                <p className={s.locationLabel}>Working hours</p>
                                <p className={s.locationStatus}>Open</p>
                            </div>
                            <div>
                                <p className={s.locationLabel}>Mon - Fri</p>
                                <p>{timeFrom} - {timeTo}</p>
                            </div>
                            <div>
                                <p className={s.locationLabel}>Location</p>
                                <p>{location}</p>
                            </div>
                            <div>
                                <p className={s.locationLabel}>In Construction</p>
                                <p>{locationC}</p>
                            </div>
                        </div>
                    }

                    {isSmallScreen2 && !isSmallScreen3 &&
                        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', padding: '5px 25px', borderRadius: '20px 0px 20px 20px', backgroundColor: 'var(--main-bg-color)', border: '1px solid var(--border-color)' }}>
                            <div>
                                <div>
                                    <p className={s.locationLabel}>Working hours</p>
                                    <p className={s.locationStatus}>Open</p>
                                </div>
                                <div style={{ marginTop: '40px' }}>
                                    <p className={s.locationLabel}>Location</p>
                                    <p>{location}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p className={s.locationLabel}>Mon - Fri</p>
                                    <p>{timeFrom} - {timeTo}</p>
                                </div>
                                <div style={{ marginTop: '40px' }}>
                                    <p className={s.locationLabel}>In Construction</p>
                                    <p>{locationC}</p>
                                </div>
                            </div>
                            <div style={{ position: 'absolute', height: '1px', width: 'calc(100% - 50px)', backgroundColor: 'var(--border-color)', top: '90px' }} />
                        </div>
                    }

                    {isSmallScreen3 &&
                        <div style={{ display: 'block', justifyContent: 'space-between', position: 'relative', padding: '5px 25px', borderRadius: '20px 0px 20px 20px', backgroundColor: 'var(--main-bg-color)', border: '1px solid var(--border-color)' }}>
                            <div style={{ display: isSmallScreen3 ? 'block' : 'flex', width: '100%', justifyContent: 'space-between' }}>
                                <div>
                                    <p className={s.locationLabel}>Working hours</p>
                                    <p className={s.locationStatus}>Open</p>
                                </div>
                                <div>
                                    <p className={s.locationLabel}>Mon - Fri</p>
                                    <p>{timeFrom} - {timeTo}</p>
                                </div>
                            </div>
                            <div style={{ display: 'block', marginTop: isSmallScreen3 ? '40px' : '' }}>
                                <div>
                                    <p className={s.locationLabel}>Location</p>
                                    <p>{location}</p>
                                </div>
                                <div>
                                    <p className={s.locationLabel}>In Construction</p>
                                    <p>{locationC}</p>
                                </div>
                            </div>
                            <div style={{ position: 'absolute', height: '1px', width: 'calc(100% - 50px)', backgroundColor: 'var(--border-color)', top: isSmallScreen3 ? '155px' : '90px' }} />
                        </div>
                    }
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ExpressAdmin;
