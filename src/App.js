import './App.css';
import Header from './components/header/Header.js';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './components/auth/Auth.js';
import Todo from './components/todo/Todo.js';
import { useContext } from 'react';
import { UserContext } from './context/UserContext.js';

function App() {
  const { user } = useContext(UserContext);
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/todos" component={Todo} />

        <Route exact path="/">
          <>
            {user && <Redirect to="/todos" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
