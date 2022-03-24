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
    rockets: Rocket[]
}

const initialState: RocketState = {
    rocket: undefined,
    rockets: []
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
        }
    }
})

export const selectRockets = (state: RootState) => state.rocket.rockets;  
export const selectRocket = (state: RootState) => state.rocket.rocket;  

export default rocketSlice.reducer;