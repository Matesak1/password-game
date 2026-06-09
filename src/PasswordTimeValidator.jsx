import React, { useState, useEffect } from 'react';

const PasswordTimeValidator = ({ password, startTime }) => {
    const [validationObj, setValidationObj] = useState({
        isValid: true,
        timeElapsed: 0,
        statusMessage: "Waiting for input"
    });

    useEffect(() => {
        if (!password || !startTime) {
            setValidationObj({
                isValid: true,
                timeElapsed: 0,
                statusMessage: "Waiting for input"
            });
            return;
        }

        const elapsedSeconds = (Date.now() - startTime) / 1000;
        const isSuspicious = password.length >= 8 && elapsedSeconds < 5;

        setValidationObj({
            isValid: !isSuspicious,
            timeElapsed: elapsedSeconds,
            statusMessage: isSuspicious
                ? "Warning: Typed too fast. Potential automated entry."
                : "Input speed acceptable."
        });
    }, [password, startTime]);

    return (
        <div className="validator-box shadow-sm">
            <h5 className="mb-2" style={{ color: 'var(--text-color)' }}>Time Validation</h5>
            <div className="d-flex align-items-center mb-1">
        <span
            className="me-2"
            style={{ color: validationObj.isValid ? '#198754' : '#ffc107', fontSize: '1.2rem', lineHeight: '1' }}
        >
          {validationObj.isValid && password.length > 0 ? '✓' : (!validationObj.isValid ? '⚠' : '-')}
        </span>
                <span style={{ color: validationObj.isValid ? (password.length > 0 ? '#198754' : 'var(--text-color)') : '#fd7e14', fontWeight: '500' }}>
          {validationObj.statusMessage}
        </span>
            </div>
            {password.length > 0 && (
                <div className="text-muted-custom small">
                    Time elapsed: <strong style={{ color: 'var(--text-color)' }}>{validationObj.timeElapsed.toFixed(1)}s</strong>
                </div>
            )}
        </div>
    );
};

export default PasswordTimeValidator;