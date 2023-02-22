import createComponentWithIntl from '@/test/testHelpers';
import { agencyData } from '../AgencyInfo/AgencyInfo.test';
import TemplateSection1 from './TemplateSection1';

describe(`rendering of TemplateSection1 Component`, () => {
  it(`checks if component renders`, () => {
    const component = createComponentWithIntl(
      <TemplateSection1 agencyData={agencyData} />,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
