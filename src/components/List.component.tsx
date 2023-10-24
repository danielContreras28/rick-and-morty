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
    const refList = React.useRef<any>();
    const { ElementList, setElementList, setInfoApi, Page, styleList } = React.useContext(ListCharactersContext) as ListCharactersContextInterface;

    const getToListCharacters = (page: number) => {
        serviceCharacters.getAllCharacters(page).then((response: CharacterApiResult) => {
            setElementList(response.results);
            setInfoApi(response.info);
        })
    }

    useEffect(() => {
        getToListCharacters(Page);
        if(refList.current) {
            refList.current.scrollTop = 0;
        }
    }, [ Page, refList ]);

    return (
        <List style={styleList} ref={refList} >
            {ElementList.map((character: any) => (
                <Item key={character.id} character={character} />
            ))}
        </List>
    )
}

export default ListCharacters
