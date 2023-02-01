import createComponentWithIntl from '@/test/testHelpers';

import AppFooter from './AppFooter';

describe(`rendering of AppFooter Component`, () => {
  it(`checks if component renders`, () => {
    const component = createComponentWithIntl(<AppFooter />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
