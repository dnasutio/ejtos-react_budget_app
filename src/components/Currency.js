import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState("£ Pound");

    const handleChangeCurrency = (currency) => {
        setSelectedCurrency(currency);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency[0]
        });
    }

    {/* <select className='custom-select' id="inputGroupSelect01" style={{backgroundColor: "#14fa14", color: "white"}}onChange={(event) => { handleChangeCurrency(event.target.value) }}>
            <option defaultValue value='£' className='currency-option'>£ Pound</option>
            <option value='$' className='currency-option'>$ Dollar</option>
            <option value='€' className='currency-option'>€ Euro </option>
            <option value='₹' className='currency-option'>$ Rupee</option>
        </select> */}

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"#45d143"}}>
                Currency ({selectedCurrency})
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2" style={{backgroundColor: "#47bf45"}}>
                <button className="dropdown-item" type="button" value='£ Pound' onClick={(event) => handleChangeCurrency(event.target.value)}>£ Pound</button>
                <button className="dropdown-item" type="button" value='$ Dollar' onClick={(event) => handleChangeCurrency(event.target.value)}>$ Dollar</button>
                <button className="dropdown-item" type="button" value='€ Euro' onClick={(event) => handleChangeCurrency(event.target.value)}>€ Euro</button>
                <button className="dropdown-item" type="button" value='₹ Rupee' onClick={(event) => handleChangeCurrency(event.target.value)}>₹ Rupee</button>
            </div>
        </div>

    );
}

export default Currency;