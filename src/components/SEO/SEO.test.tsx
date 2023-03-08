import createComponentWithIntl from '@/test/testHelpers';

import SEO from './SEO';

describe(`rendering of SEO Component`, () => {
  it(`checks if component renders`, () => {
    const component = createComponentWithIntl(
      <SEO
        title={`Page Title`}
        keywords={`some amazing keywords`}
        description={`some amazing description`}
      />,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
