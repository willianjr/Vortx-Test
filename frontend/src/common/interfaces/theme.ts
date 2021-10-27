interface colors {
    background: {
        body: string
    }
    primary: {
        white: string
        purple: string
        black: string
        gold: string
        blue: string
    }
    secondary: {
        purple_light: string
        purple_light_1: string
    }
    silvers: {
        5: string
        10: string
        15: string
        20: string
        25: string
        30: string
        35: string
        40: string
        45: string
        50: string
        55: string
    }
    blacks: {
        95: string
        90: string
        85: string
        80: string
        75: string
        70: string
    }
    input: {
        default: input
        alternative?: input
    }
    button: {
        default: button
        alternative?: button
    }
    link: {
        default: link
        alternative?: link
    }
}

interface input {
    background: string
    text: string
    text_hover: string
    border: string
    border_hover: string
    shadow?: string
    shadow_hover?: string
}

interface button extends input {
    icon?: { color: string }
}
interface link {
    background: string
    background_hover: string
    text: string
    text_hover: string
}
interface font {
    family: string
    size: string
    weight: string
}
interface fonts {
    light: font
    title: font
    default: font
}

export default interface themeProps {
    name: string
    colors: colors
    fonts: fonts
}
