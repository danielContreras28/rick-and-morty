// create compponent pages button for pagination
import React from "react";
import NavigateBefore from "@mui/icons-material/NavigateBefore";
import NavigateNext from "@mui/icons-material/NavigateNext";
import { ListCharactersContext } from "../contexts/charactersList.context";
import { ListCharactersContextInterface } from "../interfaces/charactersList.Interfaces";
import { ButtonPages, ContainerButtonPages, InfoPages } from "../utils/recurent.stylet";

const PagesButton: React.FC = () => {
  const { Page, setPage, InfoApi } = React.useContext(ListCharactersContext) as ListCharactersContextInterface;
  const [Pages, setPages] = React.useState<number>()

  React.useEffect(() => {
      if (InfoApi) {
          setPages(InfoApi?.pages)
      }
  }, [InfoApi])
  
  return (
    <ContainerButtonPages>
      <ButtonPages onClick={() => { if (Page > 1) setPage(Page - 1) }}>
        <NavigateBefore />
      </ButtonPages>
      <InfoPages>
        {Page} <small>of</small> {Pages}
      </InfoPages>
      <ButtonPages onClick={() =>{ if (Pages && Page < Pages) setPage(Page + 1) }}>
        <NavigateNext />
      </ButtonPages>
    </ContainerButtonPages>
  );
};

export default PagesButton;
