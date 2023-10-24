/* eslint-disable react-hooks/exhaustive-deps */
// create pages characters
import React from "react";
import { Close, Download } from "@mui/icons-material";
import {
  ButtonCloseDropdown,
  ButtonDownload,
  Container,
  ContainerButtonCloseDropdown,
  ContainerButtonDownload,
  ContainerInformationDetails,
  DropdownDetailsCharacter,
  Title,
} from "../utils/recurent.stylet";
import ListCharacters from "../components/List.component";
import DetailCharacter from "../components/DetailCharacter.component";
import { ListCharactersContext } from "../contexts/charactersList.context";
import { ListCharactersContextInterface } from "../interfaces/charactersList.Interfaces";
import PagesButton from "../components/PagesButton.component";
import Chars from "../components/Chars/CharCharacter.component";

const CharactersPage: React.FC = () => {
  const { ViewDetail, styleDropdown, playDropdown, playList, setViewDetail } =
    React.useContext(ListCharactersContext) as ListCharactersContextInterface;

  const [IsRealyforInstall, setIsRealyforInstall] =
    React.useState<boolean>(false);
  const [deferredPrompt, setDeferredPrompt] = React.useState<any>(null);

  // funtion for install app
  const installApp = async () => {
    if(deferredPrompt){
      deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      console.log("user choice", result);
      setDeferredPrompt(null);
      setIsRealyforInstall(false);
    }
  };

  React.useEffect(() => {
    playDropdown(ViewDetail);
    playList(ViewDetail);
  }, [ViewDetail]);

  React.useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsRealyforInstall(true);
    });
  }, []);

  return (
    <Container>
      {IsRealyforInstall && (
        <ContainerButtonDownload>
          <ButtonDownload onClick={installApp}>
            <Download /> Download App
          </ButtonDownload>
        </ContainerButtonDownload>
      )}
      <Title>Rick and Morty Characters</Title>
      <ContainerInformationDetails>
        <ListCharacters />
        <DropdownDetailsCharacter style={styleDropdown}>
          <ContainerButtonCloseDropdown>
            <ButtonCloseDropdown onClick={() => setViewDetail(false)}>
              <Close />
            </ButtonCloseDropdown>
          </ContainerButtonCloseDropdown>
          <DetailCharacter />
          <Chars />
        </DropdownDetailsCharacter>
      </ContainerInformationDetails>
      <PagesButton />
    </Container>
  );
};

export default CharactersPage;
