import styled from 'styled-components';

const WeatherIcon = ({iconValue, WeatherDescription, className}) => {
  return (
  <img className={className} src={`https://openweathermap.org/img/wn/${iconValue}@2x.png`} alt={WeatherDescription} />
  );
}

export default WeatherIcon;
