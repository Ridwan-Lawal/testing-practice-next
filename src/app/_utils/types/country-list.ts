export interface Country {
  flags: Flags;
  name: Name;
  capital: string[];
  region: string;
  population: number;
  continents: string[];
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  eng: Eng;
  jam: Jam;
}

export interface Eng {
  official: string;
  common: string;
}

export interface Jam {
  official: string;
  common: string;
}

export interface Borders {
  name: Name;
}
