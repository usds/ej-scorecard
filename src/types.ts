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
    Summary: string;
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
    Cat4: string;
    Cat4_N1: string;
    Cat4_N2: string;
    Cat5: string;
    Cat5_N1: string;
    Cat5_N2: string;
    Cat6: string;
    Cat6_N1: string;
    Cat6_N2: string;
    Cat7: string;
    Cat7_N1: string;
    Cat7_N2: string;
    Cat8: string;
    Cat8_N1: string;
    Cat8_N2: string;
    T2_Title: string;
    T2_M1: string;
    T2_N1: string;
    T2_M2: string;
    T2_N2: string;
    T3_Title: string;
    T3_M1: string;
    T3_N1: string;
    T3_M2: string;
    T3_N2: string;
    T3_M3: string;
    T3_N3: string;
    T3_M4: string;
    T3_N4: string;
    T4_Title: string;
    T4_M1: string;
  };
}

export interface ReduceHarmData {
  node: {
    id: string;
    Agency_Name: string;
    Summary: string;
    Row11: string;
    Row12: string;
    Row21: string;
    Row22: string;
    Row31: string;
    Row32: string;
    Row41: string;
    Row42: string;
  };
}
export interface InstitutEjData {
  node: {
    id: string;
    Agency_Name: string;
    Summary: string;
    Row11: string;
    Row12: string;
    Row13: string;
    Row21: string;
    Row22: string;
    Row23: string;
    Row31: string;
    Row32: string;
    Row41: string;
    Row42: string;
    Row51: string;
    Row52: string;
    Row61: string;
    Row62: string;
    Row71: string;
    Row72: string;
    Row81: string;
    Row82: string;
    Row91: string;
    Row92: string;
    Row93: string;
    Row101: string;
    Row102: string;
    Row111: string;
    Row112: string;
    Row113: string;
    Row121: string;
    Row122: string;
    Row131: string;
    Row132: string;
    Row141: string;
    Row142: string;
    Row151: string;
    Row152: string;
    Row161: string;
    Row162: string;
    Row171: string;
    Row172: string;
    Row181: string;
    Row182: string;
    Row191: string;
    Row192: string;
    Row201: string;
    Row202: string;
  };
}
export interface AddtionalData {
  node: {
    id: string;
    Agency_Name: string;
    P1: string;
    P2: string;
    P3: string;
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
    reduceHarm: ReduceHarmData;
    institutEj: InstitutEjData;
    additional: AddtionalData;
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
  allAgencyNames: string[];
  pathname: string;
}
export interface DeliverInvestProps {
  deliverInvest: DeliverInvestData;
}
export interface ReduceHarmProps {
  reduceHarm: ReduceHarmData;
}
export interface InstitutEjProps {
  institutEj: InstitutEjData;
}
export interface AdditionalDetailsProps {
  additional: AddtionalData;
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
