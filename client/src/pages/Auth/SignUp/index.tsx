import React, { ChangeEvent, useRef, useState } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import { GridProps, styled, Typography } from '@mui/material'
import SignUpImg from '../../../assets/img/SignUP.jpg'
import MyPhotoImg from '../../../assets/img/MyPhoto.jpg'
import { CHAT_PATH, LOGIN_PATH } from '../../../common/constants/routeConstants'
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined'
import { useSignupUserMutation } from '../../../api/authorizationApi'
import { useNavigate } from 'react-router-dom'

const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
    backgroundImage: `url(${SignUpImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflowX: 'hidden',
}))

const StyledUserImg = styled(Grid)<GridProps>(({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    img: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
    },
}))

export const SignUp: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    //image upload states
    const [image, setImage] = useState<string | null | File>(null)
    const [isUploadImg, setIsUploadImg] = useState<boolean>(false)
    const [imgPreview, setImagePreview] = useState<string | null>(null)

    const navigate = useNavigate()

    const [signUpUser, {}] = useSignupUserMutation()

    const refEl = useRef<HTMLInputElement>(null)

    const onEmailChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmail(e.currentTarget.value)
    }

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(e.currentTarget.value)
    }

    const onNameChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setName(e.currentTarget.value)
    }

    const onSvgDownloadClick = () => {
        refEl && refEl.current && refEl.current.click()
    }

    const validateInm = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0]
        if (file && file.size >= 1048576) {
            return alert('Max file size 1mb')
        }
        if (file) {
            setImage(file)
            setImagePreview(URL.createObjectURL(file))
        }
    }

    const onUploadImgClick = async (image: string) => {
        const data = new FormData()
        if (image) {
            data.append('file', image)
            data.append('upload_preset', 'qcua9fyy')
            try {
                setIsUploadImg(true)
                let res = await fetch('https://api.cloudinary.com/v1_1/dqxgmcrlk/image/upload', {
                    method: 'post',
                    body: data,
                })
                const urlData = await res.json()
                setIsUploadImg(false)
                return urlData.url
            } catch (error) {
                setIsUploadImg(false)
                console.log(error)
            }
        }
    }

    const handleSubmit = async () => {
        if (!image) {
            return alert('Download you photo please')
        }
        const url = await onUploadImgClick(image as string)

        signUpUser({ name, email, password, picture: url })
            .unwrap()
            .then((data) => {
                if (data) {
                    console.log(data)
                    navigate(CHAT_PATH)
                }
            })
            .catch((e) => console.error(e))
    }
    return (
        <Grid item container xs={12} height='94.9vh'>
            <Grid item xs={6} container justifyContent='center' alignItems='center'>
                <Grid width='400px'>
                    <Grid item container mb='10px' xs={12} direction='column' alignItems='center'>
                        <Typography component='h1' variant='h5'>
                            Create account
                        </Typography>
                    </Grid>
                    <StyledUserImg>
                        <img src={imgPreview || MyPhotoImg} />
                        <Grid
                            sx={{ '&:hover': { cursor: 'pointer' } }}
                            position='absolute'
                            top='76px'
                            left='240px'
                        >
                            <input
                                ref={refEl}
                                type='file'
                                hidden
                                accept='image/png,image/jpeg'
                                onChange={validateInm}
                            />
                            <AddAPhotoOutlinedIcon
                                onClick={onSvgDownloadClick}
                                sx={{ color: 'green' }}
                            />
                        </Grid>
                    </StyledUserImg>
                    <TextField
                        onChange={onNameChange}
                        margin='normal'
                        required
                        fullWidth
                        id='name'
                        label='Name'
                        name='name'
                        autoComplete='name'
                        autoFocus
                    />
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
                    <Button
                        onClick={handleSubmit}
                        fullWidth
                        color='info'
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {isUploadImg ? 'Signing you up...' : 'Signup'}
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href={LOGIN_PATH} variant='body2'>
                                Already have an account?
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <StyledGrid item xs={6} />
        </Grid>
    )
}
