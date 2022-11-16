import { extendTheme } from "@chakra-ui/react";

export const myNewTheme = extendTheme({
    components: {
        Button: {
            baseStyle: {
                fontWeight: "bold", 
            },
            sizes: {
                lg: {
                    h: "56px",
                    fontSize: "lg",
                    px: "32px",
                },
            },
            variants: {
                solid: (props) => ({
                    bg: props.colorMode === "dark" ? "lightblue.300" : "blue.500",
                }),
            },
            defaultProps: {
                size: "lg",
                variant: "solid",
            },
        },
    },

    colors: {
        primary: {
            50: "#E7D2CC",
            100: "#B9B7BD",
            200: "#868B8E",
            300: "#EEEDE7",
            400: "#746C70",
            500: "#647C90",
        },
    },

    Heading: {
        baseStyle: {
            fontWeight: "bold",
        },
    },
    FormLabel: {
        baseStyle: {
            fontWeight: "bold",
        },
        sizes: {
            lg: {
               
                fontSize:"15px",
                px: "35px",
            },
        },
       
        defaultProps: {
            size: "lg",
            variant: "solid",
        },
    
    },
    styles: {
        global: (props) => ({
            body: {
                color: props.colorMode === "dark" ? "white" : "blue.400",
                lineHeight: "base"
            },
        }),
    },



})
