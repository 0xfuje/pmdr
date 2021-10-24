import React from 'react';
import Main from './Main';

import GlobalStyles from './components/styled/GlobalStyles';

import { MyThemeProvider } from './Theme';



function App() {
  return (
    <MyThemeProvider>
      <GlobalStyles />
          <Main />
    </MyThemeProvider>
  )
}

export default App;
