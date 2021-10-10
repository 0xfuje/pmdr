
import React from 'react';
import { Container } from './components/styled/StyledContainer';
import GlobalStyles from './components/styled/GlobalStyles';
import { TasksProvider } from './context/tasks.context';

import Theme from './Theme';
import Header from './components/Header';
import Timer from './components/Timer';
import CurrentTask from './components/CurrentTask';
import Tasks from './components/Tasks';


function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Header />
    <Container>
    <TasksProvider>
      <Timer isCounting={true} />
      <CurrentTask num={2} title={'PMDR - Making Styled Compents Skeleton'}/>
      <Tasks  />
    </TasksProvider>
    </Container>
    </Theme>
  )
}

export default App;
