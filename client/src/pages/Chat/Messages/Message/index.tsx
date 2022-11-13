import React from 'react'
import { Avatar, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../../store/userSelector'

type PropsType = {
    senderId: string
    senderPhoto: string
    senderName: string
    time: string
    content: string
    idxMsg: number
}
export const Message: React.FC<PropsType> = ({
    senderId,
    senderPhoto,
    senderName,
    time,
    content,
    idxMsg,
}) => {
    const user = useSelector(selectUser)
    const isYourMessage = user?._id === senderId
    return (
        <Grid
            key={idxMsg}
            container
            alignItems='center'
            justifyContent={isYourMessage ? 'flex-end' : 'flex-start'}
            mb='30px'
        >
            <Grid flexDirection={isYourMessage ? 'row-reverse' : 'row'} display='flex' width='65%'>
                {isYourMessage ? <></> : <Avatar src={senderPhoto} />}
                <Grid ml='10px' width='100%'>
                    <Grid mb='5px' textAlign={isYourMessage ? 'end' : 'start'}>
                        <Typography>{isYourMessage ? 'You' : senderName}</Typography>
                    </Grid>
                    <Grid
                        p='20px'
                        bgcolor={isYourMessage ? '#515151' : 'white'}
                        borderRadius={isYourMessage ? `6px 0px 6px 6px` : `0px 6px 6px 6px`}
                        width='100%'
                        color={isYourMessage ? 'white' : 'black'}
                    >
                        <Typography component='div' sx={{ flexGrow: '1 ' }}>
                            {content}
                        </Typography>
                        <Typography color='subtle.dark' component='div' textAlign='end'>
                            {time}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
