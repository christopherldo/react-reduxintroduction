import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Home, About, NotFound, Login } from './pages';
import { PrivateRoute } from './middlewares';

const isLogged = false;

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <h1>Meu site legal</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre</Link></li>
            <li><Link to="/iqhy2i8hsiduahsdas">Teste 404</Link></li>
          </ul>
        </nav>
      </header>

      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <PrivateRoute isLogged={isLogged} path="/about">
          <About />
        </PrivateRoute>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

      <hr />

      <footer>
        Todos os direitos reservados...
      </footer>
    </BrowserRouter>
  );
};

export default App;
