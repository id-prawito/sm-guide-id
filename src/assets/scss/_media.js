const breakpoints = {
    xs: "320px", // min-width : 320px and max-width : 480px
    sm: "480px",
    md: "768px",
    ml: "1024px",
    lg: "1224px",
    xl: "1824px",
};

export const devices = {
    smartphone: `@media only screen and (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm})`,
    ipads: `@media only screen and (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md})`,
    tablet: `@media only screen and (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.ml})`,
    laptop: `@media only screen and (min-width: ${breakpoints.ml}) and (max-width: ${breakpoints.lg})`,
    desktops: `@media only screen and (min-width: ${breakpoints.lg})`,
    screen_large: `@media only screen and (min-width: ${breakpoints.xl})`,
};
