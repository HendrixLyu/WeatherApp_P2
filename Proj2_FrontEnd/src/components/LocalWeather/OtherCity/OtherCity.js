import styled from 'styled-components';
import CityWeather from './CityWeather/CityWeather';
import Section from './Section';


const OtherCity = () => {
  return ( 
    <Section title123='Other City'>
      <CityWeather cityName="Melbourne" temperature='12' weather={{icon:'04d', description:'Cloudy'}}/>
      <CityWeather cityName="Brisbane" temperature='21' weather={{icon:'01n', description:'clear'}}/>
      <CityWeather cityName="Sydney" temperature='17' weather={{icon:'11d', description:'ThunderStorm'}}/>
    </Section>
  );
}

export default OtherCity;