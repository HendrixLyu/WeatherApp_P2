import styled from 'styled-components'; 
import BackgroundImg from '../BackgroundImg';
import Weather from './weather'

const Layout = styled.div`
    display: flex;
    justify-content:space-between;
    padding: 64px 96px;
`

const LocalWeather = () => {
    return (
    <BackgroundImg src='https://i.imgur.com/GhQZhaO.jpg'> 
        <Layout>
            <Weather />
            <div>2</div>
        </Layout>
    </BackgroundImg>)
}
export default LocalWeather