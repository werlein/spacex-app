import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rocketReducer from "./rocket/rocket.reducer"
import rootSaga from "./app/app.sagas";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    rocket: rocketReducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;