import { Rocket } from "../redux/rocket/rocketSlice"

export const getRockets = async (): Promise<Rocket[]> => {
    const response = await fetch("https://api.spacexdata.com/v4/rockets")
    return await response.json()
}