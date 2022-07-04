import React , {useEffect, useState} from "react";
import './card.css';

const CardClima = ({ propriedades }) => {

    const [infoTempo, setInfoTempo] = useState({});
    useEffect(()=>{
        setInfoTempo({
            // atual: propriedades.main.temp,
            // minima: propriedades.main.temp_min,
            // maxima: propriedades.main.temp_max,
            // descricao: propriedades.weather[0].description,
            // icon: propriedades.weather[0].icon,
            // nome: propriedades.name
        });
        console.log('CardClima - ' , propriedades.isNull);
    },[propriedades]);
    return(
        <div className="container-card">     
            {/* {infoTempo.atual}  */}
            {/* <div>
                <p>{propriedades.name}</p>     
            </div>       
            <div>
                <img src={`https://openweathermap.org/img/wn/${propriedades.weather[0].icon}@2x.png`} alt="Resposta Clima"></img>
            </div>
             <p>{propriedades.weather[0].description}</p>
 
             <div>
                <p>{propriedades.main.temp}</p>                 
             </div>
             <p>Minima : {propriedades.main.temp_min}</p>
             <p>Maximo : {propriedades.main.temp_max}</p>        */}
        </div>
    );
}

export default CardClima