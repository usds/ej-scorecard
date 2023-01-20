import { ReactNode } from 'react';

// Data
export interface RelativePathData {
  edges: {
    node: {
      relativePath: string;
    };
  }[];
}
export interface AgencyInfoData {
  id: string;
  Name: string;
  Contact_Name: string;
  Address_Line_1: string;
  Address_Line_2: string;
  Phone: string;
  Site: string;
  About_description: string;
}
export interface DeliverInvestData {
  node: {
    id: string;
    __typename: string;
    Agency_Name: string;
    DeliverInvest: string;
    T1_Title: string;
    Cat1: string;
    Cat1_N1: string;
    Cat1_N2: string;
    Cat2: string;
    Cat2_N1: string;
    Cat2_N2: string;
    Cat3: string;
    Cat3_N1: string;
    Cat3_N2: string;
    T2_Title: string;
    T2_M1: string;
    T2_N1: string;
    T3_Title: string;
    T3_M1: string;
    T3_N1: string;
    T3_M2: string;
    T3_N2: string;
    T3_M3: string;
    T3_N3: string;
    T4_Title: string;
    T4_M1: string;
    T4_V1: string;
  };
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
    agencyInfo: AgencyInfoData;
    deliverInvest: DeliverInvestData;
  };
}
export interface LayoutProps extends Pathname {
  children: ReactNode;
  allAgencyNames: string[];
  title: string;
}

export interface PageProps {
  data: {
    allAgencyInfoCsv: {
      edges: {
        node: {
          Name: string;
        };
      }[];
    };
  };
}

export interface AgencyInfoProps {
  info: AgencyInfoData;
}
export interface DeliverInvestProps {
  deliverInvest: DeliverInvestData;
}

export interface DropDownNavGeneratorProps {
  agencyNameGroup: string;
  toggleIndex: number;
  subNavLinksArray: Array<Array<ReactNode>> & Array<ReactNode>;
}
