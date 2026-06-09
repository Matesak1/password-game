import React, { useState } from 'react';

const PasswordInput = ({ password, setPassword }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="mb-4">
            <div className="input-group shadow-sm">
                <input
                    type={isVisible ? "text" : "password"}
                    className="form-control custom-input p-3"
                    placeholder="Enter your password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="btn btn-custom px-4"
                    type="button"
                    onClick={() => setIsVisible(!isVisible)}
                >
                    {isVisible ? "Hide" : "Show"}
                </button>
            </div>
        </div>
    );
};

export default PasswordInput;