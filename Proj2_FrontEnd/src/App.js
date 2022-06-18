import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {getWeathers} from './apis/Weathers';
import styled from 'styled-components';
import LocalWeather from './components/LocalWeather/localWeather'
import BackgroundImg from './components/BackgroundImg';
import OtherCity from './components/LocalWeather/OtherCity/OtherCity';
import Forecast from './components/Forecast';

const Wrapper = styled(BackgroundImg)` //基于BackgroundImg的CSS组件
    /* background-image: url(https://wallpaperaccess.com/full/2629319.png);
    background-position: center;
    background-size: cover; */
    //使用BackgroundImg组件
    min-height:100vh;
    min-width:100vw; 
    display:flex;
    justify-content:center; 
    align-items:center;
`
const Container = styled.div`
  background-color: #fff;
  /* width:807px; */
  border-radius:32px;
  box-shadow: 0 0 16px rgb(0 0 0 / 0.5);
  overflow:hidden;
`
const Layout = styled.div`
  display:flex;
  padding:36px 0;
`
const VerticalLine = styled.div`
  width:3px;
  background-color:rgba(0,0,0,0.2);
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
      <Wrapper src='https://wallpaperaccess.com/full/2629319.png'>
        {/* <p>
          {JSON.stringify(weatherList)}
        </p> */}
        <Container>
          <LocalWeather />
          <Layout>  
            <OtherCity />
            <VerticalLine />
            <Forecast />
          </Layout>
        </Container>
      </Wrapper>
      
      
    </div>
  );
}

export default App;
