import React from 'react';
import Main from './Main';
import Log from './Log';
import { Switch, Route } from 'react-router-dom';

import { Container } from './components/styled/StyledContainer';
import GlobalStyles from './components/styled/GlobalStyles';



import Theme from './Theme';
import Header from './components/Header';

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Header />
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
    </Theme>
  )
}

export default App;
