import React from 'react'
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import '../css/dv.css';
import { useState } from 'react';
import axios from 'axios';

// https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_7WbtaSEsDFA5JZrkxcr6q3JsGDv3xOlvQfwONYeu

function Doviz() {

    let apikey = "fca_live_7WbtaSEsDFA5JZrkxcr6q3JsGDv3xOlvQfwONYeu";
    let baseUrl = "https://api.freecurrencyapi.com/v1/latest";


    const [firstvalue, setValue] = useState(0);
    const [fromR, setfromR] = useState("USD");
    const [toP, setToP] = useState("TRY");
    const [resultValue, setResultValue] = useState(0);




    const exchange = async () => {
        const req = `${baseUrl}?apikey=${apikey}&base_currency=${fromR}`;
        // base cuurency apideki veriden geliypr
        const response = await axios.get(req);
        const result = (response.data.data[toP]) * firstvalue;
        setResultValue(result);
    }


    return (

        <div className='div1'>

            <div className='baslik'>
                <h3 className='h3'> DOVIZ KURU UYGULAMASI</h3>
            </div>
            <div className='cevir'>

                <input value={firstvalue} onChange={(e) => setValue(e.target.value)} type="number" placeholder='girin:' className='input' />

                <select value={fromR} onChange={(e) => setfromR(e.target.value)} className='sec'>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TRY</option>
                </select>

                <button onClick={exchange} className='icons'> <FaArrowRightArrowLeft /> </button>

                <select value={toP} onChange={(e) => setToP(e.target.value)} className='sec'>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TRY</option>
                </select>

                <input value={resultValue} onChange={(e) => setResultValue(e.target.value)} type="number" placeholder='girin:' className='input' />


            </div>


        </div>
    )
}

export default Doviz