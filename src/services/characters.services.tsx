// create service characters
import { config } from '../config.template'
import { CharacterApiResult } from '../interfaces/charactersList.Interfaces';

// create class characters
class Characters {
  // create method to get all characters, return Promise Array<CharacterApiResult>
  getAllCharacters(pages: number = 1): Promise<CharacterApiResult> {
    // call api to get all characters
    return fetch(`${config.url.apiBackend}/character?page=${pages}`)
      .then(response => response.json())
      .then(data => data);
    }
}

export default Characters;