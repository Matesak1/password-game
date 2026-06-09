import React, { useState, useEffect } from 'react';

const PasswordStrength = ({ password }) => {
    const [passwordStrength, setPasswordStrength] = useState({
        label: "",
        barColor: "#dc3545",
        barWidth: "0%",
        criteria: []
    });

    useEffect(() => {
        const evaluatePassword = (pwd) => {
            const criteriaList = [
                { label: "At least 8 characters", met: pwd.length >= 8 },
                { label: "At least one uppercase letter", met: /[A-Z]/.test(pwd) },
                { label: "At least one number", met: /[0-9]/.test(pwd) },
                { label: "At least one special character (!@#$%^&*)", met: /[!@#$%^&*]/.test(pwd) }
            ];

            const metCount = criteriaList.filter(c => c.met).length;

            let label = "Weak";
            let barColor = "#dc3545";
            let barWidth = "25%";

            if (metCount === 4) {
                label = "Strong";
                barColor = "#198754";
                barWidth = "100%";
            } else if (metCount >= 2) {
                label = "Medium";
                barColor = "#ffc107";
                barWidth = "50%";
            } else if (pwd.length === 0) {
                label = "";
                barWidth = "0%";
            }

            return { label, barColor, barWidth, criteria: criteriaList };
        };

        const strength = evaluatePassword(password);
        setPasswordStrength(strength);
    }, [password]);

    useEffect(() => {
        if (passwordStrength.label) {
            document.title = `Password Strength: ${passwordStrength.label}`;
        } else {
            document.title = "Secure Password";
        }
    }, [passwordStrength.label]);

    return (
        <div className="mb-4">
            {password.length > 0 && (
                <div className="d-flex justify-content-between mb-2">
                    <span style={{ fontWeight: '600', color: 'var(--text-color)' }}>Strength:</span>
                    <span style={{ color: passwordStrength.barColor, fontWeight: 'bold' }}>
            {passwordStrength.label}
          </span>
                </div>
            )}

            <div className="progress mb-3" style={{ height: '10px', backgroundColor: 'var(--border-color)' }}>
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                        width: passwordStrength.barWidth,
                        backgroundColor: passwordStrength.barColor,
                        transition: 'width 0.4s ease, background-color 0.4s ease'
                    }}
                ></div>
            </div>

            <ul className="list-unstyled mb-0">
                {passwordStrength.criteria.map((criterion, index) => (
                    <li key={index} className="d-flex align-items-center mb-2">
            <span
                className="me-2"
                style={{ color: criterion.met ? '#198754' : '#dc3545', fontSize: '1.2rem', lineHeight: '1' }}
            >
              {criterion.met ? '✓' : '✗'}
            </span>
                        <span style={{ color: criterion.met ? 'var(--text-color)' : 'var(--muted-text)', transition: 'color 0.3s' }}>
              {criterion.label}
            </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PasswordStrength;