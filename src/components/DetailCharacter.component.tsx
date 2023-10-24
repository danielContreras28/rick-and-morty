// create component details character of rick and morty
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ListCharactersContext } from "../contexts/charactersList.context";
import { ListCharactersContextInterface } from "../interfaces/charactersList.Interfaces";
import {
  DetailCharacterDropdown,
  DetailsCharacterType,
  DetailsCharacterSpecies,
  ContainerColumnDropdownDetailsCharacters,
  ListEpisodes,
  ContainerDetailsDropdown,
} from "../utils/recurent.stylet";
import "react-lazy-load-image-component/src/effects/blur.css";

const DetailCharacter: React.FC = () => {
  const { CharactersSelected } = React.useContext(
    ListCharactersContext
  ) as ListCharactersContextInterface;

  // function that gets the episodes of string of url
  function getEpisodesFromUrl(url: string): string {
    url = url.replace("https://rickandmortyapi.com/api/episode/", "");
    return `episode - ${url}`;
  }

  return (
    <ContainerDetailsDropdown>
      {/* component image lazy loading */}
      <LazyLoadImage
        src={CharactersSelected?.image}
        alt={CharactersSelected?.name}
        effect="blur"
        width={window.innerWidth > 480 ? "150px" : "100px"}
        placeholderSrc={CharactersSelected?.image}
      />
      <ContainerColumnDropdownDetailsCharacters>
        <DetailCharacterDropdown>{`Name: ${CharactersSelected?.name}`}</DetailCharacterDropdown>
        <DetailCharacterDropdown>
          {`Species: `}
          <DetailsCharacterSpecies>
            {CharactersSelected?.species}
          </DetailsCharacterSpecies>
        </DetailCharacterDropdown>
        <DetailsCharacterType>{`Type: ${CharactersSelected?.type}`}</DetailsCharacterType>
        <DetailCharacterDropdown>{`Gender: ${CharactersSelected?.gender}`}</DetailCharacterDropdown>
        <DetailCharacterDropdown>{`Status: ${CharactersSelected?.status}`}</DetailCharacterDropdown>
      </ContainerColumnDropdownDetailsCharacters>
      <DetailCharacterDropdown>
        Origin:{" "}
        <span>
          {CharactersSelected?.origin.name}
        </span>
      </DetailCharacterDropdown>
      <DetailCharacterDropdown>
        Location:{" "}
        <span>
          {CharactersSelected?.location.name}
        </span>
      </DetailCharacterDropdown>
      <DetailCharacterDropdown>
        Episode:{" "}
        <ListEpisodes>
          {CharactersSelected?.episode.map((episode: string, i: number) => (
            <li key={i}><span>{getEpisodesFromUrl(episode)}</span></li>
          ))}
        </ListEpisodes>
      </DetailCharacterDropdown>
    </ContainerDetailsDropdown>
  );
};

export default DetailCharacter;
