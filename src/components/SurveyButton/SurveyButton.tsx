import React from 'react';
// import { Button } from '@trussworks/react-uswds';

import * as styles from './SurveyButton.module.scss';
import MainGridContainer from '../MainGridContainer';

// import { SurveyButtonProps } from '@/types';

const SurveyButton: React.FC = () => {
  return (
    <MainGridContainer className={styles.surveyButtonContainer}>
      <a
        href={`#`}
        target="_blank"
        rel="noreferrer"
        // Todo: Figure out how to get the external link working without having to use the icon
        // className={`usa-link usa-link--alt usa-link--external ${styles.surveyButton}`}
        className={styles.surveyButton}
      >
        {/* <Button type="button" className={styles.surveyButton}> */}
        <strong>Share your feedback</strong>
        {/* <img
            className={styles.launchIcon}
            src={launchIcon}
            alt={`launch icon`}
          /> */}
        {/* </Button> */}
      </a>
    </MainGridContainer>
  );
};

export default SurveyButton;
