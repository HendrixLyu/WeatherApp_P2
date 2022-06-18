import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components'; 
import BackgroundImg from '../BackgroundImg';
import CityName from './CityName';
import Weather from './weather'

const Layout = styled.div`
    display: flex;
    justify-content:space-between;
    padding: 64px 96px;
`
const getTheWeather = (id) => axios.get('http://api.openweathermap.org/data/2.5/weather',{
    params:{
        id,
        units:'metric',
        appid:'ec434828aa222bb94a6189d03dc2d3a1',
    }
})

const LocalWeather = () => {
    useEffect(() => {
        getTheWeather('2158177').then(({data}) => {
            setCityName(data.name)
            setTemp(data.main.temp)
            setHumidity(data.main.humidity)
            setWeather(data.weather[0].main)
            setWind(data.wind.speed)
        })
    },[])

    const [city, setCityName] = useState()
    const [temp,setTemp] = useState()
    const [weather,setWeather] = useState()
    const [humidity,setHumidity] = useState()
    const [wind,setWind] = useState()

    return (
    <BackgroundImg src='https://i.imgur.com/GhQZhaO.jpg' > 
        <Layout>
            <Weather temp666={temp} weather={weather} humidity={humidity} wind={wind}/>
            <CityName name666={city}/>
        </Layout>
    </BackgroundImg>
    )
}
export default LocalWeather