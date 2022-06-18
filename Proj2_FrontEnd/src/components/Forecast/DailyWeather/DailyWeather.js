import styled from 'styled-components';
import Temperature from '../../Temperature/Temperature';
import WeatherIcon from '../../WeatherIcon';

const Wrapper = styled.div`
  text-align: center;
  /* display: flex;
  flex-direction: column; */

  & ~ & {
    margin-left: 0.5rem;
  }
` 

const StyledIcon = styled(WeatherIcon)`
  width:80px;
  height:80px;
`

const StyledTemp = styled(Temperature)`
  font-size: 1.1rem;
  font-weight: bolder;
`
const DailtWeather = ({
  date,weather,temperature
}) => {
  return ( 
  <Wrapper>
    <div>{date}</div>
    <StyledIcon iconValue={weather.icon} WeatherDescription={weather.description} />
    <div><StyledTemp value={temperature} /></div>
  </Wrapper> 
  );
}

export default DailtWeather;