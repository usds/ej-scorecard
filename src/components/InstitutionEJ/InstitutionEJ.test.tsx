import createComponentWithIntl from '@/test/testHelpers';

import InstitutionEJ from './InstitutionEJ';

const institutEj = {
  node: {
    id: `1b11ec85-da83-5b4c-a248-2c6438dcf3fe`,
    Agency_Name: `T2 Agency Dept Office`,
    Summary: `Lorem T2 ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus velit non justo tempus, sit amet bibendum tellus convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam in gravida mi. Nam nisl ante, ultricies et massa id, euismod sodales arcu. Sed velit felis, tristique a nunc sit amet, rutrum iaculis lectus. Nullam auctor justo at odio sagittis rutrum. Nunc eget malesuada mauris. Donec tincidunt ex in mi ultrices sodales. Aliquam at lobortis eros, eu mollis tellus. Nullam sit amet elementum tellus. Suspendisse viverra ligula neque, id dapibus nisl elementum et. Integer mattis magna ac lorem fermentum, laoreet accumsan tellus tincidunt. Donec bibendum viverra velit vel eleifend.`,
    Row11: `Y-N Questn T2`,
    Row12: `Boolean`,
    Row13: `#`,
    Row21: `Y-N Questn T2`,
    Row22: `Boolean`,
    Row23: `#`,
    Row31: `SubmetricT2`,
    Row32: `#`,
    Row41: `SubmetricT2`,
    Row42: `#`,
    Row51: `SubmetricT2`,
    Row52: `#`,
    Row61: `SubmetricT2`,
    Row62: `#`,
    Row71: `Y-N Questn T2`,
    Row72: `Boolean`,
    Row81: `Y-N Questn T2`,
    Row82: `#`,
    Row91: `Y-N Questn T2`,
    Row92: `Boolean`,
    Row101: `Y-N Questn T2`,
    Row102: `#`,
    Row111: `Y-N Questn T2`,
    Row112: `Boolean`,
    Row121: `Y-N Questn T2`,
    Row122: `Boolean`,
    Row131: `Y-N Questn T2`,
    Row132: `Boolean`,
    Row141: `Y-N Questn T2`,
    Row142: `Boolean`,
    Row151: `Y-N Questn T2`,
    Row152: `#`,
    Row161: `SummaryT2`,
    Row162: `ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus velit non justo tempus, sit amet bibendum tellus convallis.`,
    Row171: `SummaryT2`,
    Row172: `ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus velit non justo tempus, sit amet bibendum tellus convallis.`,
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
