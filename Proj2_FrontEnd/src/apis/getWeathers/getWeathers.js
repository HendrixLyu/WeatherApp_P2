import axios from "axios"
import OpenWeatherMap from "../../libs/OpenWeatherMap"

const getWeathers = (ids) => OpenWeatherMap.get666({
  path:'/group',
  props123:{
    id:ids.join(),
  }
})

export default getWeathers