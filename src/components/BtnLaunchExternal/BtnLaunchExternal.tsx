import React from 'react';
import { Button } from '@trussworks/react-uswds';
import { BtnLaunchExternalProps } from '@/types';

import * as styles from './BtnLaunchExternal.module.scss';

// @ts-ignore
// eslint-disable-next-line import/no-absolute-path
import launchIcon from '/node_modules/@uswds/uswds/dist/img/usa-icons/launch.svg';

const BtnLaunchExternal: React.FC<BtnLaunchExternalProps> = ({
  href,
  buttonText,
  showlaunchIcon = true,
}) => {
  return (
    <a
      className={`flex-align-center`}
      href={href}
      target={`_blank`}
      rel="noreferrer"
    >
      <Button type="button" className={styles.btnLaunch}>
        <div>
          {buttonText}
          {showlaunchIcon ? (
            <img className={styles.icon} src={launchIcon} alt={`launch icon`} />
          ) : (
            <></>
          )}
        </div>
      </Button>
    </a>
  );
};

export default BtnLaunchExternal;
