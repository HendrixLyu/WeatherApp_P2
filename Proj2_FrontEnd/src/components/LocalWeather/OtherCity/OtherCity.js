import styled from "styled-components";
import CityWeather from "./CityWeather/CityWeather";
import Section from "./Section";
import { useState } from "react";
import { useEffect } from "react";
import getWeathers from "../../../apis/getWeathers";

const OtherCity = ({ myCityID, setSwitchCity }) => {
  // const[weathers, setWeathers] = useState([
  //   {id:'01', myCity:"Melbourne", temp:'12', weather: {icon:'04d', description:'Cloudy'}},
  //   {id:'02', myCity:"Brisbane", temp:'21', weather: {icon:'01n', description:'clear'}},
  //   {id:'03', myCity:"Sydney", temp:'17', weather: {icon:'11d', description:'ThunderStorm'}}
  // ])
  const CityList = [2158177, 2147714, 2174003, 2063523];
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true); //loading动画

  useEffect(() => {
    console.log(myCityID);
    getWeathers(CityList.filter(item => item !== myCityID)).then(res666 => {
      //筛选出除当前城市以外的城市List并传给getWeathers(ids) //返回一个List
      setData(res666.data); 
      setLoading(false);
    });
  }, [myCityID]); //myCityID改变就re-render

  // if (loading) {return (<><h1>也是异步</h1><h3>Loading.</h3></>)};
  // console.log(data)
  return (
    <>
      {!loading && (
        <Section title123="Other City">
          {/* id, name ,main ,weather ...均为api返回的字段 */}
          {data.list.map(
            (
              { id, name: myCity, main: { temp: mytemp }, weather: [weather] } //[weather]是将api返回的weather结构,也有其他写法 见Forecast组件//
            ) => (
              <CityWeather
                key={id}
                cityId={id}
                setSwitchCity={setSwitchCity}
                cityName={myCity}
                temperature={mytemp}
                weather={weather}
              />
            )
          )}
          {/* ↑↑让cityId=新的城市↑↑ */}
          {/* <CityWeather key='xxx' cityName="Melbourne" temperature='12' weather={{icon:'04d', description:'Cloudy'}}/>
      <CityWeather cityName="Brisbane" temperature='21' weather={{icon:'01n', description:'clear'}}/>
      <CityWeather cityName="Sydney" temperature='17' weather={{icon:'11d', description:'ThunderStorm'}}/> */}
        </Section>
      )}
    </>
  );
};

export default OtherCity;
