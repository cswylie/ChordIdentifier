import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Text } from "@chakra-ui/react"

import ChordSearchBar from './components/ChordSearchBar';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f4f8' }}>
        <Text fontSize="4xl" fontWeight="bold" color="blue.400" mb={4}>
          Chord Identifier
        </Text>
        <Text fontSize="md" color="gray.600" mb={8}>
          Enter a list of musical notes to find out what chord they form.
        </Text>
        <ChordSearchBar />
      </div>
    </ChakraProvider>
  );
};

export default App;

// This is a simple React component that serves as the main entry point for the application.