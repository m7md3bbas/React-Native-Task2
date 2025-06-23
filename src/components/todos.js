import { View } from "react-native";
import TodoItem from "./todoItem";

const Todos = ({ todos }) => {
    return (
        <View>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </View>
    );
};

export default Todos;