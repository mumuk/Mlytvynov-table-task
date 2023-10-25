import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import React from "react";
import authReducer from "./authSlice";
import tableReducer from "./tableSlice";

const rootReducer = {
  auth: authReducer,
  table: tableReducer,
};



const store = configureStore({
  reducer: rootReducer
})

type Props = {
  children: React.ReactNode
};




export const StoreProvider:React.FC<Props> = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;