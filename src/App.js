import React from 'react';
import { Router } from '@reach/router'
import Home from "./components/Home"
import Page from "./components/Page"
import OneSignal from 'react-onesignal';


OneSignal.initialize('e5b94a5a-a3b9-4f0b-b5a1-54d44283e640', {
  safari_web_id: "web.onesignal.auto.3a3b4186-8f32-4bbf-a810-be3f3be590a9"
})

function App() {
  return (
    <Router>
      <Home path="/" />
      <Page path="page" />
    </Router>
  );
}

export default App;
