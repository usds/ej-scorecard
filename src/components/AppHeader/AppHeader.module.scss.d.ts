declare namespace AppHeaderNamespace {
  export interface IAppHeaderScss {
    language: string;
    logoRow: string;
    navRow: string;
    logo: string;
    navLinks: string;
  }
}

declare const AppHeaderScssModule: AppHeaderNamespace.IAppHeaderScss & {
  /** WARNING: Only available when "css-loader" is used without "style-loader" or "mini-css-extract-plugin" */
  locals: AppHeaderNamespace.IAppHeaderScss;
};

export = AppHeaderScssModule;
