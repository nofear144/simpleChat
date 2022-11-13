import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { Avatar, Box, BoxProps, Grid, IconButton, Menu, MenuItem, styled } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram'
import { useNavigate } from 'react-router-dom'
import { CHAT_PATH, LOGIN_PATH, ROOT_PATH } from '../../constants/routeConstants'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../store/userSelector'
import { useMenuControl } from '../../hooks/useMenuControl'
import { StyledMenu } from '../../components/StyledMenu'
import { StyledMenuItem } from '../../components/StyledMenu/StyledMenuItem/idnex'
import { useLogoutUserMutation } from '../../../api/authorizationApi'

const StyledTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
    marginRight: '20px',
    '&:hover': {
        cursor: 'pointer',
    },
}))

export const Navigation: React.FC = () => {
    const user = useSelector(selectUser)

    const [logoutUser, { isLoading, error }] = useLogoutUserMutation()

    const navigate = useNavigate()

    const { anchorEl, handleClick, handleClose, isOpen } = useMenuControl()

    const onChatClick = () => {
        navigate(CHAT_PATH)
    }
    const onLoginClick = () => {
        navigate(LOGIN_PATH)
    }
    const onAppIconClick = () => {
        navigate(ROOT_PATH)
    }

    const logoutClick = async (event: React.MouseEvent<HTMLElement>) => {
        await logoutUser(user)
        navigate(ROOT_PATH)
        handleClose(event)
    }

    return (
        <>
            <AppBar
                position='fixed'
                sx={{ zIndex: 1500, backgroundColor: 'bg.main', margin: '0px' }}
            >
                <Toolbar>
                    <Grid width='fit-content' flexGrow={1} onClick={onAppIconClick}>
                        <TelegramIcon
                            sx={{
                                cursor: 'pointer',
                                color: 'sharedPlace.dark',
                                width: '40px',
                                height: '40px',
                            }}
                        />
                    </Grid>
                    {!user?.name && (
                        <StyledTypography color='subtle.dark' onClick={onLoginClick}>
                            Login
                        </StyledTypography>
                    )}

                    <StyledTypography color='subtle.dark' onClick={onChatClick}>
                        Chat
                    </StyledTypography>
                    <IconButton onClick={handleClick} sx={{ p: 0 }}>
                        <Typography mr='4px'>{user?.name}</Typography>
                        <Avatar alt='Remy Sharp' src={user?.picture} />
                    </IconButton>
                    {user && (
                        <StyledMenu anchorEl={anchorEl} open={isOpen} onClose={handleClose}>
                            <StyledMenuItem title='My profile' />
                            <StyledMenuItem title='My  photos' />
                            <StyledMenuItem title='Logout' onClick={logoutClick} />
                        </StyledMenu>
                    )}
                </Toolbar>
            </AppBar>
            <Toolbar variant='dense' />
        </>
    )
}
