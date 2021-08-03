import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Index } from './pages/index';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index}></Route>
      </Switch>
    </BrowserRouter>
  );
}