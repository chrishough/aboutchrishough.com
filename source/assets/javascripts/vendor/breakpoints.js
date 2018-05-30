export const breakpoints = () => {
  Breakpoints({
    xs: {
      min: 0,
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
    xl: {
      min: 1200,
      max: Infinity
    }
  });
};
