import { nanoid } from "nanoid";

const tasksReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            state.map((t) => t.isEdited = false);
            return [...state, {id: nanoid(), pos: state.length + 1, title: 'Edit This Title', done: 0, all: 1, isEdited: true, isActive: false}];
        case 'TOGGLE-ACTIVE':
            state.map((t) => t.isActive = false);
            return state.map((t) => (t.id === action.payload.id) ? {...t, isActive: true } : t);
        case 'TOGGLE-EDIT':
            state.map((t) => t.isEdited = false);
            return state.map((t) => (t.id === action.payload.id) ? {...t, isEdited: true} : t);
        case 'CANCEL-EDIT': 
            return state.map((t) => (t.id === action.payload.id) ? {...t, isEdited: false} : t);
        case 'SAVE-EDIT':
            const filteredSt = state.filter((t) => t.id !== action.payload.id);
            const task = state.filter((t) => t.id === action.payload.id)[0];
            task.title = action.payload.title;
            task.all = action.payload.all;
            task.isEdited = false;
            const newState = [...filteredSt, task].sort((a, b) => a.pos - b.pos);
            return newState;
        case 'DELETE':
            return state.filter((t) => t.id !== action.payload.id);
        default:
            return state;
    }
}


export default tasksReducer;