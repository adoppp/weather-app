import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import { weatherReducer } from "@/store/reducers/weatherSlice";
import { citiesReducer } from "@/store/reducers/citiesSlice";

const persistConfig = {
    key: 'citiesData',
    storage,
};

const persistedCitiesReducer = persistReducer(persistConfig, citiesReducer);

export const store = configureStore({
    reducer: {
        weatherData: weatherReducer,
        citiesData: persistedCitiesReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        })
},
);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;