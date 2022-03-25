import customAxios from "../utilities/AxiosInterceptor";

export default class degreeServices {
    getData = () => {
        return customAxios.get("api.open-meteo.com/v1/forecast?latitude=36.88&longitude=30.70&hourly=temperature_2m")
    }

    filter = (value: number) => {
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
}