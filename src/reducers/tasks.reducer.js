import { nanoid } from "nanoid";

const tasksReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            state.map((t) => t.isEdited = false);
            return [...state, {id: nanoid(), pos: state.length + 1, title: 'Edit This Title', done: 0, all: 1, isEdited: true, isActive: false}];
        case 'TOGGLE-CHECK':
            console.log('toggle-check');
            state.map((t) => t.isActive = false);
            return state.map((t) => (t.id === action.payload.id) ? {...t, isChecked: !t.isChecked, isActive: false } : t);
        case 'TOGGLE-ACTIVE':
            console.log('toggle-active');
            state.map((t) => t.isActive = false);
            return state.map((t) => (t.id === action.payload.id && t.isChecked === false) ? {...t, isActive: true } : t);
        case 'TOGGLE-EDIT':
            state.map((t) => t.isEdited = false);
            return state.map((t) => (t.id === action.payload.id) ? {...t, isEdited: true} : t);
        case 'CANCEL-EDIT': 
            return state.map((t) => (t.id === action.payload.id) ? {...t, isEdited: false} : t);
        case 'SAVE-EDIT':
            const stateWithoutEdited = state.filter((t) => t.id !== action.payload.id);
            const taskToEdit = state.filter((t) => t.id === action.payload.id)[0];
            taskToEdit.title = action.payload.title;
            taskToEdit.all = action.payload.all;
            taskToEdit.isEdited = false;
            return [...stateWithoutEdited, taskToEdit].sort((a, b) => a.pos - b.pos);
        case 'DELETE':
            return state.filter((t) => t.id !== action.payload.id);
        default:
            return state;
    }
}


export default tasksReducer;