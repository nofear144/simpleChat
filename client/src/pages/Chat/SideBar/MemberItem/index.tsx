import React from 'react'
import { Avatar, Grid, Typography } from '@mui/material'
import { MemberType } from '../../../../common/types'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../../store/userSelector'

type PropsType = {
    participant: MemberType
    notifications: any
    currentRoom: string
}
export const MemberItem: React.FC<PropsType> = ({ participant, notifications, currentRoom }) => {
    const user = useSelector(selectUser)
    const privateRoomKey = `${user?._id}-${participant?._id}`
    return (
        <>
            <Grid container alignItems='center'>
                <Avatar alt='participant' src={participant?.picture} />
                <Grid item display='flex'>
                    <Typography ml='5px'>{participant?.name}</Typography>
                    <Typography ml='10px'>{participant?._id === user?._id && `(You)`}</Typography>
                </Grid>
                <Grid
                    position='absolute'
                    top='35px'
                    left='15px'
                    width='10px'
                    height='10px'
                    borderRadius='50%'
                    bgcolor={participant?.status === 'online' ? 'green' : 'orange'}
                />
                {!!notifications[privateRoomKey] && currentRoom !== privateRoomKey && (
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
                        {notifications[privateRoomKey]}
                    </Grid>
                )}
            </Grid>
        </>
    )
}
