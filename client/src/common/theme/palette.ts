declare module '@mui/material/styles/createPalette' {
    interface Palette {
        bg: PaletteColor
        bgTitle: PaletteColor
        bgProfiles: PaletteColor
        subtle: PaletteColor
        borders: PaletteColor
        occupiedIcon: PaletteColor
        freeIcon: PaletteColor
        sharedIcon: PaletteColor
        conferenceIcon: PaletteColor
        occupiedPlace: PaletteColor
        freePlace: PaletteColor
        reservedPlace: PaletteColor
        sharedPlace: PaletteColor
        conferencePlace: PaletteColor
        [index: string]: PaletteColor
    }
    interface PaletteOptions {
        bg?: PaletteColorOptions
        bgTitle?: PaletteColorOptions
        bgProfiles?: PaletteColorOptions
        subtle?: PaletteColorOptions
        borders?: PaletteColorOptions
        occupiedIcon?: PaletteColorOptions
        freeIcon?: PaletteColorOptions
        sharedIcon?: PaletteColorOptions
        conferenceIcon?: PaletteColorOptions
        occupiedPlace?: PaletteColorOptions
        freePlace?: PaletteColorOptions
        reservedPlace?: PaletteColorOptions
        sharedPlace?: PaletteColorOptions
        conferencePlace?: PaletteColorOptions
    }
}
declare module '@mui/material/Chip' {
    export interface ChipPropsColorOverrides {
        bg: true
        bgTitle: true
        bgProfiles: true
        subtle: true
        borders: true
        occupiedIcon: true
        freeIcon: true
        sharedIcon: true
        conferenceIcon: true
        occupiedPlace: true
        freePlace: true
        reservedPlace: true
        sharedPlace: true
        conferencePlace: true
    }
}

declare module '@mui/material/SvgIcon' {
    export interface SvgIconPropsColorOverrides {
        occupiedIcon: true
        freeIcon: true
        sharedIcon: true
        conferenceIcon: true
    }
}

// main
const PRIMARY = {
    main: '#131314',
}
const SECONDARY = {
    main: '#EB3D26',
}
const BACKGROUND = {
    main: '#F6F8FC',
}
const BACKGROUND_FOR_TITLE = {
    main: '#F6F6F6',
}
const BACKGROUND_PROFILE_PHOTO = {
    main: '#EFEFEF',
}
const SUBTLE = {
    main: '#A4A4A4',
    dark: '#767676',
}
const BORDERS_LINES = {
    main: '#E0E0E0',
    outline: '#F59E93',
    disabledOutline: '#FACFC9',
}
// icons
const FREE_ICON = {
    main: '#12AB74',
    light: '#82D0B5',
}
const SHARED_ICON = {
    main: '#368ACE',
    light: '#94BFE2',
}
const CONFERENCE_ICON = {
    main: '#826DD7',
    light: '#A799E3',
}
const OCCUPIED_ICON = {
    main: '#A4A4A4',
}
//places
const OCCUPIED_PLACE = {
    main: '#DDE7E7',
    dark: '#BCC3C3',
    light: '#F5F8F8',
}
const FREE_PLACE = {
    main: '#A8DCC9',
    dark: '#5AC59E',
    light: '#E5F5EF',
}
const RESERVED_PLACE = {
    main: '#FFC9A1',
    dark: '#F99851',
    light: '#FFEFE3',
}
const SHARED_PLACE = {
    main: '#A8D6FC',
    dark: '#73AEDD',
    light: '#E5F3FE',
}
const CONFERENCE_PLACE = {
    main: '#D4CAFC',
    dark: '#A799E3',
    light: '#F2EFFE',
}
const TEXT_PLACE = {
    main: '#696969',
    dark: '#FFFFFFF',
    light: '#D2D2D2',
}

export const palette = {
    // main
    common: { black: '#131314', white: '#FFFFFF' },
    primary: { ...PRIMARY },
    secondary: { ...SECONDARY },
    bg: { ...BACKGROUND },
    bgTitle: { ...BACKGROUND_FOR_TITLE },
    bgProfiles: { ...BACKGROUND_PROFILE_PHOTO },
    subtle: { ...SUBTLE },
    borders: { ...BORDERS_LINES },
    // icons
    occupiedIcon: { ...OCCUPIED_ICON },
    freeIcon: { ...FREE_ICON },
    sharedIcon: { ...SHARED_ICON },
    conferenceIcon: { ...CONFERENCE_ICON },
    // places
    occupiedPlace: { ...OCCUPIED_PLACE },
    freePlace: { ...FREE_PLACE },
    reservedPlace: { ...RESERVED_PLACE },
    sharedPlace: { ...SHARED_PLACE },
    conferencePlace: { ...CONFERENCE_PLACE },
    textPlace: { ...TEXT_PLACE },
    // actions
    action: {
        focus: '#F6F8FC',
        disabledBackground: '#F3F3F3',
        disabled: '#A4A4A4',
        disabledButtonText: '#CDCDCD',
    },
}
