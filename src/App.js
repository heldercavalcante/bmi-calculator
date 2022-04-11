//import logo from './logo.svg';
//import './App.css';
import './app.css';
import { useState } from 'react'

export default function App() {
  const [ weight, setWeight] = useState('');
  const [ height, setHeight ] = useState('');
  const [message, setMessage] = useState('');

  function BMIcalculate() {
    const heig = height / 100;
    const bmi = weight / ( heig * heig);
    
    if(bmi < 18.6) {
      setMessage("You are underweight! Your BMI is: " + bmi.toFixed(2))
    } else if (bmi >= 18.6 && bmi < 24.9) {
      setMessage("You are at the ideal weight! Your BMI is: " + bmi.toFixed(2))
    } else if (bmi >=24.9 && bmi <34.9) {
      setMessage("You are slightly overweight! Your BMI is: " + bmi.toFixed(2))
    } else if (bmi >34.9) {
      setMessage("Caution... Obesity! Seu IMC: " + bmi.toFixed(2))
    }
  }

  return (
    <div className="app">
      <h1>BMI calculator</h1>
      <span>Let's calculate your BMI</span>
      <div className="area-input">
        <input type="text" placeholder='Weight in (kg) ex:80' value={weight} onChange={ (e) => setWeight(e.target.value)}/>
        <input type="text" placeholder='height in (cm) ex:170' value={height} onChange={ (e) => setHeight(e.target.value)}/>  
        <button onClick={BMIcalculate}>
          Calculate
        </button>
      </div>
      <h2>{message}</h2>
    </div>
  )
}

