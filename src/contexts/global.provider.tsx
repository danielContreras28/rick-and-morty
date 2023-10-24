// create context globally

// create component of provider globally for all components
import React from 'react';
import { ListCharactersProvider } from './charactersList.context';

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ListCharactersProvider>
      {children}
    </ListCharactersProvider>
  );
};

export default GlobalProvider;
