import './App.css';
import Header from './components/header/Header.js';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './components/auth/Auth.js';
import Todo from './components/todo/Todo.js';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="*">
          <Redirect to="/auth/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
