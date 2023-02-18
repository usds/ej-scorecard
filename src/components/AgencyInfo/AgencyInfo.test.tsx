import createComponentWithIntl from '@/test/testHelpers';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { mockAllAgencyNames } from '../ScorecardSideNav/ScorecardSideNav.test';
import AgencyInfo from './AgencyInfo';

// import * as Gatsby from 'gatsby';
// import { vi } from 'vitest';

// const useStaticQuery = vi.spyOn(Gatsby, `useStaticQuery`);
// const mockUseStaticQuery = {
//   agencyAEjScorecard2023InfoCsv: {
//     Name: `Agency Name`,
//     Logo: ``,
//     Contact_Name: `Some person`,
//     Address_Line_1: `2020 Washington Ave`,
//     Address_Line_2: `Lincoln, NB, 112233`,
//     Phone: `212-867-5309`,
//     Email: `test@gov.com`,
//     Size: `12`,
//     Value: `$5`,
//     Metrics: `12`,
//     About_description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//   },
// };

const agencyData = {
  id: `39455749-3310-53aa-b5fa-22590adc1e05`,
  A_NAME: `Test Agency`,
  A_LOGO: `aaa.png`,
  A_ADD1: `1 Pennsylvania Avenue N.W.`,
  A_ADD2: `Washington, D.C. 20004`,
  A_PHONE: `(212) 533-3333`,
  A_URL: `aaa.gov`,
  A_MISSION: `mission`,
  J40_URLTXT: `aaa.gov/test`,
  J40_URLLINK: `aaa.gov/test`,
  A_EMAIL: ``,
  J40_TCP: `100`,
  J40_ANNOUNCE: `100`,
  J40_AMOUNT: `100`,
  J40_E1: `E1`,
  J40_E2: `E2`,
  J40_E3: `E3`,
  J40_MOD1: ``,
  J40_MOD2: ``,
  J40_MOD3: ``,
  J40_HIGH: `Highlight`,
  A_STRATPLANTXT: ``,
  A_STRATPLANLINK: ``,
  A_NEPA: `test`,
  NUM_NEPA: `1`,
  NEPA_H1: `H1`,
  NEPA_H2: `H2`,
  NEPA_H3: `H3`,
  NEPA_TRAIN: `100`,
  TITLEVI_NAR: `test`,
  TITLEVI_N: `100`,
  TITLEVI_R_N: `100`,
  A_NAR: `test`,
  TA_N: `100`,
  TA_E1: `E1`,
  TA_E2: `E2`,
  TA_E3: `E3`,
  PP_N: `100`,
  PP_E1: `E1`,
  PP_E2: `E3`,
  PP_E3: `E3`,
  TC_NAR: `test`,
  TC_N: `100`,
  TC_E1: `test`,
  TC_E2: `test`,
  TC_E3: `test`,
  ECR_HIGH: `Section header 3`,
  PLAN_BOOL: `Has`,
  PLAN_UPDATE: `was not`,
  EJP_E1: ``,
  EJP_E2: ``,
  EJP_E3: ``,
  EJTOOL_N: `100`,
  EJSTAFF_N: `100`,
  EJTRAIN_N: `100`,
  EJWG_N: `100`,
  EJP_NAR: ``,
  IEJ_HIGH: `test`,
};

const mockGatsbyImageData: IGatsbyImageData = {
  layout: `constrained`,
  backgroundColor: `#f8f8f8`,
  images: {
    fallback: {
      src: `/static/703cdc54fb8f1bddfe59854183c3829b/dff88/agency-a.png`,
      srcSet: `/static/703cdc54fb8f1bddfe59854183c3829b/c3bfd/agency-a.png 84w,\n/static/703cdc54fb8f1bddfe59854183c3829b/53761/agency-a.png 167w,\n/static/703cdc54fb8f1bddfe59854183c3829b/dff88/agency-a.png 334w`,
      sizes: `(min-width: 334px) 334px, 100vw`,
    },
    sources: [
      {
        srcSet: `/static/703cdc54fb8f1bddfe59854183c3829b/59647/agency-a.webp 84w,\n/static/703cdc54fb8f1bddfe59854183c3829b/02be2/agency-a.webp 167w,\n/static/703cdc54fb8f1bddfe59854183c3829b/7adb0/agency-a.webp 334w`,
        type: `image/webp`,
        sizes: `(min-width: 334px) 334px, 100vw`,
      },
    ],
  },
  width: 334,
  height: 278,
};

describe(`rendering of AgencyInfo Component`, () => {
  // beforeEach(() => {
  //   useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  // });

  // afterEach(() => {
  //   vi.restoreAllMocks();
  // });

  it(`checks if component renders group 1`, () => {
    const component = createComponentWithIntl(
      <AgencyInfo
        agencyData={agencyData}
        allAgencyNames={mockAllAgencyNames}
        pathname={`scorecard/test-agency`}
        gatsbyImageData={mockGatsbyImageData}
      />,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
