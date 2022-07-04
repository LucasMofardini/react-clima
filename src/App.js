import { useEffect, useState } from 'react';
import './App.css';
import CardClima from './Component/CardClima/CardClima';

function App() {
  const [propriedadesCard, setPropriedadesCard] = useState(null);

  useEffect(()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?id=3448433&appid=a8f8ddee03250606bf203bacf672de48&lang=pt_br&units=metric')
    .then((res)=>{
      if(res.ok){
        console.log(res)
        return res.json();
      }
      throw new Error('Erro ao fazer a requisição' , res);
    })
    .then((json)=>{
      console.log({...json, isNull: true});
      setPropriedadesCard(json);
    })
    .catch((e)=>{
      console.log(e);
    })
  },[]);

  // const propriedadesCard = 
  //   {
  //     "coord": {
  //       "lon": -46.6361,
  //       "lat": -23.5475
  //     },
  //     "weather": [
  //       {
  //         "id": 800,
  //         "main": "Clear",
  //         "description": "céu limpo",
  //         "icon": "01d"
  //       }
  //     ],
  //     "base": "stations",
  //     "main": {
  //       "temp": 20.95,
  //       "feels_like": 20.75,
  //       "temp_min": 19.94,
  //       "temp_max": 21.2,
  //       "pressure": 1024,
  //       "humidity": 63
  //     },
  //     "visibility": 10000,
  //     "wind": {
  //       "speed": 3.6,
  //       "deg": 10
  //     },
  //     "clouds": {
  //       "all": 0
  //     },
  //     "dt": 1656767268,
  //     "sys": {
  //       "type": 2,
  //       "id": 2033898,
  //       "country": "BR",
  //       "sunrise": 1656755348,
  //       "sunset": 1656793903
  //     },
  //     "timezone": -10800,
  //     "id": 3448439,
  //     "name": "São Paulo",
  //     "cod": 200   
  //   };
  
  return (
  <>
    <h1>Previsão do tempo</h1>
    <div className="">
      <CardClima propriedades={propriedadesCard}/>
    </div>
  </>
  );
}

export default App;
