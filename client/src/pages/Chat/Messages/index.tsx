import React, { useContext, useEffect, useRef } from 'react'
import { Avatar, Button, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../store/userSelector'
import { AppContext } from '../../../context/appContext/appContext'
import { MessageType } from '../../../common/types'
import { SendIcon } from '../../../common/components/Icons/SendIcon'
import { Message } from './Message'

export const Messages: React.FC = () => {
    const [currentMessage, setMessageCurrent] = React.useState('')
    const { socket, currentRoom, message, setMessage, privateMemberMsg } = useContext(AppContext)
    const user = useSelector(selectUser)

    const messageRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messageRef?.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [message])

    const getFormattedDate = () => {
        const date = new Date()
        const year = date.getFullYear()
        let month = (1 + date.getMonth()).toString()

        month = month.length > 1 ? month : '0' + month
        let day = date.getDate().toString()

        day = day.length > 1 ? day : '0' + day
        return month + '/' + day + '/' + year
    }

    const onMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessageCurrent(event.target.value)
    }

    const handleSubmit = () => {
        if (!currentMessage) {
            return
        }
        const today = new Date()
        const minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
        const time = today.getHours() + ':' + minutes
        const roomId = currentRoom
        socket.emit('message-room', roomId, currentMessage, user, time, todayDate)
        setMessageCurrent('')
    }

    const onPressKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.keyCode === 13) {
            e.preventDefault()
            handleSubmit()
        }
    }

    const todayDate = getFormattedDate()

    socket.off('room-messages').on('room-messages', (roomMessages: MessageType) => {
        setMessage(roomMessages)
    })

    return (
        <Grid
            boxShadow={1}
            container
            item
            flexDirection='column'
            xs={11.5}
            mt='15px'
            ml='20px'
            height='100%'
            borderRadius='6px'
        >
            {user?.name && !privateMemberMsg?._id && (
                <Grid
                    container
                    justifyContent='center'
                    alignItems='center'
                    borderRadius='6px 6px 0px 0px '
                    p='20px'
                    bgcolor='white'
                    boxShadow={1}
                    zIndex={5}
                    height='80px'
                >
                    <Typography variant='subHeader1'>{`You are in ${currentRoom} conversation`}</Typography>
                </Grid>
            )}
            {user?.name && privateMemberMsg?._id && (
                <Grid
                    container
                    borderRadius='6px 6px 0px 0px '
                    p='20px'
                    height='80px'
                    bgcolor='white'
                    boxShadow={1}
                    zIndex={5}
                >
                    <Grid container alignItems='center'>
                        <Typography variant='subHeader1'>{privateMemberMsg?.name}</Typography>
                        <Grid
                            width='10px'
                            height='10px'
                            borderRadius='50%'
                            ml='10px'
                            bgcolor={privateMemberMsg?.status === 'online' ? 'green' : 'orange'}
                        />
                    </Grid>
                    <Typography color='subtle.dark'>{privateMemberMsg?.status}</Typography>
                </Grid>
            )}
            <Grid
                flex={1}
                width='100%'
                minHeight='75vh'
                maxHeight='75vh'
                sx={{ overflowX: 'hidden' }}
            >
                <>
                    {!user?.name && (
                        <Grid height='100%' container justifyContent='center' alignItems='center'>
                            Pls login
                        </Grid>
                    )}
                    {!!user?.name &&
                        message.map(({ _id: date, messagesByDate }: MessageType, idx: number) => {
                            return (
                                <Grid p='20px' key={idx}>
                                    <Grid
                                        container
                                        mt='20px'
                                        mb='20px'
                                        justifyContent='center'
                                        alignItems='center'
                                    >
                                        <Typography color='subtle.dark'>{date}</Typography>
                                    </Grid>
                                    {messagesByDate?.map(
                                        ({ content, time, from: sender }, idxMsg: number) => {
                                            return (
                                                <Message
                                                    idxMsg={idxMsg}
                                                    senderId={sender._id}
                                                    senderPhoto={sender.picture}
                                                    senderName={sender.name}
                                                    time={time}
                                                    content={content}
                                                />
                                            )
                                        }
                                    )}
                                </Grid>
                            )
                        })}

                    <div ref={messageRef}></div>
                </>
            </Grid>
            <Grid
                container
                justifyContent='center'
                alignItems='center'
                width='100%'
                columnGap='10px'
                flexWrap='nowrap'
            >
                <Grid item xs={11.2}>
                    <TextField
                        sx={{ backgroundColor: 'white' }}
                        disabled={!user?.name}
                        placeholder='Write your message...'
                        fullWidth
                        multiline
                        maxRows={2}
                        value={currentMessage}
                        onChange={onMessageChange}
                        onKeyDown={onPressKeyDown}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <Grid>
                                        <Button onClick={handleSubmit} disabled={!user?.name}>
                                            <SendIcon />
                                        </Button>
                                    </Grid>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}
