import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Rocket {
    name: string,
    id: string,
    flickr_images: string[]
}

export interface RocketState {
    rockets: Rocket[]
}

const initialState: RocketState = {
    rockets: []
}

export const rocketSlice = createSlice({
    name: "Rocket",
    initialState,
    reducers: {
        // getRockets: (state, action: PayloadAction<Rocket[]>) => {
        getRockets: (state) => {
            // state.rockets = action.payload
        },
        getRocketsSuccess: (state, action: PayloadAction<Rocket[]>) => {
            state.rockets = action.payload
        }
    }
})

export const { getRockets, getRocketsSuccess } = rocketSlice.actions;

export const selectRockets = (state: RootState) => state.rocket.rockets;  

export default rocketSlice.reducer;