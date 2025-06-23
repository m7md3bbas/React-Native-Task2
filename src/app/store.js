import { configureStore } from "@reduxjs/toolkit";
import todos from "./slices/todosSlice";

const store = configureStore({
    reducer: {
        todos: todos,
    },
});

export default store;