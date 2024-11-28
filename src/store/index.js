import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { createLogger } from "redux-logger";
import rootReducer from "./reducer";

const loggerMiddleware = createLogger({
  collapsed: true,
  diff: true,
  duration: true,
  timestamp: false,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(loggerMiddleware), // Add logger if needed
});

export const persistor = persistStore(store);
export default store;
