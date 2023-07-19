import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TopPage from 'pages';
import Layout from 'components/shared/Layout';

import './styles/_common.scss';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TopPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
