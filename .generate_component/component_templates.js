
// component.tsx
exports.component = name => `import React from 'react';

// import * as styles from './${name}.module.scss';

import { ${name}Props } from '@/types';

const ${name}: React.FC<${name}Props> = ({}) => {
  return (
    <div className={styles.${name[0].toLowerCase() + name.slice(1)}Container}>
      Hello 👋, I am a ${name} component.
    </div>
    )
};

export default ${name};
`;

// component.module.scss
exports.sass = name => `@use "uswds-core" as *;

.${name[0].toLowerCase() + name.slice(1)}Container{

}
`;

// component.module.scss.d.ts
exports.sassType = name => `declare namespace ${name}Namespace {
    export interface I${name}Scss {
      ${name[0].toLowerCase() + name.slice(1)}Container: string;
    }
  }

declare const ${name}ScssModule: ${name}Namespace.I${name}Scss & {
    /** WARNING: Only available when "css-loader" is used without "style-loader" or "mini-css-extract-plugin" */
    locals: ${name}Namespace.I${name}Scss;
  };

  export = ${name}ScssModule;
`;

// component.test.tsx
exports.test = name => `import createComponentWithIntl from '@/test/testHelpers';

import ${name} from './${name}';

describe("rendering of ${name} Component", () => {
  it("checks if component renders", () => {
    const component = createComponentWithIntl(<${name} />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
`;

// index.ts
exports.barrel = name => `import ${name} from './${name}';
export default ${name};
`;