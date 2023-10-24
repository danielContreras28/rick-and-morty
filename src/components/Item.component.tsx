// create component of item characters for list characters
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  CharacterInterface,
  ListCharactersContextInterface,
} from "../interfaces/charactersList.Interfaces";
import {
  ContainerDetailsCharacter,
  ContainerItem,
  DetailsCharacter,
  DetailsCharacterSpecies,
  DetailsCharacterType,
} from "../utils/recurent.stylet";

import "react-lazy-load-image-component/src/effects/blur.css";
import { ListCharactersContext } from "../contexts/charactersList.context";

interface ItemProps {
  character: CharacterInterface;
}

const Item: React.FC<ItemProps> = ({ character }) => {
  const { setCharactersSelected, setViewDetail } = React.useContext(
    ListCharactersContext
  ) as ListCharactersContextInterface;

  const loadingCharacter = () => {
    setCharactersSelected(character);
    setViewDetail(true);
  };

  return (
    <ContainerItem key={character.id} onClick={loadingCharacter}>
      {/* component image lazy loading */}
      <LazyLoadImage
        src={character.image}
        alt={character.name}
        effect="blur"
        width="100%"
        placeholderSrc={character.image}
      />
      <ContainerDetailsCharacter>
        <DetailsCharacter>{`${character.name}`}</DetailsCharacter>
        <DetailsCharacterSpecies>{`${character.species}`}</DetailsCharacterSpecies>
        <DetailsCharacter>{`gender: ${character.gender}`}</DetailsCharacter>
        {character.type && (
          <DetailsCharacterType>
            {`type: `}
            <small>{character.type}</small>
          </DetailsCharacterType>
        )}
      </ContainerDetailsCharacter>
    </ContainerItem>
  );
};

export default Item;
