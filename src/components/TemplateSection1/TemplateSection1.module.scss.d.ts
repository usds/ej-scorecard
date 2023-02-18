declare namespace TemplateSection1Namespace {
  export interface ITemplateSection1Scss {
    templateSection1Container: string;
  }
}

declare const TemplateSection1ScssModule: TemplateSection1Namespace.ITemplateSection1Scss & {
  /** WARNING: Only available when "css-loader" is used without "style-loader" or "mini-css-extract-plugin" */
  locals: TemplateSection1Namespace.ITemplateSection1Scss;
};

export = TemplateSection1ScssModule;
