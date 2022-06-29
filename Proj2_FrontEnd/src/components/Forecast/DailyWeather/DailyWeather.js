import styled from "styled-components";
import Temperature from "../../Temperature/Temperature";
import WeatherIcon from "../../WeatherIcon";

const Wrapper = styled.div`
  text-align: center;
  /* display: flex;
  flex-direction: column; */

  & ~ & {
    margin-left: 0.5rem;
  }
`;

const StyledIcon = styled(WeatherIcon)`
  //将StyledIcon作为className传入WeatherIcon组件
  width: 80px;
  height: 80px;
`;

const StyledTemp = styled(Temperature)`
  //将StyledTemp作为className传入Temperature组件
  font-size: 1.1rem;
  font-weight: bolder;
`;
const DailyWeather = ({ date, weather123, temperature }) => {
  return (
    <Wrapper>
      <div>{date}</div>
      {/* ↓↓weather[0]即为api返回的字段weather的第0项↓↓ */}
      <StyledIcon
        iconValue={weather123[0].icon}
        WeatherDescription={weather123[0].description}
      />
      <div>
        <StyledTemp value={temperature} />
      </div>
    </Wrapper>
  );
};

export default DailyWeather;
