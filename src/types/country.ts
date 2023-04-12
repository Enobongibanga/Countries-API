export interface CountryType {
    name: NameType;
    region: string;
    capital: string;
    languages: object;
    currencies: {};
    population: number;
    continents: string;
    flags: FlagsType;
    latlng: [];
    subregion: string;
    maps: MapsType;
    independent: boolean;
  }
  export interface MapsType {
    googleMaps: string;
    openStreetMaps: string;
  }
  export interface NameType {
    common: string;
    official: string;
  }
  export interface FlagsType {
    png: string;
    svg: string;
    alt?: string;
  }
  export interface CountryState {
    countries: CountryType[];
    isLoading: boolean;
    isError: boolean;
    message: string;
  }
  
  
  
  
  
  
  
  
  
  