import React from 'react';
import { Link, Router } from '@reach/router'
import Home from "./components/Home"
import Page from "./components/Page"
import Otherpage from './components/Otherpage';
import PWAPrompt from 'react-ios-pwa-prompt'
import Testbase from "./components/Testbase"
import Notfound from './components/Notfound';



function App() {
  return (
    <>
    <nav>
      <Link to="/">Homepage</Link>
      <Link to="/page">subpage</Link>
      <Link to="/otherpage">otherpage</Link>
      <Link to="/testbase">testbase</Link>
      <Link to="/contact">contact</Link>
    </nav>
    <Router>
      <Home path="/" />
      <Page path="/page" />
      <Otherpage path="/otherpage" />
      <Testbase path="/testbase" />
      <Notfound default />
    </Router>
    <PWAPrompt promptOnVisit={1} timesToShow={3} copyClosePrompt="Close" permanentlyHideOnDismiss={false} />
    </>
  );
}

export default App;
