import createComponentWithIntl from '@/test/testHelpers';

import DeliverInvest from './DeliverInvest';

const di = {
  node: {
    id: `66f497ea-2419-593f-b8da-18369b412f9d`,
    __typename: `DeliverInvestCsv`,
    Agency_Name: `D2 Agency Dept Office`,
    Summary: `Lorem D2 ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus velit non justo tempus, sit amet bibendum tellus convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam in gravida mi. Nam nisl ante, ultricies et massa id, euismod sodales arcu. Sed velit felis, tristique a nunc sit amet, rutrum iaculis lectus. Nullam auctor justo at odio sagittis rutrum. Nunc eget malesuada mauris. Donec tincidunt ex in mi ultrices sodales. Aliquam at lobortis eros, eu mollis tellus. Nullam sit amet elementum tellus. Suspendisse viverra ligula neque, id dapibus nisl elementum et. Integer mattis magna ac lorem fermentum, laoreet accumsan tellus tincidunt. Donec bibendum viverra velit vel eleifend.`,
    T1_Title: `Table1 Metrics D2`,
    Cat1: `Category 1D2`,
    Cat1_N1: `#`,
    Cat1_N2: `$#`,
    Cat2: `Category 2D2`,
    Cat2_N1: `#`,
    Cat2_N2: `$#`,
    Cat3: `Category 3D2`,
    Cat3_N1: `#`,
    Cat3_N2: `$#`,
    Cat4: `Category 4`,
    Cat4_N1: `#`,
    Cat4_N2: `$#`,
    Cat5: ``,
    Cat5_N1: ``,
    Cat5_N2: ``,
    Cat6: ``,
    Cat6_N1: ``,
    Cat6_N2: ``,
    Cat7: ``,
    Cat7_N1: ``,
    Cat7_N2: ``,
    Cat8: ``,
    Cat8_N1: ``,
    Cat8_N2: ``,
    T2_Title: `Table2 Metrics D2`,
    T2_M1: `Metric D2`,
    T2_N1: `#`,
    T2_M2: ``,
    T2_N2: ``,
    T3_Title: `Table3 Metrics D2`,
    T3_M1: `Metric D2`,
    T3_N1: `$#`,
    T3_M2: `Metric D2`,
    T3_N2: `$#`,
    T3_M3: `Metric D2`,
    T3_N3: `$#`,
    T3_M4: `Metric D2`,
    T3_N4: `$#`,
    T4_Title: `Table3 Metrics D2`,
    T4_M1: `Optional: Metric D2`,
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
