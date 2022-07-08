import React , {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import './card.scss';

const CardClima = ({ propriedades }) => {
    const [infoTempo, setInfoTempo] = useState({});
    
    useEffect(()=>{
        setInfoTempo({
            nome_cidade: propriedades.name,
            descricao_cidade: propriedades.weather[0].description,
            image_icon: propriedades.weather[0].icon,
            temp_atual: propriedades.main.temp,
            temp_minima: propriedades.main.temp_min,
            temp_maxima: propriedades.main.temp_max,
            sensacao_termica: propriedades.main.feels_like,
            umidade: propriedades.main.humidity,
            nuvens: propriedades.clouds.all
        });

    },[propriedades]);
    return(
        <div className="container-card">     
            <div className="box-1">
                <img src={`https://openweathermap.org/img/wn/${infoTempo.image_icon}@2x.png`} alt="Resposta Clima"></img>
            </div>       
            <div className="box-2">
                <div className="item-info__graus">
                    <h1>{infoTempo.temp_atual} °C</h1>    
                    <div className="item-info__minmax">
                        <p className="maxima"><FontAwesomeIcon icon={faAngleUp}  /><b>{infoTempo.temp_maxima} °C</b></p>
                        <p className="minima"><FontAwesomeIcon icon={faAngleDown}  /><b>{infoTempo.temp_minima} °C</b></p>   
                    </div>             
                </div>
                <div className="item-info__tempo">
                    <p><small>Nuvens: </small><b>{infoTempo.nuvens}% </b></p>
                    <p><small>Umidade: </small> <b>{infoTempo.umidade}% </b></p>
                    <p><small>Sensação Térmica: </small> <b>{infoTempo.sensacao_termica} °C</b></p>
                </div>
            </div> 
            <div className="box-3">
                    <h2>{infoTempo.nome_cidade}</h2>        
                    <div><p>{infoTempo.descricao_cidade}</p></div>
            </div>     
        </div>
    );
}

export default CardClima