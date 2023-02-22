import createComponentWithIntl from '@/test/testHelpers';
import { agencyData } from '../AgencyInfo/AgencyInfo.test';
import TemplateSection3 from './TemplateSection3';

describe(`rendering of TemplateSection3 Component`, () => {
  it(`checks if component renders`, () => {
    const component = createComponentWithIntl(
      <TemplateSection3 agencyData={agencyData} />,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
