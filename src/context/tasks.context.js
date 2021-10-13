import React, {createContext, useReducer} from 'react';
import { nanoid } from 'nanoid';
import tasksReducer from '../reducers/tasks.reducer';

const defTasks = [
    { id: nanoid(), pos: 1, title: 'Making Shit Happen', done: 6, all: 6, isEdited: false, isActive: false, isChecked: false},
    { id: nanoid(), pos: 2, title: 'Designing the Crypto App', done: 0, all: 12, isEdited: false, isActive: true, isChecked: false},
    { id: nanoid(), pos: 3, title: 'Building the Crypto App with React', done: 0, all: 12, isEdited: false, isActive: false, isChecked: false},
    { id: nanoid(), pos: 4, title: 'Read a Design Book', done: 2, all: 10, isEdited: true, isActive: false, isChecked: false}
];



export const TasksContext = createContext();

export function TasksProvider(props) {
    const [tasks, taskDispatch] = useReducer(tasksReducer, defTasks);
    return (
        <TasksContext.Provider value={{tasks, taskDispatch}}>
            {props.children}
        </TasksContext.Provider>
    );
}