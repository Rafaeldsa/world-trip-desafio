import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#000000",
            "800": "#353646",
            "700": "#47585B",
            "600": "#999999",
            "500": "#DADADA",
            "100": "#F5F8FA",
            "50": "#FFFFFF"
        },
        yellow: {
            '900': '#FFBA08',
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.100',
                color: 'gray.700'
            }
        }
    }
})