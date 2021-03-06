
import React from 'react';

import { TimerProvider } from './context/timer.context';
import { TasksProvider } from './context/tasks.context';

import Header from './components/Header';
import { Container } from './components/styled/StyledContainer';
import Timer from './components/Timer';
import CurrentTask from './components/CurrentTask';
import Tasks from './components/Tasks';


function Main() {
  return (
    <TimerProvider>
    <TasksProvider>
      <Header />
      <Container>
        <Timer />
        <CurrentTask />
        <Tasks  />
      </Container>
    </TasksProvider>
    </TimerProvider>
  )
}

export default Main;
