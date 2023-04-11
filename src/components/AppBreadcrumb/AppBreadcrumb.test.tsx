import createComponentWithIntl from '@/test/testHelpers';

import AppBreadcrumb from './AppBreadcrumb';

describe(`rendering of AppBreadcrumb Component`, () => {
  it(`checks if component renders`, () => {
    const component = createComponentWithIntl(
      <AppBreadcrumb agencyName="TestAgency" />,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
