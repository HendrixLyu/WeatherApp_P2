import "./App.css";
import { useEffect, useState } from "react";
// import {getWeathers} from './apis/Weathers';
import styled from "styled-components";
import LocalWeather from "./components/LocalWeather/localWeather";
import BackgroundImg from "./components/BackgroundImg";
import OtherCity from "./components/LocalWeather/OtherCity/OtherCity";
import Forecast from "./components/Forecast";

const Wrapper = styled(BackgroundImg)`
  //基于BackgroundImg的CSS组件
  /* background-image: url(https://wallpaperaccess.com/full/2629319.png);
    background-position: center;
    background-size: cover; */
  //使用BackgroundImg组件
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  background-color: #fff;
  /* width:807px; */
  border-radius: 45px;
  box-shadow: 0 0 20px rgb(0 0 0 / 0.5);
  overflow: hidden;
`;
const Layout = styled.div`
  display: flex;
  padding: 36px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const VerticalLine = styled.div`
  width: 3px;
  background-color: rgba(0, 0, 0, 0.2);
`;

function App() {
  // 四个city的ID -> '2158177', '2147714', '2174003', '2063523'//
  const [switchCity, setSwitchCity] = useState(2147714);

  return (
    <div className="App">
      <Wrapper src="https://wallpaperaccess.com/full/2629319.png">
        {/* <p>
          {JSON.stringify(weatherList)}
        </p> */}
        <Container>
          <LocalWeather myCityID={switchCity} />
          <Layout>
            <OtherCity myCityID={switchCity} setSwitchCity={setSwitchCity} />
            <VerticalLine />
            <Forecast myCityID={switchCity} />
          </Layout>
        </Container>
      </Wrapper>
    </div>
  );
}

export default App;
