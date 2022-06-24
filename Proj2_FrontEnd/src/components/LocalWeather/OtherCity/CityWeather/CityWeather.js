import styled from 'styled-components';
import Temperature from '../../../Temperature/Temperature';
import WeatherIcon from '../../../WeatherIcon';

const WrapperButton = styled.button`
  border: 0;
  padding: 0;
  margin: 0;
  outline: none;
  text-align: left;
  background: transparent;
  font-size: 1rem;
  display: flex;
  cursor: pointer;
  align-items: center;
  border-bottom: 2px solid transparent;
  & ~ &{
    margin-top: 0.5rem;
  };
  &:hover{
    border-bottom: 2px solid rgba(0,0,0,0.2);
  }
`
const CityName = styled.div`
  width: 100px;
  margin-right: 0.5rem;
`

const TempStyle = styled(Temperature)`
  width: 4.5rem;
  margin-right:0.5rem;
`
const StyledIcon = styled(WeatherIcon)`
  height:50px;
  width: 50px;
`
const CityWeather = (
  { 
    cityId,//新的城市ID
    setSwitchCity,
    cityName: SelectedCity,
    temperature,
    weather,
  }
) => {
  return ( 
    // ↓↓给button添加onClick()事件,更改App中switchCity值↓↓
    <WrapperButton onClick={() => setSwitchCity(cityId)}> 
      <CityName>{ SelectedCity }</CityName>
      <TempStyle value={ temperature } />
      <StyledIcon iconValue={weather.icon} WeatherDescription={weather.description} />
    </WrapperButton>
  );
}

export default CityWeather;