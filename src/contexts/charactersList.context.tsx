// create context, provider and export for list component
import React, { createContext, useState } from "react";
import { useAnimate } from "react-simple-animate";
// import interfaces
import {
  ListCharactersContextInterface,
  CharacterInterface,
  CharacterApiInfo,
} from "../interfaces/charactersList.Interfaces";

const ListCharactersContext = createContext<
  ListCharactersContextInterface | undefined
>(undefined);

const ListCharactersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { play: playDropdown, style: styleDropdown } = useAnimate({
    start: { width: 0, padding: 0 },
    end: { width: "50%", padding: "10px" },
  });
  const { play: playList, style: styleList } = useAnimate({
    start: { gridTemplateColumns: "repeat(5, 1fr)" },
    end: { gridTemplateColumns: "repeat(3, 1fr)" },
  });
  // define your provider logic here
  const [ElementList, setElementList] = useState<Array<CharacterInterface>>([]);
  const [InfoApi, setInfoApi] = useState<CharacterApiInfo>();
  const [Page, setPage] = useState<number>(1);
  const [CharactersSelected, setCharactersSelected] = useState<
    CharacterInterface | undefined
  >();
  const [ViewDetail, setViewDetail] = useState(false);

  return (
    <ListCharactersContext.Provider
      value={{
        ElementList,
        setElementList,
        InfoApi,
        setInfoApi,
        Page,
        setPage,
        CharactersSelected,
        setCharactersSelected,
        ViewDetail,
        setViewDetail,
        playDropdown,
        styleDropdown,
        playList,
        styleList,
      }}
    >
      {children}
    </ListCharactersContext.Provider>
  );
};

export { ListCharactersContext, ListCharactersProvider };
