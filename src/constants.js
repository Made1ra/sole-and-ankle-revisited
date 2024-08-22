const BREAKPOINTS = {
  mobileMax: 37.5,
  tabletMax: 59.375,
  laptopMax: 81.25,
};

export const QUERIES = {
  mobile: `(max-width: ${BREAKPOINTS.mobileMax}rem)`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax}rem)`,
  laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMax}rem)`,
};
