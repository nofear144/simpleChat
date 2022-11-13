import { appApi } from './appApi'

export const authorizationApi = appApi.injectEndpoints({
    endpoints: (builder) => ({
        signupUser: builder.mutation<any, any>({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user,
            }),
        }),
        loginUser: builder.mutation<any, any>({
            query: (user) => ({
                url: '/users/login',
                method: 'POST',
                body: user,
            }),
        }),
        logoutUser: builder.mutation<any, any>({
            query: (body) => ({
                url: '/logout',
                method: 'DELETE',
                body,
            }),
        }),
    }),
})

// hooks
export const { useSignupUserMutation, useLogoutUserMutation, useLoginUserMutation } =
    authorizationApi
