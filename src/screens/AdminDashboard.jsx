import React, { useState } from 'react';
import logo from '../assets/bilaldesigner-attachments/eaglepro files 2.png';
import s from '../shared/Styles/AdminDashboard.module.scss';
import ExpressAdmin from './Admin/ExpressAdmin';

const AdminDashboard = () => {
    const [selectedScreen, setSelectedScreen] = useState('Express');

    const handleScreenClick = (screenName) => {
        setSelectedScreen(screenName);
    };

    return (
        <div>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'start', position: 'fixed' }}>
                <div style={{ width: '90px', height: 'calc(100vh - 40px)', borderRight: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0px', backgroundColor: 'var(--main-bg-color)' }}>
                    <div>
                        <img src={logo} style={{ maxWidth: '50px' }} />
                    </div>
                    <div>
                        <button>-</button>
                    </div>
                </div>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--main-bg-color)'}}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', width: '100%', padding: '15px 20px' }}>
                        <div>
                            <h3 style={{ margin: 0 }}>Admin Dashboard</h3>
                            <p style={{ margin: 0, color: 'var(--sec-color)' }}>Lorem ipsum dolor sit consectetur</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '20px', padding: '15px 20px' }}>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>
                </div>
            </div>
            <div className={s.screensContainer}>
                <p 
                    className={selectedScreen === 'Express' ? s.screensNameActive : s.screensName} 
                    onClick={() => handleScreenClick('Express')}
                >
                    Express
                </p>
                <p 
                    className={selectedScreen === 'Careers' ? s.screensNameActive : s.screensName} 
                    onClick={() => handleScreenClick('Careers')}
                >
                    Careers
                </p>
                <p 
                    className={selectedScreen === 'Mechanics' ? s.screensNameActive : s.screensName} 
                    onClick={() => handleScreenClick('Mechanics')}
                >
                    Mechanics
                </p>
                <p 
                    className={selectedScreen === 'Trailers' ? s.screensNameActive : s.screensName} 
                    onClick={() => handleScreenClick('Trailers')}
                >
                    Trailers
                </p>
                <p 
                    className={selectedScreen === 'Gourmet' ? s.screensNameActive : s.screensName} 
                    onClick={() => handleScreenClick('Gourmet')}
                >
                    Gourmet
                </p>
                <p 
                    className={selectedScreen === 'Invest' ? s.screensNameActive : s.screensName} 
                    onClick={() => handleScreenClick('Invest')}
                >
                    Invest
                </p>
                <p 
                    className={selectedScreen === 'Brokers' ? s.screensNameActive : s.screensName} 
                    onClick={() => handleScreenClick('Brokers')}
                >
                    Brokers
                </p>
            </div>
            <div style={{marginLeft: '90px', width: 'calc(100% - 130px)',padding: '0px 20px', paddingTop: '145px', }}>
                {selectedScreen === 'Express' && <ExpressAdmin/>}
            </div>
        </div>
    );
};

export default AdminDashboard;
