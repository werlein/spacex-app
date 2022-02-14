import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import rocketReducer from "./rocket/rocketSlice"

export const store = configureStore({
    reducer: {
        rocket: rocketReducer
    }
})

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;