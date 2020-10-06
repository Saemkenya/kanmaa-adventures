import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Navbar } from './components';
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
    <Navbar />
    <Footer />
    </Router>
  );
}

export default App;
