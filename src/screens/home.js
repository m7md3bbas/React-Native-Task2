
import { Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoForm from '../components/inputform';
import StatusTodos from '../components/statusTodos';
import { styles } from '../../styles';
export default function Home() {
    const [todos, setTodos] = useState([]);


    useEffect(() => {
        getDataFrmStorage();
    }, []);
    const removeTodo = async (id) => {
        try {
            const updatedTodos = todos.filter(item => item.id !== id);
            setTodos(updatedTodos);
            await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
        } catch (error) {
            console.error("Error removing todo:", error);
        }
    };
    const onSaveData = async (todo) => {
        try {
            const updatedTodos = [...todos, todo];
            setTodos(updatedTodos);
            await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
        } catch (error) {
            console.error("Error saving data", error);
        }
    };


    const getDataFrmStorage = async () => {
        try {
            const storedTodos = await AsyncStorage.getItem('todos');
            if (storedTodos) {
                setTodos(JSON.parse(storedTodos));
            }
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }




    const updatedtodo = async (id) => {
        try {
            const updatedTodos = todos.map(item => {
                if (item.id === id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            });
            setTodos(updatedTodos);
            await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 35, fontWeight: "bold", marginBottom: 19 }}>
                Todo App
            </Text>
            <TodoForm onSubmit={(todo) => onSaveData(todo)} />
            <View style={styles.dividerLine} />
            <StatusTodos data={todos} removeTodo={removeTodo} updatedtodo={updatedtodo} />
        </View>
    );
}

