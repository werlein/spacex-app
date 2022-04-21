import { createAction } from "@reduxjs/toolkit";
import { rocketSlice } from "./rocket.reducer";

export const rocketActions = {
    ...rocketSlice.actions,
    getRockets: createAction("Rocket/getRockets"),
    getRocket: createAction("Rocket/getRocket", (id: string) => {
        return {
            payload: id
        }
    }),
    getFavouriteRocketIds: createAction("Rocket/getFavouriteRocketIds"),
    toggleFavouriteRocketId: createAction("Rocket/toggleFavouriteRocketId", (id: string) => {
        return {
            payload: id
        }
    })
}