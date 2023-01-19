declare namespace DeliverInvestNamespace {
  export interface IDeliverInvestScss {
    h2: string;
    summaryBox: string;
  }
}

declare const DeliverInvestScssModule: DeliverInvestNamespace.IDeliverInvestScss & {
  /** WARNING: Only available when "css-loader" is used without "style-loader" or "mini-css-extract-plugin" */
  locals: DeliverInvestNamespace.IDeliverInvestScss;
};

export = DeliverInvestScssModule;
