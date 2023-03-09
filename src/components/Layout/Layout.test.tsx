import createComponentWithIntl from '@/test/testHelpers';
import {
  useStaticQuery,
  mockUseStaticQuery,
} from '../AppFooter/AppFooter.test';
import { vi } from 'vitest';
import Layout from './Layout';

describe(`rendering of Layout Component`, () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
  const Component = () => <h1>Test</h1>;

  it(`checks if component renders`, () => {
    const component = createComponentWithIntl(
      <Layout
        pathname={`scorecard/agency-a`}
        title={`Agency A`}
        allAgencyNames={[`Agency A`, `Agency B`]}
        keywords={`some set of awesome SEO friendly keywords`}
        description={`some awesome SEO friendly description`}
      >
        <Component />
      </Layout>,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
