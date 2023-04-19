// Pages URL

export const NON_DROPDOWN_NAV_LINK_NAMES = [`Scorecard`, `About`, `Contact`];
export const NON_DROPDOWN_PAGE_ENDPOINTS = [`/scorecard`, `/about`, `/contact`];
export const PAGE_ENDPOINTS_ES = [`/es/`, `/es/about`, `/es/contact`];

export const NUMBER_SUB_NAV_LINKS_PER_COLUMN = 5;

// nameGroup is the grouping of agency names and how they will display on the main nav
// the range, are the letters that exist in that range and will be used to filter which agencies to show
export const AGENCY_GROUPS = [
  {
    nameGroup: `A`,
    range: [`A`],
  },
  {
    nameGroup: `D`,
    range: [`D`],
  },
  {
    nameGroup: `E - H`,
    range: [`E`, `F`, `G`, `H`],
  },
  {
    nameGroup: `N - V`,
    range: [`N`, `S`, `T`, `U`, `V`],
  },
];

// USWDS Breakpoints
export const USWDS_BREAKPOINTS = {
  MOBILE_LG: 480,
  DESKTOP: 1024,
};

export const REQUIRED_DATA_FILES = [`AgencyInfo.csv`];

export const FOOTER_CEQ_ADDRESS = {
  NAME: `Council on Environmental Quality`,
  STREET: `730 Jackson Pl NW`,
  CITY_STATE: `Washington, D.C. 20506`,
  PHONE: `(202) 395-5750`,
};

export const DELIMITERS = {
  PARAGRAPH: `%%%%`,
};
