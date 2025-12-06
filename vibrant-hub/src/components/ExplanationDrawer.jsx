import { Drawer, Box, Typography, IconButton, Card, CardContent, Button, Divider } from '@mui/material';
import { Close as CloseIcon, Translate as TranslateIcon, Lightbulb as LightbulbIcon, FormatQuote as QuoteIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

export const ExplanationDrawer = ({ open, explanation, onClose }) => {
  if (!explanation) return null;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: 420 },
          background: 'linear-gradient(180deg, #6B46C1 0%, #8B5CF6 100%)',
        }
      }}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              {/* Header */}
              <Box
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant="h5" sx={{ color: 'white', fontWeight: 700 }}>
                  Word Explanation
                </Typography>
                <IconButton onClick={onClose} sx={{ color: 'white' }}>
                  <CloseIcon />
                </IconButton>
              </Box>

              {/* Content */}
              <Box sx={{ flexGrow: 1, overflow: 'auto', px: 3, pb: 3 }}>
                {/* Main Word */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Card sx={{ mb: 3, bgcolor: 'white', borderRadius: 3 }}>
                    <CardContent>
                      <Typography variant="h4" gutterBottom fontWeight={700} color="primary">
                        {explanation.word}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {explanation.pronunciation}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                        {explanation.partOfSpeech}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Translation */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Card sx={{ mb: 3, bgcolor: 'rgba(255,255,255,0.95)', borderRadius: 3 }}>
                    <CardContent>
                      <Box display="flex" alignItems="center" gap={1} mb={2}>
                        <TranslateIcon color="secondary" />
                        <Typography variant="h6" fontWeight={600}>
                          Translation
                        </Typography>
                      </Box>
                      <Typography variant="h5" color="secondary" fontWeight={600}>
                        {explanation.translation}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Contextual Meaning */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Card sx={{ mb: 3, bgcolor: 'rgba(255,255,255,0.95)', borderRadius: 3 }}>
                    <CardContent>
                      <Box display="flex" alignItems="center" gap={1} mb={2}>
                        <LightbulbIcon sx={{ color: '#F59E0B' }} />
                        <Typography variant="h6" fontWeight={600}>
                          Meaning in context
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        {explanation.contextualMeaning}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Example Usage */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Card sx={{ mb: 3, bgcolor: 'rgba(255,255,255,0.95)', borderRadius: 3 }}>
                    <CardContent>
                      <Box display="flex" alignItems="center" gap={1} mb={2}>
                        <QuoteIcon color="primary" />
                        <Typography variant="h6" fontWeight={600}>
                          Example usage
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          p: 2,
                          bgcolor: 'rgba(107,70,193,0.1)',
                          borderLeft: '4px solid',
                          borderColor: 'primary.main',
                          borderRadius: 1
                        }}
                      >
                        <Typography variant="body1" sx={{ fontStyle: 'italic', lineHeight: 1.7 }}>
                          "{explanation.exampleUsage}"
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Add to Vocabulary Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      bgcolor: 'white',
                      color: 'primary.main',
                      fontWeight: 700,
                      py: 1.5,
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.9)'
                      }
                    }}
                  >
                    ⭐ Add to My Vocabulary
                  </Button>
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Drawer>
  );
};
