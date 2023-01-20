import createComponentWithIntl from '@/test/testHelpers';

import DeliverInvest from './DeliverInvest';

const di = {
  node: {
    id: `8ab5f568-6353-5a43-b2c0-b31b78a74be5`,
    __typename: `DeliverInvestCsv`,
    Agency_Name: `Agency A`,
    DeliverInvest: `LoremA ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus velit non justo tempus, sit amet bibendum tellus convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam in gravida mi. Nam nisl ante, ultricies et massa id, euismod sodales arcu. Sed velit felis, tristique a nunc sit amet, rutrum iaculis lectus. Nullam auctor justo at odio sagittis rutrum. Nunc eget malesuada mauris. Donec tincidunt ex in mi ultrices sodales. Aliquam at lobortis eros, eu mollis tellus. Nullam sit amet elementum tellus. Suspendisse viverra ligula neque, id dapibus nisl elementum et. Integer mattis magna ac lorem fermentum, laoreet accumsan tellus tincidunt. Donec bibendum viverra velit vel eleifend.`,
    T1_Title: `Table1 Metrics A`,
    Cat1: `Category 1A`,
    Cat1_N1: `#`,
    Cat1_N2: `$#`,
    Cat2: `Category 2A`,
    Cat2_N1: `#`,
    Cat2_N2: `$#`,
    Cat3: `Category 3A`,
    Cat3_N1: `#`,
    Cat3_N2: `$#`,
    T2_Title: `Table2 Metrics A`,
    T2_M1: `MetricA`,
    T2_N1: `$#`,
    T3_Title: `Table3 Metrics A`,
    T3_M1: `MetricA`,
    T3_N1: `$#`,
    T3_M2: `MetricA`,
    T3_N2: `$#`,
    T3_M3: `MetricA`,
    T3_N3: `$#`,
    T4_Title: `Table4 Metrics A`,
    T4_M1: `Optional: MetricA`,
    T4_V1: `LoremA ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus velit non justo tempus, sit amet bibendum tellus convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam in gravida mi. Nam nisl ante, ultricies et massa id, euismod sodales arcu. Sed velit felis, tristique a nunc sit amet, rutrum iaculis lectus. Nullam auctor justo at odio sagittis rutrum. Nunc eget malesuada mauris. Donec tincidunt ex in mi ultrices sodales. Aliquam at lobortis eros, eu mollis tellus. Nullam sit amet elementum tellus. Suspendisse viverra ligula neque, id dapibus nisl elementum et. Integer mattis magna ac lorem fermentum, laoreet accumsan tellus tincidunt. Donec bibendum viverra velit vel eleifend.`,
  },
};

describe(`rendering of DeliverInvest Component`, () => {
  it(`checks if component renders`, () => {
    const component = createComponentWithIntl(
      <DeliverInvest deliverInvest={di} />,
    );

    // const tree = ;

    expect(component.toJSON()).toMatchSnapshot();
  });
});
