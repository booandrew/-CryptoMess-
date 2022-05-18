const spacings = (modifier?: number): number => {
    if (!modifier) {
        return 0;
    }
    return modifier * 8;
};

export const commonProps = {
    zIndex: {
        dropdown: 990, 
        appHeader: 1020, 
        navbar: 1030, 
        modal: 1090, 
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        size: {
            h1: 30,
            h2: 27,
            h3: 24,
            h4: 21,
            h5: 18,
            h6: 15,
            p1: 15,
            p2: 14,
            p3: 13,
            p4: 12,
            p5: 11,
        },
        weight: {
            bold: 700,
            medium: 500,
            regular: 400,
            light: 300,
        },
        lineHeights: {xs: 14, s: 15},
    },
    spacings,
    shadows: {
        none: 'none',
        elevation1: '0px 2px 23px rgba(2, 2, 2, 0.1)',
        elevation2: '0px 10px 45px rgba(47, 52, 65, 0.25)',
        elevation3: '0px 1px 14px rgba(107, 118, 131, 0.2)',
        elevation4: '0px 5px 14px rgba(2, 2, 2, 0.1)',
        elevation5: '0px 5px 14px rgba(0, 0, 0, 0.1);',
        elevation6: '0px 15px 23px -15px rgba(2, 2, 2, 0.1)',
    },
};
