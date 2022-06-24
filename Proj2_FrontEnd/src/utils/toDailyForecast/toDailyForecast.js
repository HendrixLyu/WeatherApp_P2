import {eachDayOfInterval, addDays} from 'date-fns'

const toDailyForecast = (DataList666, cnt) => {
  // const today = new Date() //使用date-fns库的内置函数
  // const howManyDays = eachDayOfInterval({
  //   start: today, //起始天
  //   end: addDays(today, cnt) //起始天+cnt天
  // })

  // const dayTimeStamp = howManyDays.map((day)=>{
  //   return day.getTime()
  // })
  // return DataList666.filter(({dt}) => dayTimeStamp.includes(dt))
  //↓↓仅筛选日期↓↓
  return DataList666.filter(({dt_txt}) => dt_txt.endsWith('00:00:00')) //筛选每天的00:00的数据 //dt_txt为api返回字段
}

export default toDailyForecast