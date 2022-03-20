import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function WeatherParams() {

    const getData = () => {
        return axios.get("https://api.open-meteo.com/v1/forecast?latitude=36.88&longitude=30.70&hourly=temperature_2m")
    }

    const [dates, setDates] = useState({});

    useEffect(() => {
        getData().then(result => {
            setDates(result.data.hourly)
        })
    }, [3600000]) // every 1h it renders

    const filter = (value) => {
        if (value < 5) {
            return "Sick 🤒"
        }
        else if (value < 10) {
            return "Depressed 😖"
        }
        else if (value < 15) {
            return "Low 😞"
        }
        else if (value < 30) {
            return "Cheerful 😉"
        }
        else if (value < 35) {
            return "Bored 🥱"
        }
        else {
            return "Angry 😡"
        }
    }

    const getWeather = () => {
        const d = new Date();
        let hours = d.getHours();
        let minutes = d.getMinutes();
        return (
            dates.time ? dates.time.map((t, index) => (
                index == hours ? <ul key={index} id="dataFromAPI">{"Hour: " + hours + ":"
                    + minutes + " " + "\n" + "Temperature: " + dates.temperature_2m[hours]
                    + "°C" + "\n " + "Mood: " + filter(dates.temperature_2m[hours])}</ul> : null
            ))
                : null)
    }

    return (
        <div>
            {getWeather()}
        </div>
    )
}

export default WeatherParams;