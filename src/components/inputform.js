import { Alert, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/slices/todosSlice";
import { v4 as uuidv4 } from 'uuid';

const TodoForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (!title.trim()) {
            setError("Title is required.");
            Alert.alert("Error", "Title is required.");
            return;
        }
        if (!description.trim()) {
            setError("Description is required.");
            Alert.alert("Error", "Description is required.");
            return;
        }

        const todo = {
            id: uuidv4(),
            title: title.trim(),
            description: description.trim(),
            completed: false,
        };

        dispatch(addTodo(todo));
        setTitle("");
        setDescription("");
        setError("");
    };

    return (
        <>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TextInput
                placeholder="Enter title"
                style={styles.input}
                onChangeText={(val) => setTitle(val)}
                value={title}
            />

            <TextInput
                placeholder="Enter description"
                style={styles.input}
                onChangeText={(val) => setDescription(val)}
                value={description}
            />

            <TouchableOpacity
                style={styles.submitBtn}
                activeOpacity={0.7}
                onPress={handleSubmit}
            >
                <Text style={{ ...styles.text, fontWeight: "bold" }}>Save</Text>
            </TouchableOpacity>
        </>
    );
};

export default TodoForm;