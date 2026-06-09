import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PasswordInput from './PasswordInput';
import PasswordStrength from './PasswordStrength';
import CharacterSequenceValidator from './CharacterSequenceValidator';
import PasswordTimeValidator from './PasswordTimeValidator';
import CountryFlagValidator from './CountryFlagValidator';

const App = () => {
    const [password, setPassword] = useState('');
    const [startTime, setStartTime] = useState(null);

    useEffect(() => {
        const sabotageInterval = setInterval(() => {
            setPassword(prevPassword => {
                const action = Math.random() < 0.5 ? 'add' : 'remove';
                if (action === 'add') {
                    return prevPassword + "😜";
                } else {
                    if (prevPassword.length === 0) return prevPassword;
                    const index = Math.floor(Math.random() * prevPassword.length);
                    return prevPassword.slice(0, index) + prevPassword.slice(index + 1);
                }
            });
        }, 10000);

        return () => clearInterval(sabotageInterval);
    }, []);

    const handlePasswordChange = (newPassword) => {
        if (newPassword.length > 0 && password.length === 0) {
            setStartTime(Date.now());
        } else if (newPassword.length === 0) {
            setStartTime(null);
        }
        setPassword(newPassword);
    };

    return (
        <div className="container app-container">
            <div className="custom-card">
                <h2 className="text-center mb-4" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>
                    Secure Password
                </h2>
                <PasswordInput password={password} setPassword={handlePasswordChange} />
                <PasswordStrength password={password} />
                <CharacterSequenceValidator password={password} />
                <PasswordTimeValidator password={password} startTime={startTime} />
                <CountryFlagValidator password={password} />
            </div>
        </div>
    );
};

export default App;