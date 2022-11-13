import { Route, Routes } from 'react-router-dom'
import { CHAT_PATH, LOGIN_PATH, ROOT_PATH, SIGN_UP_PATH } from '../../constants/routeConstants'
import { Home } from '../../../pages/Home'
import { Login } from '../../../pages/Auth/Login'
import { SignUp } from '../../../pages/Auth/SignUp'
import { Chat } from '../../../pages/Chat'
import React from 'react'
import { Box, BoxProps, styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../store/userSelector'

const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
    width: '100%',
    flexGrow: 1,
}))
export const RoutesPage: React.FC = () => {
    const user = useSelector(selectUser)
    return (
        <StyledBox>
            <Routes>
                <Route path={ROOT_PATH} element={<Home />} />
                {!user?.name && (
                    <>
                        <Route path={LOGIN_PATH} element={<Login />} />
                        <Route path={SIGN_UP_PATH} element={<SignUp />} />
                    </>
                )}
                <Route path={CHAT_PATH} element={<Chat />} />
            </Routes>
        </StyledBox>
    )
}
