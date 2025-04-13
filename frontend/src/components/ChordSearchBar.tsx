import React, { useState } from 'react';
import { Box, Input, List, ListItem, Spinner, Text } from '@chakra-ui/react';

const ChordSearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [chords, setChords] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // ***** Getting a Bad Request Error on This
  const fetchChords = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:3000/identify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes: inputValue.split(' ') }),
      });
      
      // What you get back from the backend
      const data = await response.json();
      setChords(data.chords || []);
    } catch (err) {
      setError('Failed to fetch chords');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      fetchChords();
    }
  };


  return (
    <Box background="blue.400" width="100%" padding="4" color="white">
      <Input
        placeholder="Enter notes separated by space (e.g. C A)"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        background="white"
        color="black"
      />
      {loading && <Spinner color="white" mt={2} />}
      {error && <Text color="red.300" mt={2}>{error}</Text>}
      {chords.length > 0 && (
        <List spacing={2} mt={4}>
          {chords.map((chord, index) => (
            <ListItem key={index}>{chord}</ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default ChordSearchBar;
