import { useState } from 'react';
import './app.css';

export default function App(){
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  const [mensagem, setMensagem] = useState('')
  
  function calcularIMC(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(imc < 18.5){
      setMensagem('Você está abaixo do peso! Seu imc: ' + imc.toFixed(2))
    } else if(imc >= 18.5 && imc <= 24.9){
      setMensagem('Peso ideal! Seu imc: ' + imc.toFixed(2))
    } else if(imc >= 25 && imc <= 29.9) {
      setMensagem('Você está um pouco acima do peso! Seu imc: ' + imc.toFixed(2))
    } else if(imc >= 30) {
      setMensagem('Cuidado, sobrepeso! Seu imc: ' + imc.toFixed(2))
    }
  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular o seu IMC</span>

      <div className="area-input">
        <input 
          type="text" 
          placeholder="Peso em (kg) ex: 90"
          value={peso}
          onChange={ (e) => setPeso(e.target.value)}
        />
        <input 
          type="text"
          placeholder="Altura em (cm) ex: 175"
          value={altura}
          onChange={ (e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>
          calcular
        </button>
      </div>

      <h2>{mensagem}</h2>
    </div>
  )
}