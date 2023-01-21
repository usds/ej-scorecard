declare namespace ReduceHarmNamespace {
  export interface IReduceHarmScss {
    summaryBox: string;
    h2: string;
  }
}

declare const ReduceHarmScssModule: ReduceHarmNamespace.IReduceHarmScss & {
  /** WARNING: Only available when "css-loader" is used without "style-loader" or "mini-css-extract-plugin" */
  locals: ReduceHarmNamespace.IReduceHarmScss;
};

export = ReduceHarmScssModule;
