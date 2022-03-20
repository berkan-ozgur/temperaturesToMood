import React from "react";
import { render } from "react-dom";
import WeatherParams from "./WeatherParams";


const App = () => {
    return (
        <div>
            <WeatherParams />
        </div>
    )
}

render(<App />, document.getElementById("root"));