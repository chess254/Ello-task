import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';

const ReadingList = ({ readingList, onRemove }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {readingList.map((book) => (
        <Grid item key={book.title} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={book.coverPhotoURL}
              alt={book.title}
            />
            <CardContent>
              <Typography variant="h5" component="div" color="text.secondary">
                {book.title}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {book.author}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="secondary" onClick={() => onRemove(book)}>
                Remove
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ReadingList;
