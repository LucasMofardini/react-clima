import React , {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import  ImageGif  from '../../Assets/images/load-gif.gif';

import './card.scss';

const CardClima = ({ url }) => {
    const [infoTempo, setInfoTempo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      fetch(`${url}`)
      .then((res)=>{
        if(res.ok){
          return res.json();
        }
        throw new Error('Erro ao fazer a requisição' , res);
      })
      .then((json)=>{
        // console.log(json);
        // setPropriedades(json)
        setInfoTempo({
            nome_cidade: json.name,
            descricao_cidade: json.weather[0].description,
            image_icon: json.weather[0].icon,
            temp_atual: json.main.temp,
            temp_minima: json.main.temp_min,
            temp_maxima: json.main.temp_max,
            sensacao_termica: json.main.feels_like,
            umidade: json.main.humidity,
            nuvens: json.clouds.all
        });
        setLoading(false);
      })
    },[url]);

    return(
        <>

            <div className="container-card">   
            {infoTempo &&  
                <>
                    <div className="box-1">
                        <img src={`https://openweathermap.org/img/wn/${infoTempo.image_icon}@2x.png`} alt="Resposta Clima"/>
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
                </>
                } 
                {loading && 
                    <div className="container-loading">
                        <img width="100px" src={ImageGif} alt="Imagem de loading"/>
                    </div>
                }
            </div>
     
        </>
    );
}

export default CardClima;