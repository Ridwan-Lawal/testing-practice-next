export interface CountryByName {
  borders: string[];
  capital: string[];
  currencies: Currencies;
  flags: Flags;
  languages: Languages;
  name: Name;
  population: number;
  region: string;
  subregion: string;
  tld: string[];
}

export interface Currencies {
  [k: string]: {
    name: string;
    symbol: string;
  };
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Languages {
  [k: string]: string;
}

export interface Name {
  common: string;
  nativeName: NativeName;
  official: string;
}

export interface NativeName {
  [k: string]: {
    official: string;
    common: string;
  };
}
