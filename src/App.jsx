import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='search' element={<Search />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
