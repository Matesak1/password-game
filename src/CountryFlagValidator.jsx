import React, { useState, useEffect } from 'react';

const countries = [
    "AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ",
    "BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS",
    "BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN",
    "CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE",
    "EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF",
    "GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM",
    "HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM",
    "JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC",
    "LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK",
    "ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA",
    "NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG",
    "PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW",
    "SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS",
    "ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO",
    "TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI",
    "VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"
];

const CountryFlagValidator = ({ password }) => {
    const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(() => {
        const randomCountry = countries[Math.floor(Math.random() * countries.length)];
        setSelectedCountry(randomCountry);
    }, []);

    if (!selectedCountry) {
        return null;
    }

    const isValid = password.toLowerCase().includes(selectedCountry.toLowerCase());

    return (
        <div className="validator-box shadow-sm">
            <h5 className="mb-3" style={{ color: 'var(--text-color)' }}>Country Flag Validation</h5>

            <div className="d-flex align-items-center mb-3">
                <img
                    src={`https://flagcdn.com/w80/${selectedCountry.toLowerCase()}.png`}
                    alt="Mystery Country Flag"
                    style={{ border: '1px solid var(--border-color)', borderRadius: '4px', width: '60px' }}
                    className="me-3 shadow-sm"
                />
                <div>
                    <div className="d-flex align-items-center mb-1">
            <span
                className="me-2"
                style={{ color: isValid ? '#198754' : '#dc3545', fontSize: '1.2rem', lineHeight: '1' }}
            >
              {isValid ? '✓' : '✗'}
            </span>
                        <span style={{ color: isValid ? '#198754' : '#dc3545', fontWeight: '500' }}>
              Password must contain the country code
            </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryFlagValidator;