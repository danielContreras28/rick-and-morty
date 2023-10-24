// create interface config  aplication
export interface AppConfig {
    color: IColor;
    Fonts: IFonts;
    url: IUrl;
}

// create interface color aplication
export interface IColor {
    primary: string;
    secondary: string;
    background: string;
    text: string;
}

// create interface fonts aplication
export interface IFonts {
    Big: string;
    Medium: string;
    Regular: string;
    Small: string;
}

// create interface url aplication
export interface IUrl {
    apiBackend: string;
}