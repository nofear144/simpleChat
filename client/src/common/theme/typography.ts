import React from 'react'

declare module '@mui/material/styles' {
    interface TypographyVariants {
        pageHeader: React.CSSProperties
        header: React.CSSProperties
        subHeader1: React.CSSProperties
        subHeader2: React.CSSProperties
        body3: React.CSSProperties
        footer: React.CSSProperties
        label: React.CSSProperties
        link: React.CSSProperties
        toggleButton: React.CSSProperties
    }
    interface TypographyVariantsOptions {
        pageHeader?: React.CSSProperties
        header?: React.CSSProperties
        subHeader1?: React.CSSProperties
        subHeader2?: React.CSSProperties
        body3?: React.CSSProperties
        footer?: React.CSSProperties
        label?: React.CSSProperties
        link?: React.CSSProperties
        toggleButton?: React.CSSProperties
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        pageHeader: true
        header: true
        subHeader1: true
        subHeader2: true
        body3: true
        footer: true
        label: true
        link: true
        toggleButton: true
    }
}

const FONT_PRIMARY = 'IBM Plex Sans, sans-serif'

const PAGE_HEADER = {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '26px',
    letterSpacing: '-0.6px',
}
const HEADER = {
    fontSize: '22px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '-0.6px',
}
const SUB_HEADER_1 = {
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '-0.5px',
}
const SUB_HEADER_2 = {
    fontSize: '18px',
    fontWeight: 300,
    lineHeight: '22px',
}
const BODY_1 = {
    fontSize: '15px',
    fontWeight: 300,
    lineHeight: '18px',
}
const BODY_2 = {
    fontSize: '15px',
    fontWeight: 400,
    lineHeight: '18px',
}
const BODY_3 = {
    fontSize: '15px',
    fontWeight: 600,
    lineHeight: '18px',
}
const BUTTON_TEXT = {
    fontSize: '15px',
    fontWeight: 500,
    lineHeight: '18px',
    letterSpacing: '0.4px',
}
const TOGGLE_BUTTON_TEXT = {
    fontSize: 13,
    lineHeight: '16px',
    letterSpacing: '0.4px',
    align: 'center',
    fontWeight: 500,
}
const CAPTION = {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '18px',
}
const OVERLINE = {
    fontSize: '10px',
    fontWeight: 400,
    lineHeight: '15px',
    letterSpacing: '1.5px',
}
const FOOTER = {
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '14px',
    letterSpacing: '0em',
}
const LABEL = {
    fontSize: '72px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '94px',
    letterSpacing: '0em',
}
const LINK = {
    fontSize: '13px',
    fontWeight: 300,
    lineHeight: '18px',
}

export const typography = {
    fontFamily: FONT_PRIMARY,
    pageHeader: { ...PAGE_HEADER },
    header: { ...HEADER },
    subHeader1: { ...SUB_HEADER_1 },
    subHeader2: { ...SUB_HEADER_2 },
    body1: { ...BODY_1 },
    body2: { ...BODY_2 },
    body3: { ...BODY_3 },
    caption: { ...CAPTION },
    button: { ...BUTTON_TEXT },
    toggleButton: { ...TOGGLE_BUTTON_TEXT },
    overline: { ...OVERLINE },
    footer: { ...FOOTER },
    label: { ...LABEL },
    link: { ...LINK },
}
