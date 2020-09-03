import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from './pages/Dashboard';
import Repository from './pages/Repository'

const Routes: React.FC = () => {
  return (
    < Switch >
      <Route path="/" exact component={DashBoard} />
    </Switch >
  )
}

export default Routes;
