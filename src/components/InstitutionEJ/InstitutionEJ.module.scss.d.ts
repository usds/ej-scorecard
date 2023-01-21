declare namespace InstitutionEJNamespace {
  export interface IInstitutionEJScss {
    h2: string;
  }
}

declare const InstitutionEJScssModule: InstitutionEJNamespace.IInstitutionEJScss & {
  /** WARNING: Only available when "css-loader" is used without "style-loader" or "mini-css-extract-plugin" */
  locals: InstitutionEJNamespace.IInstitutionEJScss;
};

export = InstitutionEJScssModule;
