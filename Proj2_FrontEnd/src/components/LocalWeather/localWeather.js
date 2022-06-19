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
    
    @media screen and (max-width:768px) {
        flex-direction:column;
        justify-content:space-around;
    }
`
const getTheWeather = (id) => axios.get('http://api.openweathermap.org/data/2.5/weather',{
    params:{
        id,
        units:'metric',
        appid:'ec434828aa222bb94a6189d03dc2d3a1', //should not be made public
    }
})

const LocalWeather = () => {
    const [data1, setData] = useState()
    // const [city, setCityName] = useState()
    // const [temp,setTemp] = useState()
    // const [weather,setWeather] = useState()
    // const [humidity,setHumidity] = useState()
    // const [wind,setWind] = useState()
    const [loading, setLoadding] = useState(true)
    
    // Uncaught TypeError: Cannot read properties of undefined (reading 'main')错误，因为data666是异步操作
    useEffect(() => {
        getTheWeather('2158177').then(({data: myData}) => {
            setData(myData)
            setLoadding(false)
            // setCityName(data.name)
            // setTemp(data.main.temp)
            // setHumidity(data.main.humidity)
            // setWeather(data.weather[0].main)
            // setWind(data.wind.speed)
        })
    },[])

    if (loading) {
        return (
        <div> 
            <h2>...Now Loading...</h2>
            <h2>...fetching Data...</h2>
        </div>)
    }

    return (
    <BackgroundImg src='https://i.imgur.com/GhQZhaO.jpg' > 
        <Layout>
            <Weather 
            temp666={data1.main.temp} 
            weather={data1.main.weather} 
            humidity={data1.main.humidity} 
            wind={data1.wind.speed}/>
            <CityName name666={data1.name}/>
        </Layout>
    </BackgroundImg>
    )
}
export default LocalWeather