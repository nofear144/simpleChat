import LoginImg from '../../../assets/img/LoginImg.jpg'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import { GridProps, styled } from '@mui/material'
import { CHAT_PATH, SIGN_UP_PATH } from '../../../common/constants/routeConstants'
import React, { ChangeEvent, useContext, useState } from 'react'
import { useLoginUserMutation } from '../../../api/authorizationApi'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../context/appContext/appContext'

const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
    backgroundImage: `url(${LoginImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflowX: 'hidden',
}))

export const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const { socket } = useContext(AppContext)

    const navigate = useNavigate()

    const [loginUser] = useLoginUserMutation()

    const onEmailChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onPasswordChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(e.currentTarget.value)
    }
    const onLoginClick = () => {
        loginUser({ email, password })
            .unwrap()
            .then(() => {
                //socket connect
                socket.emit('new-user')
                navigate(CHAT_PATH)
            })
            .catch((e) => console.error(e))
    }
    return (
        <Grid item container xs={12} height='94.9vh'>
            <StyledGrid item xs={6} />
            <Grid item xs={6} container justifyContent='center' alignItems='center'>
                <Grid width='400px'>
                    <TextField
                        onChange={onEmailChange}
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='Email Address'
                        name='email'
                        autoComplete='email'
                        autoFocus
                    />
                    <TextField
                        onChange={onPasswordChange}
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                    />
                    <FormControlLabel
                        control={<Checkbox value='remember' color='primary' />}
                        label='Remember me'
                    />
                    <Button
                        onClick={onLoginClick}
                        fullWidth
                        color='info'
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href='#' variant='body2'>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href={SIGN_UP_PATH} variant='body2'>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
