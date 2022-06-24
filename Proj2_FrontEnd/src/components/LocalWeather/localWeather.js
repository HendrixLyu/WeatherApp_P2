import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components'; 
import getOneWeather from '../../apis/getOneWeather';
import BackgroundImg from '../BackgroundImg';
import CityName from './CityName';
import Weather from './weather'

const Layout = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 64px 96px;
    
    @media screen and (max-width:768px) {
        flex-direction: column;
        justify-content: space-around;
    }
`
// const getTheWeather = (id) => axios.get('http://api.openweathermap.org/data/2.5/weather',{
//     params:{
//         id,
//         units:'metric',
//         appid:'ec434828aa222bb94a6189d03dc2d3a1',
//     }
// }) //作为function: getOneWeather()提出

const LocalWeather = ({myCityID}) => {
    const [data1, setData] = useState() //每一个state发生变化,就重新渲染一次
    // const [city, setCityName] = useState('@ Didn't get @')
    // const [temp,setTemp] = useState('~~未获取~~')
    // const [weather,setWeather] = useState('...Fetching...')
    // const [humidity,setHumidity] = useState('#加载中*#')
    // const [wind,setWind] = useState('~正在查!')
    const [loading, setLoading] = useState(true) //初始值'true'
    // Uncaught TypeError: Cannot read properties of undefined (reading 'main')异步常见错误，因为data1是异步操作
    useEffect(() => { //副效应,每渲染一次就执行一次 //只有在渲染LocalWeather后执行
        getOneWeather(myCityID).then((resss) => { //也可以直接解构response:{data}
            setData(resss.data) //服务器返回的res数据都叫data
            setLoading(false)
            // setCityName(resss.data.name)
            // setTemp(resss.data.main.temp)
            // setHumidity(resss.data.main.humidity)
            // setWeather(resss.data.weather[0].main)
            // setWind(resss.data.wind.speed)
        })
    }, [myCityID]) // [ ]依赖没变化一次，就重新渲染一次。依赖为空:只渲染一次

    if (loading) {return (<h1>...async req||Now Loading...</h1>)}; //异步请求时过场画面
    // console.log('>>>',data1)
    return ( 
        <BackgroundImg src='https://i.imgur.com/GhQZhaO.jpg' > 
            <Layout>
                    {/* wind, main ,weather[0] ...均为api返回的字段 */}
                <Weather 
                temp666={data1.main.temp} //格式为:api返回数据格式
                weather={data1.weather[0].main} 
                humidity={data1.main.humidity} 
                wind={data1.wind.speed} />
                <CityName name666={data1.name} />
                {/* <Weather 
                temp666={temp} 
                weather={weather} 
                humidity={humidity} 
                wind={wind}/>
                <CityName name666={city} /> */}        
            </Layout>
        </BackgroundImg>
    )
}
export default LocalWeather