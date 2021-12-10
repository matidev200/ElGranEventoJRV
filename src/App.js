
import React from 'react';
import '../src/public/style/base.css';
import { IntlProvider } from "react-intl";
import NavBar from './components/NavBar/NavBar';
import { messages as allMessages } from './messages/messages';
import Home from "./views/Home/Home"
import Register from './views/Register/Register';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import Footer from './components/Footer/Footer'
import Invitados from './views/Invitados/Invitados';
import Ticket from './views/Ticket/Ticket';
import ScrollToTop from './service/SrollToTop';
import Error from './views/Error/Error'
// cristo rey.

const App = () => {
  const currentLocale = "es";
  const messages = allMessages[currentLocale];

  

  return (

    <Router className="App">
      <IntlProvider locale={currentLocale} messages={messages}>
        <NavBar />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/registro" component={Register} />
          <Route exact path="/invitado" component={Invitados} />
          <Route exact path="/ticket/:id" component={Ticket} />
          <Route exact path="/error/:id" component={Error} />
          <Route component={Home} /> 
        </Switch>
        <Footer />
      </IntlProvider>
    </Router>

  );
}

export default App;
