import { useState } from 'react';
import styled from 'styled-components';
import Temperature from '../../Temperature/Temperature';
import WeatherItem from './weatherItem';

const Wrapper = styled.div`
  text-align: center;
`
const TempDisplay = styled(Temperature)` //往一个标准组件Temperature内的span并传入css
  color: #fff;
  font-size: 4.5rem;
` 
const MainWeather = styled.div`
  font-size: 1.5rem;
  color: rgba(255,255,255,0.6);
  letter-spacing: 5px;
  margin-top: 0.25rem;
`
const Feelings = styled.div`
  display: flex;
  flex-direction: row;
  color: rgba(255,255,255,0.6);
  margin-top: 3rem;
`
const VerticalLine = styled.div`
  background-color: rgba(255,255,255,0.6);
  width: 2px;
  margin: 0 2rem;
`
const Weather = (
  { temp666, weather, humidity, wind} ) => {
  return ( 
  <Wrapper>
    <TempDisplay value={temp666} /> 
    {/* ↑↑TempDisplay是个标准组件 */}
    <MainWeather>{weather}</MainWeather>
    <Feelings>
      <WeatherItem title123="Humidity">{humidity} %</WeatherItem>
      <VerticalLine />
      <WeatherItem title123="Wind">{wind} K/m</WeatherItem>
    </Feelings>
  </Wrapper> );
};

export default Weather;


