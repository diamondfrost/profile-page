import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from '@components/Navbar/Navbar';
import { routes } from '@config/routes';

function App() {
  return (
    <Router>
      <Navbar routes={routes} />
      <Routes>
        {routes.map((link) => (
          (link.path === '/')
            ? <Route exact path={link.path} element={link.element} key={link.id} />
            : <Route path={link.path} element={link.element} key={link.id} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
