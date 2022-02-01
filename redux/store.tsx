import { Action, configureStore, getDefaultMiddleware, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { characterApi } from './slices/characterSlice';

export const store = configureStore({
  reducer: {
    [characterApi.reducerPath] : characterApi.reducer
    },
    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(characterApi.middleware)
});

setupListeners(store.dispatch);

