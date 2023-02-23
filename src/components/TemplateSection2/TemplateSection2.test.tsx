import createComponentWithIntl from '@/test/testHelpers';
import { agencyData } from '../AgencyInfo/AgencyInfo.test';

import TemplateSection2 from './TemplateSection2';

describe(`rendering of TemplateSection2 Component`, () => {
  it(`checks if component renders`, () => {
    const component = createComponentWithIntl(
      <TemplateSection2 agencyData={agencyData} />,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
