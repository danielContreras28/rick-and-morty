import GlobalProvider from "./contexts/global.provider";
import CharactersPage from "./pages/characters.pages";


const App = () => {
  return (
    <GlobalProvider>
      <CharactersPage />
    </GlobalProvider>
  );
};

export default App;
