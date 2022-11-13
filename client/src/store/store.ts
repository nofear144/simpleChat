import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './userSlice'

import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import { appApi } from '../api/appApi'

const reducer = combineReducers({
    user: userReducer,
    [appApi.reducerPath]: appApi.reducer,
})

//persist
const persistConfig = {
    key: 'root',
    storage,
    blacklist: [appApi.reducerPath],
}
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, appApi.middleware],
})

export type RootState = ReturnType<typeof store.getState>
