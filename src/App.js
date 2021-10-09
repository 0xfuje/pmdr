
import React from 'react';
import { Container } from './components/styled/StyledContainer';
import GlobalStyles from './components/styled/GlobalStyles';

import Theme from './Theme';
import Header from './components/Header';
import Timer from './components/Timer';
import CurrentTask from './components/CurrentTask';
import Task from './components/Task';
import TaskEdit from './components/TaskEdit';


function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Header />
    <Container>
      <Timer />
      <CurrentTask num={2} title={'PMDR - Making Styled Compents Skeleton'}/>
      <Task title='Making Shit Happen' pmdrs={[2, 6]}/>
      <TaskEdit title='Designing Pomodoro Timer' />
    </Container>
    </Theme>
  )
}

export default App;
