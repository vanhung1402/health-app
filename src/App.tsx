import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TopPage from 'pages';
import ColumPage from 'pages/Column';
import MyRecordPage from 'pages/MyRecord';
import Layout from 'components/shared/Layout';

import './styles/_common.scss';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TopPage />} />
          <Route path='my-record' element={<MyRecordPage />} />
          <Route path='column' element={<ColumPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
