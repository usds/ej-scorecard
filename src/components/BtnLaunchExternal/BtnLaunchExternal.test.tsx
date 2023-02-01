import createComponentWithIntl from '@/test/testHelpers';

import BtnLaunchExternal from './BtnLaunchExternal';

describe(`rendering of BtnLaunchExternal Component`, () => {
  it(`checks if component renders`, () => {
    const component = createComponentWithIntl(
      <BtnLaunchExternal
        href="www.google.com"
        buttonText="test"
        showlaunchIcon={true}
      />,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
