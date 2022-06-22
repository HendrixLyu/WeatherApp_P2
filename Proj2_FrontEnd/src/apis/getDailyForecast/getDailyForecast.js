import OpenWeatherMap from "../../libs/OpenWeatherMap";

const getDailyForecast = (id) => OpenWeatherMap.get666({
  path:'/forecast',
  props123:{
    id:id,
    // cnt:cnt //预测几天
  }
})
export default getDailyForecast;