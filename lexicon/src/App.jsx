import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookLibrary } from './components/BookLibrary';
import { BookReader } from './components/BookReader';

function App() {
  return (
    <Router basename="/LanguageLearnerUIs/lexicon">
      <Routes>
        <Route path="/" element={<BookLibrary />} />
        <Route path="/book/:bookId" element={<BookReader />} />
      </Routes>
    </Router>
  );
}

export default App;
