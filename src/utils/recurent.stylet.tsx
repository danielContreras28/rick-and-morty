import styled from "styled-components";
import { config } from "../config.template";
// create component container for all components
export const Container = styled.div`
  width: calc(100vw - 40px);
  height: calc(100vh - 20px);
  display: flex;
  flex-direction: column;
  background-color: ${config.color.background};
  overflow: hidden;
  padding: 10px 20px;
`;
// create component container information details
export const ContainerInformationDetails = styled.div`
  display: flex;
  flex-direction: row;
  height: 85%;
`;

// create component of title aplication section characters
export const Title = styled.h1`
  width: 100%;
  font-size: ${config.Fonts.Big};
  color: ${config.color.text};
  text-align: center;
  margin-top: 0px;
  margin-bottom: 20px;
`;

// create component of item characters for list characters
export const ContainerItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${config.color.primary};
  color: ${config.color.secondary};
  cursor: pointer;
`;
// create component of list characters
export const List = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: ${config.color.background};
    border: 3px solid ${config.color.background};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${config.color.secondary};
  }
`;

// create component of container details characters
export const ContainerDetailsCharacter = styled.div`
  width: calc(100% - 20px);
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

// create component of container details  dropdown extending ContainerDetailsCharacter
export const ContainerDetailsDropdown = styled(ContainerDetailsCharacter)`
  border-bottom: 1px solid ${config.color.background};
`;

// create component dropdown of details characters
export const DropdownDetailsCharacter = styled.div`
  width: 40vw;
  height: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  background-color: ${config.color.primary};
  color: ${config.color.text};
  overflow: hidden;
  padding: 10px;
`;

// create component of details characters
export const DetailsCharacter = styled.div`
  width: 50%;
  font-size: ${config.Fonts.Small};
  margin-top: 0px;
  margin-bottom: 5px;
`;
// create component of details characters type extending DetailsCharacter
export const DetailsCharacterType = styled(DetailsCharacter)`
  width: 100%;
`;
// create component of detail character dropdown extending DetailsCharacter
export const DetailCharacterDropdown = styled(DetailsCharacter)`
  width: 100%;
  flex-direction: row;
  display: flex;
  color: ${config.color.secondary};

  & span {
      margin-left: 5px;
      color: ${config.color.text};
  }
`;
// create component of details characters species
export const DetailsCharacterSpecies = styled.small`
  font-size: ${config.Fonts.Small};
  background-color: ${config.color.secondary};
  color: ${config.color.text};
  border-radius: 15px;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  height: 24px;
  margin-left: 5px;
`;
// create component container button pages
export const ContainerButtonPages = styled.div`
  display: flex;
  position: fixed;
  bottom: 10px;
  right: 20px;
  flex-direction: row;
  align-items: center;
`;
// create component button pages
export const ButtonPages = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${config.color.secondary};
  color: ${config.color.primary};
  border-style: solid;
  border-width: 2px;
  border-color: ${config.color.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

// create component info pages
export const InfoPages = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  font-size: ${config.Fonts.Regular};
  color: ${config.color.text};

  & small {
    color: ${config.color.primary};
  }
`;
// create component container button close dropdown
export const ContainerButtonCloseDropdown = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-bottom: 40px;
`;

// create component Container button download extending ContainerButtonCloseDropdown
export const ContainerButtonDownload = styled(ContainerButtonCloseDropdown)`
  margin-bottom: 0px;
  
  @media (max-width: 768px) {
      margin-bottom: 50px !important;
  }
`;

// create component button close dropdown extending ButtonPages
export const ButtonCloseDropdown = styled(ButtonPages)`
  position: absolute;
`;

// create component button download extending ButtonPages
export const ButtonDownload = styled(ButtonPages)`
  position: absolute;
  top: 0px;
  width: auto;
  border-radius: 15px;
`;

// create component container column dropdown details characters
export const ContainerColumnDropdownDetailsCharacters = styled.div`
  width: calc(100% - 155px);
  color: ${config.color.secondary};
`;

// create component list episodes
export const ListEpisodes = styled.ul`
  width: 100%;
  height: 100px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: ${config.color.background};
    border: 3px solid ${config.color.background};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${config.color.secondary};
  }
`;

// create component chars container
export const CharsContainer = styled.div`
  width: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: ${config.color.background};
    border: 3px solid ${config.color.background};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${config.color.secondary};
  }
`;