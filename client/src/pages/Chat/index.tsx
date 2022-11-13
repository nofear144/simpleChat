import { Grid } from '@mui/material'
import React from 'react'
import { SideBar } from './SideBar'
import { Messages } from './Messages'

export const Chat: React.FC = () => {
    return (
        <Grid container mt='10px'>
            <Grid item xs={4}>
                <SideBar />
            </Grid>
            <Grid item xs={8}>
                <Messages />
            </Grid>
        </Grid>
    )
}
