import axios from "axios";
import OpenWeatherMap from "../../libs/OpenWeatherMap";

const getOneWeather = id =>
  OpenWeatherMap.get666({
    path: "/weather", //api路径
    props123: {
      // id:id, /可简写/
      id,
    },
  });
// 用OpenWeatherMap()代替 ↓↓↓
// axios.get('http://api.openweathermap.org/data/2.5',{
//         params:{
//             id,
//             units:'metric',
//             appid:'ec434828aa222bb94a6189d03dc2d3a1',
//         }
//     })
// }
export default getOneWeather;
