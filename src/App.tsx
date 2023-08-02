import { Route, Routes } from 'react-router-dom';
import Login from './components/login';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      {/* <Route path="/search" element={ } /> */}
    </Routes>
  );
}

export default App;
