import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Search from './pages/search';
import Layout from './components/layout';
import Favorites from './pages/favorites';
import Profile from './pages/profile';
import Album from './pages/album';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route element={ <Layout /> }>
        <Route path="/search" element={ <Search /> } />
        <Route path="/favorites" element={ <Favorites /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/album/:id" element={ <Album /> } />
      </Route>
    </Routes>
  );
}

export default App;
