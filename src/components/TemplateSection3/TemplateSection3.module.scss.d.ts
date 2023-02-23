declare namespace TemplateSection3Namespace {
  export interface ITemplateSection3Scss {
    templateSection3Container: string;
  }
}

declare const TemplateSection3ScssModule: TemplateSection3Namespace.ITemplateSection3Scss & {
  /** WARNING: Only available when "css-loader" is used without "style-loader" or "mini-css-extract-plugin" */
  locals: TemplateSection3Namespace.ITemplateSection3Scss;
};

export = TemplateSection3ScssModule;
