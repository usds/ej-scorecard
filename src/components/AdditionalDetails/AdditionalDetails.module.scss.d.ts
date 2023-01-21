declare namespace AdditionalDetailsNamespace {
  export interface IAdditionalDetailsScss {
    additionalDetailsContainer: string;
  }
}

declare const AdditionalDetailsScssModule: AdditionalDetailsNamespace.IAdditionalDetailsScss & {
  /** WARNING: Only available when "css-loader" is used without "style-loader" or "mini-css-extract-plugin" */
  locals: AdditionalDetailsNamespace.IAdditionalDetailsScss;
};

export = AdditionalDetailsScssModule;
