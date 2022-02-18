import { createAction } from "@reduxjs/toolkit";
import { rocketSlice } from "./rocket.reducer";

export const rocketActions = {
    ...rocketSlice.actions,
    getRockets: createAction("Rocket/getRockets")
}