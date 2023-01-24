import createComponentWithIntl from '@/test/testHelpers';

import ReduceHarm from './ReduceHarm';

const reduceHarm = {
  node: {
    id: `6575a3c4-0b44-51e4-867c-7eb615d76ced`,
    Agency_Name: `T2 Agency Dept Office`,
    Summary: `Lorem T2 ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus velit non justo tempus, sit amet bibendum tellus convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam in gravida mi. Nam nisl ante, ultricies et massa id, euismod sodales arcu. Sed velit felis, tristique a nunc sit amet, rutrum iaculis lectus. Nullam auctor justo at odio sagittis rutrum. Nunc eget malesuada mauris. Donec tincidunt ex in mi ultrices sodales. Aliquam at lobortis eros, eu mollis tellus. Nullam sit amet elementum tellus. Suspendisse viverra ligula neque, id dapibus nisl elementum et. Integer mattis magna ac lorem fermentum, laoreet accumsan tellus tincidunt. Donec bibendum viverra velit vel eleifend.`,
    Row11: `Metric T2`,
    Row12: `#`,
    Row21: `Metric T2`,
    Row22: `#`,
    Row31: `Optional: Metric T2`,
    Row32: `Lorem T2 ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus velit non justo tempus, sit amet bibendum tellus convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam in gravida mi. Nam nisl ante, ultricies et massa id, euismod sodales arcu. Sed velit felis, tristique a nunc sit amet, rutrum iaculis lectus. Nullam auctor justo at odio sagittis rutrum. Nunc eget malesuada mauris. Donec tincidunt ex in mi ultrices sodales. Aliquam at lobortis eros, eu mollis tellus. Nullam sit amet elementum tellus. Suspendisse viverra ligula neque, id dapibus nisl elementum et. Integer mattis magna ac lorem fermentum, laoreet accumsan tellus tincidunt. Donec bibendum viverra velit vel eleifend.`,
  },
};

describe(`rendering of ReduceHarm Component`, () => {
  it(`checks if component renders`, () => {
    const component = createComponentWithIntl(
      <ReduceHarm reduceHarm={reduceHarm} />,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
