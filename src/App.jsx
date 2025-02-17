import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';
import LogoutPage from './LogoutPage';
import { getStorage } from './util/storage';
import { setAccessToken } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = getStorage('accessToken');

    if (accessToken) {
      dispatch(setAccessToken(accessToken));
    }
  }, []);

  return (
    <div>
      <header>
        <h1>
          <Link to="/">헤더</Link>
        </h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:id" component={RestaurantPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/logout" component={LogoutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
