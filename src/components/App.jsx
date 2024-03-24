import CatalogCampers from './catalogCampers/CatalogCampers';
import { Routes, Route } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import Header from './header/Header';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="filters" element={<CatalogCampers />} />
      </Route>
    </Routes>
  );
};

export default App;
