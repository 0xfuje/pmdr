
import React from 'react';

import { TimerProvider } from './context/timer.context';
import { TasksProvider } from './context/tasks.context';

import Timer from './components/Timer';
import CurrentTask from './components/CurrentTask';
import Tasks from './components/Tasks';
import Popup from './components/Popup';



function Main() {
  return (
    <>
    <TimerProvider>
      <Timer />
      <Popup/>
    </TimerProvider>
    <TasksProvider>
      <CurrentTask />
      <Tasks  />
    </TasksProvider>
    </>
  )
}

export default Main;
