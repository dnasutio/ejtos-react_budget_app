import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const handleChangeCurrency = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        });
    }

    return (
        <select className='custom-select' id="inputGroupSelect01" style={{backgroundColor: "#14fa14", color: "white"}}onChange={(event) => { handleChangeCurrency(event.target.value) }}>
            <option defaultValue value='£' className='currency-option'>£ Pound</option>
            <option value='$' className='currency-option'>$ Dollar</option>
            <option value='€' className='currency-option'>€ Euro </option>
            <option value='₹' className='currency-option'>$ Rupee</option>
        </select>
    );
}

export default Currency;