import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home/index';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}