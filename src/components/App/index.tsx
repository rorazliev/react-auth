import React, {
  lazy, ReactElement, Suspense, useEffect,
} from 'react';
import {
  BrowserRouter as Router, Switch, Redirect, Route,
} from 'react-router-dom';
import Loader from '../Loader';
import ignoreRejection from '../../helpers/ignoreRejection';
import { useSelector } from '../../redux/store';

const Dashboard = lazy(() => import('../Dashboard'));
const Signin = lazy(() => import('../Signin'));
const Signup = lazy(() => import('../Signup'));

const App: React.FC = (): ReactElement => {
  const isAuth = useSelector((state) => Boolean(state.auth.token));

  // Handle unhandled rejections
  useEffect(() => {
    window.addEventListener('unhandledrejection', ignoreRejection);
    return () => {
      window.removeEventListener('unhandledrejection', ignoreRejection);
    };
  });

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          {
          isAuth ? (
            <>
              <Route exact path="/" component={Dashboard} />
              <Route path="*" render={() => <Redirect to="/" />} />
            </>
          ) : (
            <>
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/signup" component={Signup} />
              <Route path="*" render={() => <Redirect to="/signin" />} />
            </>
          )
        }
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
