import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField,
  Chip,
  Box,
  InputAdornment
} from '@mui/material';
import { Search as SearchIcon, AutoStories as BookIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { books } from '../utils/mockData';

const MotionCard = motion(Card);

export const BookLibrary = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        py: 6,
        px: 2
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                fontWeight: 800,
                mb: 2,
                textShadow: '0 4px 12px rgba(0,0,0,0.2)'
              }}
            >
              📚 Vibrant Hub
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.95)',
                fontWeight: 400
              }}
            >
              Learn languages through exciting reading adventures!
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Box maxWidth={600} mx="auto" mb={5}>
            <TextField
              fullWidth
              variant="filled"
              placeholder="Search for books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'rgba(0,0,0,0.5)' }} />
                  </InputAdornment>
                ),
                disableUnderline: true,
                sx: {
                  backgroundColor: 'white',
                  borderRadius: 3,
                  '&:hover': {
                    backgroundColor: 'white',
                  }
                }
              }}
            />
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {filteredBooks.map((book, index) => (
            <Grid item xs={12} sm={6} md={4} key={book.id}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  background: 'white',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => navigate(`/book/${book.id}`)}
              >
                <Box
                  sx={{
                    height: 200,
                    background: book.colorTheme,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <BookIcon sx={{ fontSize: 80, color: 'white', opacity: 0.3, position: 'absolute' }} />
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      textAlign: 'center',
                      px: 3,
                      position: 'relative',
                      zIndex: 1,
                      textShadow: '0 2px 8px rgba(0,0,0,0.2)'
                    }}
                  >
                    {book.title}
                  </Typography>
                </Box>

                <CardContent sx={{ flexGrow: 1, pt: 3 }}>
                  <Typography variant="h6" gutterBottom fontWeight={600}>
                    {book.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    by {book.author}
                  </Typography>

                  <Box display="flex" gap={1} flexWrap="wrap" mt={2}>
                    <Chip
                      label={book.genre}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                    <Chip
                      label={book.difficulty}
                      size="small"
                      color="secondary"
                      variant="outlined"
                    />
                    <Chip
                      label={`${book.wordCount} words`}
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                </CardContent>

                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      background: book.colorTheme,
                      fontWeight: 600,
                      '&:hover': {
                        background: book.colorTheme,
                        filter: 'brightness(1.1)'
                      }
                    }}
                  >
                    Start Reading
                  </Button>
                </CardActions>
              </MotionCard>
            </Grid>
          ))}
        </Grid>

        {filteredBooks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Box textAlign="center" py={8}>
              <Typography variant="h5" sx={{ color: 'white', mb: 2 }}>
                No books found 😔
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                Try searching for something else!
              </Typography>
            </Box>
          </motion.div>
        )}
      </Container>
    </Box>
  );
};
