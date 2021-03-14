/**
 * Create textStyles based on the passed in theme.
 * @param theme {Object} [theme={}] - The optional passed in theme
 * @returns {Object} The generated textStyles
 */
const createTextStyles =  (theme = {}) => {

    const { fontSizes } = theme;

    return {
        heading1: {
            // 40px
            fontSize: `${fontSizes[8]}px`
        },
        heading2: {
            // 32px
            fontSize: `${fontSizes[7]}px`
        },
        heading3: {
            // 28px
            fontSize: `${fontSizes[6]}px`
        },
        heading4: {
            // 24px
            fontSize: `${fontSizes[5]}px`
        },
        heading5: {
            // 20px
            fontSize: `${fontSizes[4]}px`
        },
        heading6: {
            // 16px
            fontSize: `${fontSizes[2]}px`
        },
        lead: {
            // 20px
            fontSize: `${fontSizes[4]}px`
        }
    };
};


export default createTextStyles;
