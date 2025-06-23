import { View, Text } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from "../../styles";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../app/slices/todosSlice";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <View style={[styles.todoItem, { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8, margin: 10 }]}>
            <Text style={{
                fontSize: 20,
                fontWeight: "500",
                color: todo.completed ? "#155724" : "#721c64",
                ...(todo.completed && { textDecorationLine: "line-through" })
            }}>
                {todo.title}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                <Feather
                    name="trash"
                    size={20}
                    color="red"
                    onPress={() => {
                        Alert.alert(
                            "Delete Todo",
                            "Are you sure you want to delete this todo?",
                            [
                                { text: "Cancel", style: "cancel" },
                                { text: "OK", onPress: () => dispatch(removeTodo(todo.id)) },
                            ]
                        );
                    }}
                />
                <AntDesign
                    name="checkcircleo"
                    size={20}
                    color={todo.completed ? "green" : "black"}
                    onPress={() => dispatch(updateTodo(todo.id))}
                />
            </View>
        </View>
    );
}

export default TodoItem;