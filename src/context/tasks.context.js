import React, {createContext, useReducer, useState, useEffect} from 'react';
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
    const [tasks, taskDispatch] = useReducer(tasksReducer, defTasks, () => {
        const localData = localStorage.getItem('tasks');
        return localData ? JSON.parse(localData) : [];
    });
    const [isSettingsDisplayed, setIsSettingsDisplayed] = useState(false);
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    return (
        <TasksContext.Provider value={{tasks, taskDispatch, isSettingsDisplayed, setIsSettingsDisplayed}}>
            {props.children}
        </TasksContext.Provider>
    );
}