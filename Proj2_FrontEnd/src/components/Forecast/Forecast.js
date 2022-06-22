import styled from 'styled-components';
import Section from '../LocalWeather/OtherCity/Section';

import DailyWeather from './DailyWeather';
import { useState } from 'react';
import { useEffect } from 'react';
import getDailyForecast from '../../apis/getDailyForecast';

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
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getDailyForecast('2158177').then(({data}) =>{
      setData(data)
      setLoading(false)
    })
  }, [])

  if (loading) {return (<><h1>还是因为异步</h1><h3>///Loading\\\</h3></>)};
  console.log(data)

  
  return ( 
  <Section title123="5-Days Forecast">
    <LayOut>
      {/* console.log({forecast.length}) */}
      {data.list.map(({id, dt, main:{temp:temp}, weather=[weather]}) => (
        <DailyWeather key={id} date={dt} temperature={temp} weather1={weather} />
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