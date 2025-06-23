import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
    initialState: {
        todos: [],
        filteredTodos: [] // Added filteredTodos to the initial state
    },
    name: "todos",
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => { // Renamed updatedtodo to updateTodo
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        },
        filterTodo: (state, action) => {
            if (action.payload === "all") {
                state.filteredTodos = state.todos;
            } else if (action.payload === "completed") {
                state.filteredTodos = state.todos.filter((todo) => todo.completed);
            } else if (action.payload === "in-progress") {
                state.filteredTodos = state.todos.filter((todo) => !todo.completed);
            }
        }
    }
});

export const { addTodo, removeTodo, updateTodo, filterTodo } = todos.actions; // Updated export for updateTodo
export default todos;
