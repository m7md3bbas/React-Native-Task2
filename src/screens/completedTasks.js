import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import TodoItem from '../components/todoItem';
import { useSelector } from 'react-redux';

const CompletedTasks = () => {

    const completedTasks = useSelector((state) => state.todos.todos.map((todo) => todo.completed));
    return (
        <View>

        </View>
    );
};

export default CompletedTasks;