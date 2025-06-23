import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import TodoItem from '../components/todoItem';

const CompletedTasks = () => {

    const [completedTasks, setCompletedTasks] = useState([]);


    useEffect(() => {
        const fetchCompletedTasks = async () => {
            try {
                const storedTasks = await AsyncStorage.getItem('todos');
                if (storedTasks) {
                    setCompletedTasks(JSON.parse(storedTasks));
                }
            } catch (error) {
                console.error('Failed to fetch completed tasks from storage:', error);
            }
        };

        fetchCompletedTasks();
    }, []);

    return (
        <View>
            {completedTasks.length > 0 ? (
                completedTasks.filter((task) => task.completed).map((task) => (
                    <TodoItem key={task.id} todo={task} />
                ))
            ) : (
                <Text>No completed tasks</Text>
            )}
        </View>
    );
};

export default CompletedTasks;