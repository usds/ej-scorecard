import createComponentWithIntl from '@/test/testHelpers';

import SurveyButton from './SurveyButton';

describe(`rendering of SurveyButton Component`, () => {
  it(`checks if component renders`, () => {
    const component = createComponentWithIntl(<SurveyButton />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
