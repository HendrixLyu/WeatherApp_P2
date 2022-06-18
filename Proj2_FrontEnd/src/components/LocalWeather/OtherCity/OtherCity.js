import styled from 'styled-components';
import CityWeather from './CityWeather/CityWeather';
import Section from './Section';
import { useState } from 'react';


const OtherCity = () => {
  const[weathers, setWeathers] = useState([
    {id:'01', myCity:"Melbourne", temp:'12', weather: {icon:'04d', description:'Cloudy'}},
    {id:'02', myCity:"Brisbane", temp:'21', weather: {icon:'01n', description:'clear'}},
    {id:'03', myCity:"Sydney", temp:'17', weather: {icon:'11d', description:'ThunderStorm'}}
  ])
  return ( 
    <Section title123='Other City'>
      {weathers.map(({id, myCity, temp, weather}) =>
        <CityWeather key={id} cityName={myCity} temperature={temp} weather={weather} />
      )}
      {/* <CityWeather cityName="Melbourne" temperature='12' weather={{icon:'04d', description:'Cloudy'}}/>
      <CityWeather cityName="Brisbane" temperature='21' weather={{icon:'01n', description:'clear'}}/>
      <CityWeather cityName="Sydney" temperature='17' weather={{icon:'11d', description:'ThunderStorm'}}/> */}
    </Section>
  );
}

export default OtherCity;