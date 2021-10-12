import { nanoid } from "nanoid";

const tasksReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            state.map((t) => t.isEdited = false);
            return [...state, {id: nanoid(), pos: state.length + 1, title: 'Edit This Title', done: 0, all: 1, isEdited: true, isActive: false}];
        case 'TOGGLE-ACTIVE':
            state.map((t) => t.isActive = false);
            return state.map((t) => (t.id === action.payload.id) ? {...t, isActive: true } : t);
        case 'DELETE':
            return state.filter((t) => t.id !== action.payload.id);
        default:
            return state;
    }
}


export default tasksReducer;