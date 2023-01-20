import createComponentWithIntl from '@/test/testHelpers';

import AppHeader from './AppHeader';

describe(`rendering of AppHeader Component`, () => {
  it(`checks if component renders with a scorecard page`, () => {
    const component = createComponentWithIntl(
      <AppHeader
        pathname={`scorecard/agency-a`}
        allAgencyNames={[`Agency A`, `Agency B`]}
      />,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`checks if component renders with a non-scorecard page`, () => {
    const component = createComponentWithIntl(
      <AppHeader
        pathname={`about`}
        allAgencyNames={[`Agency A`, `Agency B`]}
      />,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
