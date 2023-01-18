declare namespace AgencyInfoNamespace {
  export interface IAgencyInfoScss {
    agencyInfoCol1: string;
    agencyInfoCol2: string;
    agencyInfoLogo: string;
  }
}

declare const AgencyInfoScssModule: AgencyInfoNamespace.IAgencyInfoScss & {
  /** WARNING: Only available when "css-loader" is used without "style-loader" or "mini-css-extract-plugin" */
  locals: AgencyInfoNamespace.IAgencyInfoScss;
};

export = AgencyInfoScssModule;
