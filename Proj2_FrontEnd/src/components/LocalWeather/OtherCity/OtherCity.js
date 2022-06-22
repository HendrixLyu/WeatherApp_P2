import styled from 'styled-components';
import CityWeather from './CityWeather/CityWeather';
import Section from './Section';
import { useState } from 'react';
import { useEffect } from 'react';
import getWeathers from '../../../apis/getWeathers';

const OtherCity = () => {
  // const[weathers, setWeathers] = useState([
  //   {id:'01', myCity:"Melbourne", temp:'12', weather: {icon:'04d', description:'Cloudy'}},
  //   {id:'02', myCity:"Brisbane", temp:'21', weather: {icon:'01n', description:'clear'}},
  //   {id:'03', myCity:"Sydney", temp:'17', weather: {icon:'11d', description:'ThunderStorm'}}
  // ])
  const [data, setData] = useState()
  const [loading, steLoading] = useState(true) //loading动画

  useEffect(() => {
    getWeathers(['2158177', '2147714', '2174003', '2063523']).then((res666) => {
      setData(res666.data)
      steLoading(false)
    })
  }, []) //只re-render一次

  if (loading) {return (<><h1>也因为异步</h1><h3>Loading.</h3></>)};
  console.log(data)
  return ( 
    <Section title123='Other City'>
      {data.list.map(({id, name:myCity, main:{temp:mytemp}, weather:[weather]}) =>
        <CityWeather key={id} cityName={myCity} temperature={mytemp} weather={weather} />
      )}
      {/* <CityWeather key='xxx' cityName="Melbourne" temperature='12' weather={{icon:'04d', description:'Cloudy'}}/>
      <CityWeather cityName="Brisbane" temperature='21' weather={{icon:'01n', description:'clear'}}/>
      <CityWeather cityName="Sydney" temperature='17' weather={{icon:'11d', description:'ThunderStorm'}}/> */}
    </Section>
  );
}

export default OtherCity;