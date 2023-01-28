import createComponentWithIntl from '@/test/testHelpers';

import InstitutionEJ from './InstitutionEJ';

const institutEj = {
  node: {
    id: `6a74fac8-4546-5ee1-b1bd-738e89e188c5`,
    Agency_Name: `D8 Agency Dept Office`,
    Summary: `Lorem D8 ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus velit non justo tempus, sit amet bibendum tellus convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam in gravida mi. Nam nisl ante, ultricies et massa id, euismod sodales arcu. Sed velit felis, tristique a nunc sit amet, rutrum iaculis lectus. Nullam auctor justo at odio sagittis rutrum. Nunc eget malesuada mauris. Donec tincidunt ex in mi ultrices sodales. Aliquam at lobortis eros, eu mollis tellus. Nullam sit amet elementum tellus. Suspendisse viverra ligula neque, id dapibus nisl elementum et. Integer mattis magna ac lorem fermentum, laoreet accumsan tellus tincidunt. Donec bibendum viverra velit vel eleifend.`,
    Row11: `Y-N Questn D8`,
    Row12: `Boolean`,
    Row13: `#`,
    Row21: `Y-N Questn D8`,
    Row22: `Boolean`,
    Row23: `#`,
    Row31: `SubmetricD8`,
    Row32: `#`,
    Row41: `SubmetricD8`,
    Row42: `#`,
    Row51: `SubmetricD8`,
    Row52: `#`,
    Row61: `SubmetricD8`,
    Row62: `#`,
    Row71: `Y-N Questn D8`,
    Row72: `Boolean`,
    Row81: `Y-N Questn D8`,
    Row82: `#`,
    Row91: `Y-N Questn D8`,
    Row92: `Boolean`,
    Row93: `#`,
    Row101: `Y-N Questn D8`,
    Row102: `#`,
    Row111: `Y-N Questn D8`,
    Row112: `Boolean`,
    Row113: `#`,
    Row121: `Boolean`,
    Row122: `#`,
    Row131: `Y-N Questn D8`,
    Row132: `Boolean`,
    Row141: `Y-N Questn D8`,
    Row142: `Boolean`,
    Row151: `Y-N Questn D8`,
    Row152: `Boolean`,
    Row161: ``,
    Row162: `Boolean`,
    Row171: ``,
    Row172: `#`,
    Row181: `SummaryD8`,
    Row182: `ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus velit non justo tempus, sit amet bibendum tellus convallis.`,
    Row191: `SummaryD8`,
    Row192: `ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus velit non justo tempus, sit amet bibendum tellus convallis.`,
    Row201: ``,
    Row202: `ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus velit non justo tempus, sit amet bibendum tellus convallis.`,
  },
};

describe(`rendering of InstitutionEJ Component`, () => {
  it(`checks if component renders`, () => {
    const component = createComponentWithIntl(
      <InstitutionEJ institutEj={institutEj} />,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
