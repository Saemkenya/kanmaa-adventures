import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Navbar } from './components';
import ScrollToTop from './components/ScrollToTop';
import GlobalStyle from "./globalStyles";
import { Home } from "./pages";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
    <Footer />
    </Router>
  );
}

export default App;
