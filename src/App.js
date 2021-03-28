import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
// import { getToken } from './utils/storage';
// import { useLocation, useHistory } from 'react-router-dom';

export default function App() {
  // const location = useLocation();
  // const history = useHistory();

  return (
    <div className="bg-gradient-to-br from-red-500 via-purple-500  to-blue-500  text-white font-nunito min-h-screen min-w-screen p-5 md:p-0 overflow-hidden">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/react-tailwind-glassmorphic" component={Home} />
      </Switch>
    </div>
  );
}
