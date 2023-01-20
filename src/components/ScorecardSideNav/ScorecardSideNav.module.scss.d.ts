declare namespace ScorecardSideNavNamespace {
  export interface IScorecardSideNavScss {
    scorecardSideNavContainer: string;
  }
}

declare const ScorecardSideNavScssModule: ScorecardSideNavNamespace.IScorecardSideNavScss & {
  /** WARNING: Only available when "css-loader" is used without "style-loader" or "mini-css-extract-plugin" */
  locals: ScorecardSideNavNamespace.IScorecardSideNavScss;
};

export = ScorecardSideNavScssModule;
