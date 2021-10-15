import React, {useState, useContext} from 'react';
import Main from './Main';
import Log from './Log';
import { Switch, Route } from 'react-router-dom';

import { Container } from './components/styled/StyledContainer';
import GlobalStyles from './components/styled/GlobalStyles';


import Header from './components/Header';
import { TimerProvider } from './context/timer.context';

import { MyThemeProvider } from './Theme';



function App() {
  return (
    <MyThemeProvider>
      <GlobalStyles />
      <TimerProvider>
        <Header />
      </TimerProvider>
    <Container>
      <Switch>
        <Route exact path='log'>
          <Log />
        </Route>
        <Route exact path='/' >
          <Main />
        </Route>
      </Switch>
    </Container>
    </MyThemeProvider>
  )
}

export default App;
