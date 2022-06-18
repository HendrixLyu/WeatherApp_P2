import styled from 'styled-components';
import Section from '../LocalWeather/OtherCity/Section';

import DailyWeather from './DailyWeather';
import { useState } from 'react';

const LayOut = styled.div`
  margin-top:2rem;
  display: flex;
`

const Forecast = () => { 
  const [forecast, setForecast] = useState([ 
    { id:'01', date: "MON", temp: "21", dateWeather:{icon:'04d', description:'Cloudy'} },
    { id:'02', date: "TUE", temp: "23", dateWeather:{icon:'01d', description:'Clear'} },
    { id:'03', date: "WEN", temp: "20", dateWeather:{icon:'11d', description:'xxx..'} },
    { id:'04', date: "THU", temp: "18", dateWeather:{icon:'10d', description:'xxxx...'} }
  ])
  return ( 
  <Section title123="Everyday Forecast">
    <LayOut>
      {/* console.log({forecast.length}) */}
      {forecast.map(({id,date, temp, dateWeather}) => (
        <DailyWeather key={id} date={date} temperature={temp} weather1={dateWeather} />
      ))}
      {/* <DailyWeather date="MON" temperature="21" weather1={{icon:'04d', description:'Cloudy'}} />
      <DailyWeather date="TUE" temperature="23" weather1={{icon:'01d', description:'Clear'}}/>
      <DailyWeather date="WEN" temperature="20" weather1={{icon:'11d', description:'xxx..'}}/>
      <DailyWeather date="THU" temperature="18" weather1={{icon:'10d', description:'xxxxx...'}}/> */}
    </LayOut>
  </Section> 

  );
}

export default Forecast;