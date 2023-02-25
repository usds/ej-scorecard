declare namespace AppFooterNamespace {
  export interface IAppFooterScss {
    footerTextBox: string;
  }
}

declare const AppFooterScssModule: AppFooterNamespace.IAppFooterScss & {
  /** WARNING: Only available when "css-loader" is used without "style-loader" or "mini-css-extract-plugin" */
  locals: AppFooterNamespace.IAppFooterScss;
};

export = AppFooterScssModule;
