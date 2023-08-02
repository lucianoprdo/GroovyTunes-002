import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Search from './components/search';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/search" element={ <Search /> } />
    </Routes>
  );
}

export default App;
