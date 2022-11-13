import React from 'react'
import { Button, Grid, GridProps, styled, Typography } from '@mui/material'
import HomePageImg from '../../assets/img/HomePage.jpg'
import { selectUser } from '../../store/userSelector'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CHAT_PATH, LOGIN_PATH } from '../../common/constants/routeConstants'

const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
    backgroundImage: `url(${HomePageImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflowX: 'hidden',
}))

export const Home: React.FC = () => {
    const user = useSelector(selectUser)

    const navigate = useNavigate()

    const onGetStartClick = () => {
        navigate(user?.name ? CHAT_PATH : LOGIN_PATH)
    }
    return (
        <Grid container item xs={12} height='94.9vh'>
            <Grid
                item
                xs={6}
                container
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
            >
                <Grid mb='10px'>
                    <Typography variant='header'>Share the world with your friends</Typography>
                </Grid>
                <Grid mb='10px'>
                    <Typography>Chat App lets you connect with the world</Typography>
                </Grid>
                <Button onClick={onGetStartClick} color='success' variant='contained'>
                    <Typography>Get Started</Typography>
                </Button>
            </Grid>
            <StyledGrid item xs={6} />
        </Grid>
    )
}
