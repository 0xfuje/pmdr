
import React from 'react';
import { Container } from './components/styled/StyledContainer';
import GlobalStyles from './components/styled/GlobalStyles';

import Theme from './Theme';
import Header from './components/Header';
import Timer from './components/Timer';



function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Header />
    <Container>
      <Timer />
    </Container>
    </Theme>
  )
}

export default App;
