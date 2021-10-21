import React from 'react';
import Main from './Main';
import Log from './Log';
import { Switch, Route } from 'react-router-dom';


import GlobalStyles from './components/styled/GlobalStyles';



import { MyThemeProvider } from './Theme';



function App() {
  return (
    <MyThemeProvider>
      <GlobalStyles />
      <Switch>
        <Route exact path='log'>
          <Log />
        </Route>
        <Route exact path='/' >
          <Main />
        </Route>
      </Switch>
    </MyThemeProvider>
  )
}

export default App;
