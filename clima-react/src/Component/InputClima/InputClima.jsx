import React from 'react';
import './input.scss';

function InputClima({setValue}){
    return(
        <>
            <input placeholder='Exemplo: São Paulo' id="input-search" type="text" onChange={(e)=>{
                setValue(e.target.value);
            }} />
        </>
    )
}
export default InputClima;