import React from 'react';
import { TextField, List, ListItem, ListItemText, ListItemAvatar, Avatar, Paper } from '@mui/material';

const SearchBar = ({ searchQuery, setSearchQuery, searchResults, handleSelect }) => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <TextField
        label="Search Books"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery && searchResults.length > 0 && (
        <Paper style={{ position: 'absolute', width: '100%', maxHeight: '300px', overflowY: 'auto', zIndex: 1000 }}>
          <List>
            {searchResults.map((book) => (
              <ListItem button key={book.title} onClick={() => handleSelect(book)}>
                <ListItemAvatar>
                  <Avatar alt={book.title} src={book.coverPhotoURL} />
                </ListItemAvatar>
                <ListItemText primary={book.title} secondary={book.author} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </div>
  );
};

export default SearchBar;
