import React from 'react';

const CharacterSequenceValidator = ({ password }) => {
    const evaluateSequence = (pwd) => {
        let count = 0;

        for (let i = 0; i <= pwd.length - 4; i++) {
            const chunk = pwd.slice(i, i + 4);
            const hasLower = /[a-z]/.test(chunk);
            const hasUpper = /[A-Z]/.test(chunk);
            const hasNum = /[0-9]/.test(chunk);
            const hasSpec = /[!@#$%^&*]/.test(chunk);

            if (hasLower && hasUpper && hasNum && hasSpec) {
                count++;
            }
        }

        return {
            isValid: count > 0,
            sequenceCount: count
        };
    };

    const result = evaluateSequence(password);

    return (
        <div className="validator-box shadow-sm">
            <h5 className="mb-2" style={{ color: 'var(--text-color)' }}>Sequence Validation</h5>
            <div className="d-flex align-items-center mb-1">
        <span
            className="me-2"
            style={{ color: result.isValid ? '#198754' : '#dc3545', fontSize: '1.2rem', lineHeight: '1' }}
        >
          {result.isValid ? '✓' : '✗'}
        </span>
                <span style={{ color: result.isValid ? '#198754' : '#dc3545', fontWeight: '500' }}>
          Requires 4 consecutive mixed character types
        </span>
            </div>
            <div className="text-muted-custom small">
                Valid sequences found: <strong style={{ color: 'var(--text-color)' }}>{result.sequenceCount}</strong>
            </div>
        </div>
    );
};

export default CharacterSequenceValidator;