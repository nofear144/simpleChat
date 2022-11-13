import { createSlice } from '@reduxjs/toolkit'
import { authorizationApi } from '../api/authorizationApi'

const initialState: any = {} || null

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //save user after signup
        builder.addMatcher(
            authorizationApi.endpoints.signupUser.matchFulfilled,
            (state, { payload }) => payload
        )
        //save user after login
        builder.addMatcher(
            authorizationApi.endpoints.loginUser.matchFulfilled,
            (state, { payload }) => payload
        )
        //logout:destroy session
        builder.addMatcher(authorizationApi.endpoints.logoutUser.matchFulfilled, () => null)
    },
})

// Action creators

//Reducer
export const userReducer = userSlice.reducer
