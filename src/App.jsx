// eslint-disable-next-line
import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import routes from './routes/routes';
import 'antd/dist/antd.css';
import './sass/app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {[...routes].map(route =>
          <Route key={route.id} element={route.element} path={route.path} exact={route.exact} />
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App