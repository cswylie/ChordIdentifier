import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Text } from "@chakra-ui/react"

import ChordSearchBar from './components/ChordSearchBar';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Text>Chord Identifier</Text>
      <ChordSearchBar />
    </ChakraProvider>
  );
};

export default App;

// This is a simple React component that serves as the main entry point for the application.