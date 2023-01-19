import { ReactNode } from 'react';

export interface IAllFile {
  edges: {
    node: {
      relativePath: string;
    };
  }[];
}

export interface IAgencyInfo {
  id: string;
  Name: string;
  Contact_Name: string;
  Address_Line_1: string;
  Address_Line_2: string;
  Phone: string;
  Email: string;
  Size: string;
  Value: string;
  Metric: string;
  About_description: string;
}

export interface IDeliverInvest {
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

export interface IPathname {
  pathname: string;
}
export interface IScorecardTemplateProps {
  pageContext: {
    pathname: string;
    agencyInfo: IAgencyInfo;
    deliverInvest: IDeliverInvest;
  };
}
export interface ILayoutProps extends IPathname {
  children: ReactNode;
  title: string;
}
