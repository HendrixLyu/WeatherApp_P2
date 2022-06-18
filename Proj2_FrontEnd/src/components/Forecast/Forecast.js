import styled from 'styled-components';
import Section from '../LocalWeather/OtherCity/Section';
import DailyWeather from './DailyWeather';

const LayOut = styled.div`
  margin-top:2rem;
  display: flex;
`

const Forecast = () => {  
  return ( 
  <Section title123="Everyday Forecast">
    <LayOut>
      <DailyWeather date="MON" temperature="21" weather={{icon:'04d', description:'Cloudy'}} />
      <DailyWeather date="TUE" temperature="23" weather={{icon:'01d', description:'Clear'}}/>
      <DailyWeather date="WEN" temperature="20" weather={{icon:'11d', description:'xxx..'}}/>
      <DailyWeather date="THU" temperature="18" weather={{icon:'10d', description:'xxxxx...'}}/>
    </LayOut>
  </Section> 

  );
}

export default Forecast;