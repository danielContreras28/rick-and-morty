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
    end: { width: window.innerWidth > 480 ? "50%" : "100%", padding: "10px" },
  });
  const { play: playList, style: styleList } = useAnimate({
    start: { gridTemplateColumns: window.innerWidth > 768 ? "repeat(5, 1fr)" : window.innerWidth > 480 ? "repeat(4, 1fr)" : "repeat(2, 1fr)" },
    end: { gridTemplateColumns: window.innerWidth > 768 ? "repeat(3, 1fr)" : window.innerWidth > 480 ? "repeat(2, 1fr)" : "repeat(1, 1fr)", width: window.innerWidth > 480 ? "50%" : "0px" },
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
