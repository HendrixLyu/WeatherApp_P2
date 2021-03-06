// 本组件自身不设置任何css样式
const WeatherIcon = ({ iconValue, WeatherDescription, className }) => {
  return (
    // ↓↓className用来接收不同组件自带的css参数↓↓
    <img
      className={className}
      src={`https://openweathermap.org/img/wn/${iconValue}@2x.png`}
      alt={WeatherDescription}
    />
  );
};

export default WeatherIcon;
