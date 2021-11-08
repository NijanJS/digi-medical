import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ROUTES } from './routes/appRoutes';
function App() {
  return (
    <Switch>
      {ROUTES.map((page, id) => (
        <Route exact path={page.route} component={page.component} key={id} />
      ))}
    </Switch>
  );
}

export default App;
