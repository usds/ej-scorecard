declare namespace BtnLaunchExternalNamespace {
  export interface IBtnLaunchExternalScss {
    btnLaunch: string;
    icon: string;
  }
}

declare const BtnLaunchExternalScssModule: BtnLaunchExternalNamespace.IBtnLaunchExternalScss & {
  /** WARNING: Only available when "css-loader" is used without "style-loader" or "mini-css-extract-plugin" */
  locals: BtnLaunchExternalNamespace.IBtnLaunchExternalScss;
};

export = BtnLaunchExternalScssModule;
