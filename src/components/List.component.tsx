/* eslint-disable react-hooks/exhaustive-deps */
// create component of list characters
import React, { useEffect } from 'react';
import { ListCharactersContext } from '../contexts/charactersList.context';
import { CharacterApiResult, ListCharactersContextInterface } from '../interfaces/charactersList.Interfaces';
import ServiceCharacters from '../services/characters.services';
import Item from './Item.component';
import { List } from '../utils/recurent.stylet';

const ListCharacters = () => {
    const serviceCharacters = new ServiceCharacters();
    const { ElementList, setElementList, setInfoApi, Page, styleList } = React.useContext(ListCharactersContext) as ListCharactersContextInterface;

    const getToListCharacters = (page: number) => {
        serviceCharacters.getAllCharacters(page).then((response: CharacterApiResult) => {
            setElementList(response.results);
            setInfoApi(response.info);
        })
    }

    useEffect(() => {
        getToListCharacters(Page);
    }, [ Page ]);

    return (
        <List style={styleList} >
            {ElementList.map((character: any) => (
                <Item key={character.id} character={character} />
            ))}
        </List>
    )
}

export default ListCharacters
