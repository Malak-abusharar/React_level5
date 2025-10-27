import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./productsApi";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    carttt: cartReducer,

    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
setupListeners(store.dispatch);
