const plugin = require("tailwindcss/plugin")
const _ = require("lodash");

const gradient = plugin(function({ addUtilities, e, theme, variants }) {
    const gradients = theme("gradients", {})
    const gradientVariants = variants("gradients", [])

    const utilities = _.map(gradients, ([start, end], name) => ({
        [`.bg-gradient-${e(name)}`]: {
            backgroundImage: `linear-gradient(to right, ${start}, ${end})`,
        },
    }))

    addUtilities(utilities, gradientVariants)
})


module.exports = {
    purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
    theme: {
        gradients: theme => ({
            primary: [theme("colors.primary"), theme("colors.secondary")],
        }),
        themes: {
            dark: {
                bg: "#303E49",
                bgalt: "#303E49",
                "color-default": "#eee",
                "color-1": "#c35fde",
                "color-2": "#adbfef",
                border: "#718096",
                primary: "#f89f18",
                medium: "#222"
            },
        },
        colors: {
            bg: "#fff",
            bgalt: "#f5f5f5",
            "color-default": "#333",
            "color-1": "#69D2E7", // "#8e24aa",
            "color-2": "#CCE4EA",
            "color-3": "#aeb4c5",
            primary: "#F89F1B",
            secondary: "#6888df",
            link: "#0a71c5",
            medium: "#cfd8dc",
            white: "#fff",
            black: "#000",
            transparent: "rgba(0,0,0,0)",
            error: "#ef5350",
            success: "#8bc34a"
        },
        extend: {
            fontSize: {
                '7xl': '7.3333rem',
                
            },
            spacing: {
                '1px': '1px',
                '2px': '2px'
            }
        },
    },
    variants: {},
    plugins: [require(`tailwind-theme-switcher`), gradient],
}


