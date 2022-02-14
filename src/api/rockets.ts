export const getRockets = async () => {
    const response = await fetch("https://api.spacexdata.com/v4/rockets")
    return await response.json()
}