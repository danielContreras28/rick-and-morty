// create component for chars of characters
import { CharsContainer } from "../../utils/recurent.stylet";
import CharGender from "./CharGender.component";
import CharSpecies from "./CharSpecies.component";
import CharStatus from "./CharStatus.component";
import CharType from "./CharType.component";

export const Chars = () => {
  return (
    <CharsContainer>
      <CharGender />
      <CharSpecies />
      <CharStatus />
      <CharType />
    </CharsContainer>
  );
};

export default Chars;
