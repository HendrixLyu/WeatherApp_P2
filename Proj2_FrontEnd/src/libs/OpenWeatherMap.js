import axios from "axios";

const get666 = ({path, props123}) => axios.get(`http://api.openweathermap.org/data/2.5${path}`,{
  params: { //api请求url默认字段
    ... props123, //自定义参数:id或ids
    units:'metric',
    appid:'ec434828aa222bb94a6189d03dc2d3a1',
  }
});

const OpenWeatherMap = {
  get666,
}

export default OpenWeatherMap;