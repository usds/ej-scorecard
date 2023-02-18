declare namespace TemplateSection2Namespace {
  export interface ITemplateSection2Scss {
    templateSection2Container: string;
  }
}

declare const TemplateSection2ScssModule: TemplateSection2Namespace.ITemplateSection2Scss & {
  /** WARNING: Only available when "css-loader" is used without "style-loader" or "mini-css-extract-plugin" */
  locals: TemplateSection2Namespace.ITemplateSection2Scss;
};

export = TemplateSection2ScssModule;
