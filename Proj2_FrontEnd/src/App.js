import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {getWeathers} from './apis/Weathers';
import styled from 'styled-components';

const Wapper = styled.div`
    background-color: red;
    border-radius:50px;
    max-width:95%;
  `

function App() {
  const [weatherList, setweatherList] = useState('')
  useEffect(() => {
    getWeathers().then((res) => {
      setweatherList(res.data);
      // console.log(res.data);
    })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Wapper>
          <p>
            {JSON.stringify(weatherList)}
          </p>
        </Wapper>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;