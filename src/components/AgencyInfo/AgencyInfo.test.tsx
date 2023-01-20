import createComponentWithIntl from '@/test/testHelpers';
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
  id: `39455749-3310-53aa-b5fa-22590adc1e05`,
  Name: `Agency D`,
  Contact_Name: `Leslie KnopeD`,
  Address_Line_1: `333 Any StreetD`,
  Address_Line_2: `Washington, D.C. 20032`,
  Phone: `(212) 867-5309`,
  Site: `agencya.gov`,
  About_description: `LoremD ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus velit non justo tempus, sit amet bibendum tellus convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam in gravida mi. Nam nisl ante, ultricies et massa id, euismod sodales arcu. Sed velit felis, tristique a nunc sit amet, rutrum iaculis lectus. Nullam auctor justo at odio sagittis rutrum. Nunc eget malesuada mauris. Donec tincidunt ex in mi ultrices sodales. Aliquam at lobortis eros, eu mollis tellus. Nullam sit amet elementum tellus. Suspendisse viverra ligula neque, id dapibus nisl elementum et. Integer mattis magna ac lorem fermentum, laoreet accumsan tellus tincidunt. Donec bibendum viverra velit vel eleifend.`,
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
      />,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
