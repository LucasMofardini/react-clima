import { useEffect, useState } from 'react';
import './App.scss';
import CardClima from './Component/CardClima/CardClima';
import InputClima from './Component/InputClima/InputClima';

function App() {
  const [propriedadesCard, setPropriedadesCard] = useState(null);
  const [inputTempo, setInputTempo] = useState("");

  useEffect(()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?id=3448433&appid=a8f8ddee03250606bf203bacf672de48&lang=pt_br&units=metric')
    .then((res)=>{
      if(res.ok){
        return res.json();
      }
      throw new Error('Erro ao fazer a requisição' , res);
    })
    .then((json)=>{
      setPropriedadesCard(json);
    })
  },[]);

  return (
  <main>
    <div className='container-main'>
      <h1>Previsão do tempo</h1>
      <section className="section-input">
        <InputClima setValue={setInputTempo}/>
        <p>{inputTempo}</p>
      </section>
      <div className='container-cards'>
        <div className='box-card'> {propriedadesCard && <CardClima propriedades={propriedadesCard}/>} </div>
        <div className='box-card'> {propriedadesCard && <CardClima propriedades={propriedadesCard}/>} </div>
      </div>
    </div>
  </main>
  );
}

export default App;
