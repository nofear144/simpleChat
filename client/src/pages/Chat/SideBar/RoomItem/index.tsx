import React from 'react'
import { Grid, ListItemText } from '@mui/material'

type PropsType = {
    room: string
    notifications: any
    currentRoom: string
}
export const RoomItem: React.FC<PropsType> = ({ room, notifications, currentRoom }) => {
    return (
        <>
            <ListItemText
                sx={{
                    display: 'flex',
                    flex: 'none',
                    paddingLeft: '10px',
                    marginRight: '10px',
                }}
                primary={room}
            />
            {!!notifications[room] && currentRoom !== room && (
                <Grid
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    width='20px'
                    height='20px'
                    borderRadius='50%'
                    bgcolor='grey'
                    color='white'
                >
                    {notifications[room]}
                </Grid>
            )}
        </>
    )
}
