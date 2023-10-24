// create interface for characters list context
export interface ListCharactersContextInterface {
  ElementList: Array<CharacterInterface>;
  setElementList: React.Dispatch<React.SetStateAction<Array<CharacterInterface>>>;
  InfoApi: CharacterApiInfo | undefined;
  setInfoApi: React.Dispatch<React.SetStateAction<CharacterApiInfo | undefined>>;
  Page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  CharactersSelected: CharacterInterface | undefined;
  setCharactersSelected: React.Dispatch<React.SetStateAction<CharacterInterface | undefined>>;
  ViewDetail: boolean;
  setViewDetail: React.Dispatch<React.SetStateAction<boolean>>;
  playDropdown: Function;
  styleDropdown: React.CSSProperties;
  playList: Function;
  styleList: React.CSSProperties;
}
// create interface for character of rick and morty
export interface CharacterInterface {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginInterface;
  location: LocationInterface;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

// create interface origin of character of rick and morty 
export interface OriginInterface {
  name: string;
  url: string;
}

// create interface for location of character of rick and morty
export interface LocationInterface {
  name: string;
  url: string;
}

// create interface result api of character of rick and morty
export interface CharacterApiResult {
  info: CharacterApiInfo;
  results: CharacterInterface[];
}

// create interface result api of info of character of rick and morty
export interface CharacterApiInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}