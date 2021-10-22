import { nanoid } from "nanoid";

const tasksReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            state.map((t) => t.isEdited = false);
            return [...state, {id: nanoid(), pos: state.length + 1, title: 'New Task', done: 0, all: 1, isEdited: true, isActive: false}];
        case 'ADD-TO-DONE':
            console.log('add to done');
            const active = {
                ...state.filter((t) => t.id === action.payload.id)[0],
                done: action.payload.done};
            return [...state.filter((t) => t.id !== action.payload.id), active].sort((a, b) => a.pos - b.pos);
        case 'TOGGLE-CHECK':
            console.log('toggle-check');
            state.map((t) => t.isActive = false);
            return state.map((t) => (t.id === action.payload.id) ? {...t, isChecked: !t.isChecked, isActive: false } : t);
        case 'TOGGLE-ACTIVE':
            console.log('toggle-active');
            state.map((t) => t.isActive = false);
            return state.map((t) => (t.id === action.payload.id) ? {...t, isActive: true } : t);
        case 'TOGGLE-EDIT':
            state.map((t) => t.isEdited = false);
            return state.map((t) => (t.id === action.payload.id) ? {...t, isEdited: true} : t);
        case 'CANCEL-EDIT': 
            return state.map((t) => (t.id === action.payload.id) ? {...t, isEdited: false} : t);
        case 'SAVE-EDIT':
            const taskToEdit = {
                ...state.filter((t) => t.id === action.payload.id)[0],
                title: action.payload.title,
                all: action.payload.all,
                isEdited: false};
            return [...state.filter((t) => t.id !== action.payload.id), taskToEdit].sort((a, b) => a.pos - b.pos);
        case 'DELETE':
            return state.filter((t) => t.id !== action.payload.id);
        case 'TOGGLE-SETTINGS':
            return state;
        case 'CLEAR-FINISHED':
            console.log('clear finished');
            return state;
        case 'CLEAR-POMODOROS':
            console.log('clear pomodoros');
            return state;
        case 'CLEAR-ALL':
            console.log('clear all');
            return [];
        default:
            return state;
    }
}


export default tasksReducer;