import { ReactNode } from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';

// Data
export interface RelativePathData {
  edges: {
    node: {
      relativePath: string;
    };
  }[];
}
export interface AgencyData {
  id: string;
  A_NAME: string;
  A_ADD1: string;
  A_ADD2: string;
  A_PHONE: string;
  A_URLTXT: string;
  A_URLLINK: string;
  A_URL: string;
  A_MISSION: string;
  J40_URLTXT: string;
  J40_URLLINK: string;
  A_EMAIL: string;
  A_EMAILLINK: string;
  J40_TCP: string;
  J40_ANNOUNCE: string;
  J40_AMOUNT: string;
  J40_E1: string;
  J40_E2: string;
  J40_E3: string;
  J40_MOD1: string;
  J40_MOD2: string;
  J40_MOD3: string;
  J40_HIGH: string;
  A_STRATPLANTXT: string;
  A_STRATPLANLINK: string;
  A_NEPA: string;
  NUM_NEPA: string;
  NEPA_H1: string;
  NEPA_H2: string;
  NEPA_H3: string;
  NEPA_TRAIN: string;
  TITLEVI_NAR: string;
  TITLEVI_N: string;
  TITLEVI_R_N: string;
  TITLEVI_CR_EJ: string;
  A_NAR: string;
  TA_N: string;
  TA_E1: string;
  TA_E2: string;
  TA_E3: string;
  PP_N: string;
  PP_E1: string;
  PP_E2: string;
  PP_E3: string;
  TC_NAR: string;
  TC_N: string;
  TC_E1: string;
  TC_E2: string;
  TC_E3: string;
  TC_TRAIN_N: string;
  ECR_HIGH: string;
  PLAN_BOOL: string;
  PLAN_UPDATE: string;
  EJP_E1: string;
  EJP_E2: string;
  EJP_E3: string;
  EJTOOL_N: string;
  EJSTAFF_N: string;
  EJTRAIN_N: string;
  EJWG_N: string;
  EJP_NAR: string;
  IEJ_HIGH: string;
}

// Props
export interface Pathname {
  pathname: string;
}

export interface AppHeaderProps extends Pathname {
  allAgencyNames: string[];
}
export interface ScorecardTemplateProps {
  pageContext: {
    allAgencyNames: string[];
    pathname: string;
    agencyData: AgencyData;
    gatsbyImageData: IGatsbyImageData;
  };
}
export interface LayoutProps extends Pathname {
  children: ReactNode;
  allAgencyNames: string[];
  title: string;
  keywords: string;
  description: string;
}

export interface PageProps {
  data: {
    allAgencyInfoCsv: {
      edges: {
        node: {
          id: string;
          A_NAME: string;
          A_LOGO: string;
        };
      }[];
    };
    allImageSharp: {
      edges: {
        node: {
          id: string;
          original: {
            src: string;
          };
          gatsbyImageData: IGatsbyImageData;
        };
      }[];
    };
  };
}

export interface AgencyInfoProps {
  agencyData: AgencyData;
  allAgencyNames: string[];
  pathname: string;
  gatsbyImageData: IGatsbyImageData;
}

export interface TemplateSectionProps {
  agencyData: AgencyData;
}

export interface DropDownNavGeneratorProps {
  agencyNameGroup: string;
  toggleIndex: number;
  subNavLinksArray: Array<Array<ReactNode>> & Array<ReactNode>;
  agencyGroupRange: string[];
}

export interface ScorecardSideNavProps {
  allAgencyNames: string[];
  pathname: string;
}

export interface BtnLaunchExternalProps {
  href: string;
  buttonText: string;
  showlaunchIcon?: boolean;
}
