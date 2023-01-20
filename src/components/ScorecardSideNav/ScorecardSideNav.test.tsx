import createComponentWithIntl from '@/test/testHelpers';

import ScorecardSideNav from './ScorecardSideNav';

export const mockAllAgencyNames = [
  `A1 Agency Dept Office`,
  `A2 Agency Dept Office`,
  `D1 Agency Dept Office`,
  `D2 Agency Dept Office`,
  `D3 Agency Dept Office`,
  `D4 Agency Dept Office`,
  `D5 Agency Dept Office`,
  `D6 Agency Dept Office`,
  `D7 Agency Dept Office`,
  `D8 Agency Dept Office`,
  `E1 Agency Dept Office`,
  `G1 Agency Dept Office`,
  `H1 Agency Dept Office`,
  `N1 Agency Dept Office`,
  `N2 Agency Dept Office`,
  `T1 Agency Dept Office`,
  `T2 Agency Dept Office`,
  `U1 Agency Dept Office`,
  `V1 Agency Dept Office`,
];
describe(`rendering of ScorecardSideNav Component`, () => {
  it(`checks if component renders`, () => {
    const component = createComponentWithIntl(
      <ScorecardSideNav
        allAgencyNames={mockAllAgencyNames}
        pathname={`scorecard/d6-agency-dept-office`}
      />,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
