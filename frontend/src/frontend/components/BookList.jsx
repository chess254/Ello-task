import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

const BookList = ({ books, onAdd }) => {
  return (
    <List>
      {books.map((book) => (
        <ListItem key={book.title}>
          <ListItemText primary={book.title} secondary={book.author} />
          <Button variant="contained" color="primary" onClick={() => onAdd(book)}>
            Add to Reading List
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default BookList;
