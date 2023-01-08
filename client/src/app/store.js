import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { userApiSlice } from './api/userApi';
import userReducer from '../features/userSlice'

export const store = configureStore({
    reducer: {
        [userApiSlice.reducerPath]: userApiSlice.reducer,
        user:userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(userApiSlice.middleware),
    devTools: true,
    
})