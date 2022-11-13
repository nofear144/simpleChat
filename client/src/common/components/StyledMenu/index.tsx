import Menu, { MenuProps } from '@mui/material/Menu'
import { styled } from '@mui/material/styles'
import * as React from 'react'

type PropsType = MenuProps & {
    direction?: 'right' | 'left' | 'center' | number
    isITechApps?: boolean
    width?: number
}

export const StyledMenu = styled(
    ({ direction = 'right', ...props }: PropsType) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: direction,
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: direction,
            }}
            {...props}
        />
    ),
    {
        shouldForwardProp: (prop) => !['isITechApps', 'width'].includes(prop as string),
    }
)(({ theme, isITechApps, width = 220 }) => ({
    '& .MuiPaper-root': {
        borderRadius: 4,
        padding: `${isITechApps ? '0' : '4px 0px'}`,
        marginTop: '15px',
        minWidth: width,
        width: width,
        boxShadow: theme.shadows[1],
    },
}))
