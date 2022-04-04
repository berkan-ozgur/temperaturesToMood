import React from "react";
import { useState, useEffect } from "react";
import DegreeServices from "./services/degreeServices";


function FetchingData() {

    const [dates, setDates] = useState<any>([]);

    let degreeServices = new DegreeServices();

    useEffect(() => {
        degreeServices.getData().then(result => {
            setDates(result.data.hourly)
        })
    }, [degreeServices])

    function getWeather() {
        const d = new Date();
        let hours = d.getHours();
        let minutes: string | number = d.getMinutes();
        minutes = minutes < 10 ? "0" + minutes : minutes;
        return (
            dates.time ? dates.time.map((_t: string | number, index: React.Key | null | undefined) => (
                index === hours ? <p key={index} id="dataFromAPI">{"Hour: " + hours + ":"
                    + minutes + "\nTemperature: " + dates.temperature_2m[hours]
                    + "°C\nMood: " + degreeServices.filter(dates.temperature_2m[hours])}</p> : null
            ))

                : null);
    }

    return (
        <div>{getWeather()}</div>
    )
}


export default FetchingData;