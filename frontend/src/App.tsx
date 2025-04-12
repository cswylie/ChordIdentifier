import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <div>
        <h1>Chord Identifier</h1>
        <p>Enter a list of notes to identify the chord.</p>
      </div>
    </ChakraProvider>
  );
};

export default App;

// This is a simple React component that serves as the main entry point for the application.