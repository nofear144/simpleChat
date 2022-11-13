import { ListItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import * as React from 'react'

type PropsTypeMenuItem = {
    title: string
    color?: string
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
    icon?: JSX.Element
}

export const StyledMenuItem: React.FC<PropsTypeMenuItem> = ({
    title,
    color = 'primary',
    onClick,
    icon,
}) => {
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        if (!!onClick) onClick(event)
    }
    return (
        <>
            <ListItem
                button
                sx={{
                    height: 36,
                }}
                onClick={handleClick}
            >
                {!!icon && (
                    <Box mt='2px' pr='10px'>
                        {icon}
                    </Box>
                )}
                <Typography variant='body1' color={color}>
                    {title}
                </Typography>
            </ListItem>
        </>
    )
}