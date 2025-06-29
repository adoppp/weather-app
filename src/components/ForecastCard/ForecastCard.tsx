import type { FC } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

import styles from "@/components/ForecastCard/ForecastCard.module.scss";

import { CardContainer } from "@/components/CardContainer/CardContainer";
import { forecastSelector } from "@/store/selectors/weatherSelector";

const cn = classNames.bind(styles);

export const ForecastCard: FC = () => {
    const forecastData = useSelector(forecastSelector);
    console.log("🚀 ~ currentWeatherData:", forecastData)

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDateStr = tomorrow.toISOString().split("T")[0];

    const tomorrowForecast = forecastData?.list.filter(item =>
        item.dt_txt.startsWith(tomorrowDateStr)
    );

    const chartData = tomorrowForecast?.map(item => ({
        time: item.dt_txt.split(' ')[1].slice(0, 5),
        temp: Math.trunc(item.main.temp)
    })) || [];
    
    return (
        <CardContainer>
            <div className={cn("container")}>
                <h2>Forecast</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis unit="°C" />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="temp"
                            stroke="#8884d8"
                            label={{ position: 'top' }}
                        />
                    </LineChart>
            </ResponsiveContainer>
            </div>
        </CardContainer>
    );
};