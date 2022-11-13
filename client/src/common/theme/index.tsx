import { createTheme, ThemeProvider } from '@mui/material'
import React, { useMemo } from 'react'
import { typography } from './typography'
import { palette } from './palette'
import { shadows } from './shadows'
type PropsType = {
    children: JSX.Element[] | JSX.Element
}

const AppTheme: React.FC<PropsType> = (props) => {
    const themeOptions = useMemo(
        () => ({
            palette,
            typography,
        }),
        []
    )
    const theme = createTheme(themeOptions)
    theme.shadows[1] = shadows[0]
    theme.shadows[2] = shadows[1]
    theme.shadows[3] = shadows[2]

    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}
export { AppTheme }
