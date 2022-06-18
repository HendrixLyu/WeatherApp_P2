import styled from 'styled-components';
import Temperature from '../../../Temperature/Temperature';
import WeatherIcon from '../../../WeatherIcon';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  & ~ &{
    margin-top: 0.5rem;
  }
`
const CityName = styled.div`
  width: 100px;
  margin-right: 0.5rem;
`

const TempStyle = styled(Temperature)`
  width: 3rem;
`
const StyledIcon = styled(WeatherIcon)`
  height:50px;
  width: 50px;
`
const CityWeather = (
  {
    cityName:my_City,
    temperature,
    weather,
  }
) => {
  return ( 
    <Wrapper>
      <CityName>{my_City}</CityName>
      <TempStyle value={temperature} />
      <StyledIcon iconValue={weather.icon} WeatherDescription={weather.description} />
    </Wrapper>
  );
}

export default CityWeather;