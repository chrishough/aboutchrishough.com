export const breakpoints = () => {
  Breakpoints({
    xs: {
      min: 0,
      max: 576
    },
    minimium: {
      min: 350,
      max: 576
    },
    transition: {
      min: 450,
      max: 576
    },
    sm: {
      min: 576,
      max: 768
    },
    md: {
      min: 768,
      max: 992,
    },
    lg: {
      min: 992,
      max: 1200
    },
    maximum: {
      min: 1000,
      max: 1200
    },
    xl: {
      min: 1200,
      max: Infinity
    }
  });
};
