import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import SearchBar from './SearchBar';
import ReadingList from './ReadingList';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const MainView = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [searchQuery, setSearchQuery] = useState('');
  const [readingList, setReadingList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (data) {
      const filteredBooks = data.books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredBooks.filter((book, index) => {
        // Ensure unique books in the search results
        const firstIndex = filteredBooks.findIndex(b => b.title === book.title);
        return firstIndex === index;
      }).slice(0, 12)); // Limit to 12 results
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, data]);

  useEffect(() => {
    if (error) {
      console.error('Error fetching books:', error);
    }
  }, [error]);

  const handleAddBook = (book) => {
    if (!readingList.find((b) => b.title === book.title)) {
      setReadingList([...readingList, book]);
    }
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleRemoveBook = (book) => {
    setReadingList(readingList.filter((b) => b.title !== book.title));
  };

  return (
    <Container
      maxWidth="md"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        minHeight: '100vh', 
        boxSizing: 'border-box',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Book Assignment View
      </Typography>
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchResults={searchResults.filter((book) => !readingList.some((b) => b.title === book.title))}
          handleSelect={handleAddBook}
        />
      </div>
      <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
        Reading List
      </Typography>
      <ReadingList readingList={readingList} onRemove={handleRemoveBook} />
    </Container>
  );
};

export default MainView;
