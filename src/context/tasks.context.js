import React, {createContext, useReducer, useState, useEffect} from 'react';
import { nanoid } from 'nanoid';
import tasksReducer from '../reducers/tasks.reducer';

const defTasks = [
    { id: nanoid(), pos: 1, title: 'Default Task', done: 0, all: 2, isEdited: false, isActive: false, isChecked: false},
];




export const TasksContext = createContext();

export function TasksProvider(props) {
    const [tasks, taskDispatch] = useReducer(tasksReducer, defTasks, () => {
        const localData = localStorage.getItem('tasks');
        return localData ? JSON.parse(localData) : defTasks;
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