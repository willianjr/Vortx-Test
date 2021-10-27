import themeProps from '../../../interfaces/theme'

const dark: themeProps = {
    name: 'Default',
    colors: {
        background: {
            body: '#EFEFEF',
        },
        primary: {
            white: '#ffffff',
            black: '#000000',
            gold: '#ECD444',
            purple: '#6E2594',
            blue: '#0094C6',
        },
        secondary: {
            purple_light: '#DEC0F1',
            purple_light_1: '#B79CED',
        },
        silvers: {
            5: '#FCFCFC',
            10: '#F0F0F0',
            15: '#E3E3E3',
            20: '#D7D7D7',
            25: '#CACACA',
            30: '#BDBDBD',
            35: '#A4A4A4',
            40: '#989898',
            45: '#8B8B8B',
            50: '#727272',
            55: '#585858',
        },
        blacks: {
            95: '#0D0D0D',
            90: '#191919',
            85: '#262626',
            80: '#333333',
            75: '#3F3F3F',
            70: '#4C4C4C',
        },
        input: {
            default: {
                background: '#0B0A0A',
                text: '#fff',
                text_hover: '#b96c18',
                border: '#9B9B9B',
                border_hover: '#b96c18',
                shadow_hover: '#585858',
            },
        },
        button: {
            default: {
                background: '#0B0A0A',
                text: '#fff',
                text_hover: '#b96c18',
                border: '#9B9B9B',
                border_hover: '#b96c18',
                shadow_hover: '#585858',
            },
        },
        link: {
            default: {
                background: '#0D0D0D',
                background_hover: '#262626',
                text: '#fff',
                text_hover: '#b96c18',
            },
        },
    },
    fonts: {
        default: {
            family: 'Inter, sans-serif',
            size: '14',
            weight: 'regular',
        },
        light: {
            family: 'Inter, sans-serif',
            size: '14',
            weight: 'regular',
        },
        title: {
            family: 'Inter, sans-serif',
            size: '16',
            weight: 'bold',
        },
    },
}

export default dark
