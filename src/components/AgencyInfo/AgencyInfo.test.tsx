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

const info = {
  id: `3a212005-6848-5019-baaf-a9a8f4b8d241`,
  A_NAME: `Appalachian Regional Commission`,
  A_LOGO: `arc.png`,
  A_ADD1: `1666 Connecticut Ave N.W., Suite 700`,
  A_ADD2: `Washington, D.C. 20009`,
  A_PHONE: `(202) 884-7700`,
  A_URL: `arc.gov`,
  A_MISSION: `The Appalachian Regional Commission (ARC) is an economic development partnership agency of the federal government and 13 state governments focusing on 423 counties across the Appalachian Region. ARC’s mission is to innovate, partner, and invest to build community capacity and strengthen economic growth in Appalachia to help the Region achieve socioeconomic parity with the nation.`,
  J40_URLTXT: `arc.gov/justice40`,
  J40_URLLINK: `arc.gov/justice40`,
  A_EMAIL: ``,
  J40_TCP: `#J40_CP`,
  J40_ANNOUNCE: `#J40_ANNOUNCE`,
  J40_AMOUNT: `$J40_AMOUNT`,
  J40_E1: `Justice40 example`,
  J40_E2: `Justice40 example`,
  J40_E3: `Justice40 example`,
  J40_MOD1: ``,
  J40_MOD2: ``,
  J40_MOD3: ``,
  J40_HIGH: `Justice40 highlight space`,
  A_STRATPLANTXT: ``,
  A_STRATPLANLINK: ``,
  A_NEPA: `ARC contracts with partner agencies to do any required NEPA work.`,
  NUM_NEPA: `#NEPA_PRJ`,
  NEPA_H1: `NEPA highlight`,
  NEPA_H2: `NEPA highlight`,
  NEPA_H3: `NEPA highlight`,
  NEPA_TRAIN: `#NEPA_TRAIN`,
  TITLEVI_NAR: `Title VI narrative space`,
  TITLEVI_N: `#TITLEVI`,
  TITLEVI_R_N: `#TITLEVI_R`,
  A_NAR: `Community involvement to advance Environmental Justice narrative space`,
  TA_N: `#TA`,
  TA_E1: `Technical Assistance example`,
  TA_E2: `Technical Assistance example`,
  TA_E3: `Technical Assistance example`,
  PP_N: `#PP`,
  PP_E1: `Public processes example`,
  PP_E2: `Public processes example`,
  PP_E3: `Public processes example`,
  TC_NAR: `ARC submits a plan for Tribal Consultation as required, but does not limit subject matter to environmental justice as our mission is more broadly community and economic development.`,
  TC_N: `0`,
  TC_E1: `Tribal Consultation example`,
  TC_E2: `Tribal Consultation example`,
  TC_E3: `Tribal Consultation example`,
  ECR_HIGH: `Environmental Justice and Civil Rights highlight space`,
  PLAN_BOOL: `BLANK`,
  PLAN_UPDATE: `BLANK`,
  EJP_E1: ``,
  EJP_E2: ``,
  EJP_E3: ``,
  EJTOOL_N: `0`,
  EJSTAFF_N: `0`,
  EJTRAIN_N: `0`,
  EJWG_N: `BLANK`,
  EJP_NAR: ``,
  IEJ_HIGH: `Advancing Environmental Justice highlight space`,
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
        info={info}
        allAgencyNames={mockAllAgencyNames}
        pathname={`scorecard/a1-agency-dept-office`}
        gatsbyImageData={mockGatsbyImageData}
      />,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`checks if component renders group 2`, () => {
    const component = createComponentWithIntl(
      <AgencyInfo
        info={info}
        allAgencyNames={mockAllAgencyNames}
        pathname={`scorecard/d6-agency-dept-office`}
        gatsbyImageData={mockGatsbyImageData}
      />,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`checks if component renders group 3`, () => {
    const component = createComponentWithIntl(
      <AgencyInfo
        info={info}
        allAgencyNames={mockAllAgencyNames}
        pathname={`scorecard/t1-agency-dept-office`}
        gatsbyImageData={mockGatsbyImageData}
      />,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
