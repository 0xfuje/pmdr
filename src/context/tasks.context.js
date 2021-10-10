import React, {createContext, useState} from 'react';
import { nanoid } from 'nanoid';

const defTasks = [
    { id: nanoid(), title: 'Making Shit Happen', done: 6, all: 6, isEdited: false, isActive: false},
    { id: nanoid(), title: 'Designing the Crypto App', done: 0, all: 12, isEdited: false, isActive: true},
    { id: nanoid(), title: 'Building the Crypto App with React', done: 0, all: 12, isEdited: false, isActive: false},
    { id: nanoid(), title: 'Read a Design Book', done: 2, all: 10, isEdited: true, isActive: false}
];

export const TasksContext = createContext();

export function TasksProvider(props) {
    const [tasks, setTasks] = useState(defTasks)
    return (
        <TasksContext.Provider value={{tasks, setTasks}}>
            {props.children}
        </TasksContext.Provider>
    );
}