import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Rocket {
    active: boolean,
    name: string,
    id: string,
    flickr_images: string[]
}

export interface RocketState {
    rocket: Rocket | undefined,
    rockets: Rocket[],
    favouriteRocketIds: string[]
}

const initialState: RocketState = {
    rocket: undefined,
    rockets: [],
    favouriteRocketIds: []
}

export const rocketSlice = createSlice({
    name: "Rocket",
    initialState,
    reducers: {
        getRocketsSuccess: (state, action: PayloadAction<Rocket[]>) => {
            state.rockets = action.payload
        },
        getRocketSuccess: (state, action: PayloadAction<Rocket>) => {
            state.rocket = action.payload
        },
        getFavouriteRocketIdsSuccess: (state, action: PayloadAction<string[]>) => {
            state.favouriteRocketIds = action.payload
        }
    }
})

export const selectRockets = (state: RootState) => state.rocket.rockets
export const selectRocket = (state: RootState) => state.rocket.rocket
export const selectFavouriteRocketIds = (state: RootState) => state.rocket.favouriteRocketIds

export default rocketSlice.reducer