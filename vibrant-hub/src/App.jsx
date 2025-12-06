import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import { BookLibrary } from './components/BookLibrary';
import { BookReader } from './components/BookReader';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<BookLibrary />} />
          <Route path="/book/:bookId" element={<BookReader />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
