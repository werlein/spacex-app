import { Rocket } from "../redux/rocket/rocket.reducer"

export const getRockets = async (): Promise<Rocket[]> => {
    const response = await fetch("https://api.spacexdata.com/v4/rockets")
    return await response.json()
}