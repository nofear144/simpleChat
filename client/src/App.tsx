import React, { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Navigation } from './common/templates/Navigation'
import { RoutesPage } from './common/templates/Routes'
import { CssBaseline } from '@mui/material'

import { AppContext, socket } from './context/appContext/appContext'
import { MemberType, MessageType, PrivateMsg } from './common/types'

function App() {
    const [rooms, setRooms] = useState<string[]>([])
    const [currentRoom, setCurrentRoom] = useState<string>('')
    const [member, setMember] = useState<MemberType[]>([])
    const [message, setMessage] = useState<MessageType[]>([])
    const [privateMemberMsg, setPrivateMemberMsg] = useState<PrivateMsg>()

    return (
        <AppContext.Provider
            value={{
                socket,
                rooms,
                setRooms,
                currentRoom,
                setCurrentRoom,
                member,
                setMember,
                message,
                setMessage,
                privateMemberMsg,
                setPrivateMemberMsg,
            }}
        >
            <BrowserRouter>
                <Navigation />
                <CssBaseline />
                <RoutesPage />
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App
