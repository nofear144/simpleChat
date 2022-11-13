import React, { useContext, useEffect, useState } from 'react'
import {
    Avatar,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../store/userSelector'
import { AppContext } from '../../../context/appContext/appContext'
import { MemberType, PrivateMsg } from '../../../common/types'
import { RoomItem } from './RoomItem'
import { MemberItem } from './MemberItem'

export const SideBar: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [notifications, setNotifications] = useState<Record<string, number>>({})

    const user = useSelector(selectUser)
    const {
        socket,
        setMember,
        member,
        setCurrentRoom,
        setRooms,
        privateMemberMsg,
        rooms,
        setPrivateMemberMsg,
        currentRoom,
    } = useContext(AppContext)

    const joinRoom = (room: string, isPublic = true) => {
        if (!user?.name) {
            return alert('Please login')
        }
        socket.emit('join-room', room, currentRoom)
        setCurrentRoom(room)

        if (isPublic) {
            setPrivateMemberMsg(null)
        }
        setNotifications({ ...notifications, [room]: 0 })
    }

    socket.off('notifications').on('notifications', (room: string) => {
        if (currentRoom != room) {
            let newMessage = notifications[room]
                ? notifications[room] + 1
                : (notifications[room] = 1)
            setNotifications({ ...notifications, [room]: newMessage })
        }
    })

    useEffect(() => {
        if (!!user?.name) {
            setCurrentRoom('general')
            getRooms()
            socket.emit('join-room', 'general')
            socket.emit('new-user')
        }
    }, [])

    socket.off('new-user').on('new-user', (payload: MemberType[]) => {
        setMember(payload)
    })

    const getRooms = () => {
        fetch('http://localhost:5001/rooms')
            .then((res) => res.json())
            .then((data) => setRooms(data))
            .catch((e) => console.error(e))
    }

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number
    ) => {
        setSelectedIndex(index)
    }

    const orderIds = (id1: string, id2: string) => {
        if (id1 > id2) {
            return id1 + '-' + id2
        }
        return id2 + '-' + id1
    }

    const handlePrivateMemberMsg = (participant: PrivateMsg) => {
        setPrivateMemberMsg(participant)
        const roomId = orderIds(user?._id, participant?._id)
        joinRoom(roomId, false)
    }

    if (!user?.name) {
        return <></>
    }
    return (
        <Grid boxShadow={1} bgcolor='white' borderRadius='6px' mt='15px' ml='20px' height='100%'>
            <Grid p='35px 20px 20px'>
                <Typography variant='header'>Conversation</Typography>
            </Grid>
            <Divider />
            <Grid>
                <List>
                    {rooms.map((room: string, index: number) => {
                        return (
                            <ListItem
                                onClick={() => {
                                    joinRoom(room)
                                }}
                                disablePadding
                                key={index}
                            >
                                <ListItemButton
                                    selected={selectedIndex === index}
                                    onClick={(event) => handleListItemClick(event, index)}
                                >
                                    <RoomItem
                                        room={room}
                                        currentRoom={currentRoom}
                                        notifications={notifications}
                                    />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </Grid>
            <Divider />
            <Grid ml='20px' mt='20px'>
                <Typography variant='header'>Members</Typography>
            </Grid>
            <Grid>
                <List>
                    {member?.map((participant: MemberType, index: number) => {
                        return (
                            <ListItem
                                sx={{ padding: ' 0px' }}
                                key={index}
                                onClick={() => {
                                    handlePrivateMemberMsg(participant)
                                }}
                            >
                                <ListItemButton
                                    disabled={participant?._id === user?._id}
                                    selected={privateMemberMsg?._id === participant?._id}
                                >
                                    <MemberItem
                                        notifications={notifications}
                                        currentRoom={currentRoom}
                                        participant={participant}
                                    />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </Grid>
        </Grid>
    )
}
