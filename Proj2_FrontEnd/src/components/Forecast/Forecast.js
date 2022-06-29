import styled from "styled-components";
import Section from "../LocalWeather/OtherCity/Section";
import { getDay } from "date-fns";
import DailyWeather from "./DailyWeather";
import { useState } from "react";
import { useEffect } from "react";
import getDailyForecast from "../../apis/getDailyForecast";
import toDailyForecast from "../../utils/toDailyForecast";

const LayOut = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
`;
const DATE = ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAT"];

const Forecast = ({ myCityID }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDailyForecast(myCityID).then(({ data }) => {
      setData(data);
      setLoading(false);
    });
  }, [myCityID]);

  if (loading) {
    return <h2>/Loading\</h2>;
  }
  // console.log(data.list)
  // console.log(toDailyForecast(data.list, 5))
  const DailyData = toDailyForecast(data.list, 5); //筛选日期的function
  return (
    <Section title123="5-Day Forecast (00:00)">
      <LayOut>
        {/* dt, main ,weather ...均为api返回的字段 */}
        {DailyData.map(
          (
            { dt, main: { temp: temp111 }, weather: weather666 } //weather是个[{...}, {...}],list套obj结构
          ) => (
            <DailyWeather
              key={dt}
              date={DATE[getDay(new Date(dt * 1000))]}
              temperature={temp111}
              weather123={weather666}
            />
          )
        )}
      </LayOut>
    </Section>
  );
};

export default Forecast;
