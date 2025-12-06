import { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Paper,
  LinearProgress,
  Chip,
  Card,
  CardContent,
  CircularProgress
} from '@mui/material';
import { ArrowBack as BackIcon, EmojiEvents as TrophyIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { books } from '../utils/mockData';
import { getExplanation } from '../utils/mockApi';
import { useTextSelection } from '../hooks/useTextSelection';
import { ExplanationDrawer } from './ExplanationDrawer';

export const BookReader = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const textContainerRef = useRef(null);
  const { selection, clearSelection } = useTextSelection(textContainerRef);
  const [explanation, setExplanation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [wordsLearned, setWordsLearned] = useState(12);
  const [streak, setStreak] = useState(5);
  const [highlightedWords, setHighlightedWords] = useState(new Set());

  const book = books.find(b => b.id === bookId);

  useEffect(() => {
    if (selection.isActive && selection.text) {
      setLoading(true);
      getExplanation(selection.text)
        .then(exp => {
          setExplanation(exp);
          setLoading(false);
          setHighlightedWords(prev => new Set([...prev, selection.text.toLowerCase()]));
        });
    }
  }, [selection]);

  const handleClose = () => {
    clearSelection();
    setExplanation(null);
  };

  if (!book) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
      >
        <Paper sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
          <Typography variant="h6" gutterBottom>
            Book not found
          </Typography>
          <IconButton onClick={() => navigate('/')} color="primary" size="large">
            <BackIcon /> Back to Library
          </IconButton>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#F9FAFB' }}>
      {/* Header */}
      <Box
        sx={{
          background: book.colorTheme,
          color: 'white',
          py: 2,
          px: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      >
        <IconButton onClick={() => navigate('/')} sx={{ color: 'white' }}>
          <BackIcon />
        </IconButton>
        <Box flexGrow={1}>
          <Typography variant="h6" fontWeight={700}>
            {book.title}
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.9 }}>
            by {book.author}
          </Typography>
        </Box>
        <Chip
          icon={<TrophyIcon />}
          label={`${streak} day streak!`}
          sx={{
            bgcolor: 'rgba(255,255,255,0.2)',
            color: 'white',
            fontWeight: 600,
            backdropFilter: 'blur(10px)'
          }}
        />
      </Box>

      {/* Main Layout */}
      <Box sx={{ display: 'flex', minHeight: 'calc(100vh - 80px)' }}>
        {/* Reading Area */}
        <Box
          sx={{
            flexGrow: 1,
            p: { xs: 2, md: 4 },
            maxWidth: { md: '60%' },
            mx: 'auto'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }}
            >
              <article
                ref={textContainerRef}
                className="select-text"
              >
                {book.content.map((paragraph, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    sx={{
                      fontSize: '1.125rem',
                      lineHeight: 1.9,
                      mb: 3,
                      color: 'text.primary'
                    }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </article>
            </Paper>
          </motion.div>
        </Box>

        {/* Side Panel - Desktop Only */}
        <Box
          sx={{
            width: { xs: 0, md: '40%' },
            maxWidth: 400,
            p: { md: 4 },
            display: { xs: 'none', md: 'block' }
          }}
        >
          <Box sx={{ position: 'sticky', top: 20 }}>
            {/* Progress Card */}
            <Card sx={{ mb: 3, borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  Your Progress
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography variant="body2" color="text.secondary">
                      Reading Progress
                    </Typography>
                    <Typography variant="body2" fontWeight={600}>
                      35%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={35}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
              </CardContent>
            </Card>

            {/* Vocabulary Stats */}
            <Card sx={{ mb: 3, borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  Vocabulary Stats
                </Typography>
                <Box display="flex" flexDirection="column" gap={2}>
                  <Box>
                    <Typography variant="h3" color="primary" fontWeight={700}>
                      {wordsLearned}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Words learned this week
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h3" color="secondary" fontWeight={700}>
                      {streak}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Day learning streak 🔥
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card sx={{ borderRadius: 3, background: book.colorTheme }}>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight={600} color="white">
                  Recent Achievement
                </Typography>
                <Box display="flex" alignItems="center" gap={2}>
                  <Typography variant="h2">🏆</Typography>
                  <Box>
                    <Typography variant="body1" fontWeight={600} color="white">
                      Speed Reader
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      Read for 5 days in a row!
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>

      {/* Loading Indicator */}
      {loading && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            bgcolor: 'white',
            px: 3,
            py: 1.5,
            borderRadius: 3,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          <CircularProgress size={20} />
          <Typography variant="body2" fontWeight={600}>
            Loading explanation...
          </Typography>
        </Box>
      )}

      <ExplanationDrawer
        open={selection.isActive && explanation !== null}
        explanation={explanation}
        onClose={handleClose}
      />
    </Box>
  );
};
