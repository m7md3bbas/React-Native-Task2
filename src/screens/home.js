
import { Text, View } from 'react-native';
import TodoForm from '../components/inputform';
import StatusTodos from '../components/statusTodos';
import { styles } from '../../styles';
export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 35, fontWeight: "bold", marginBottom: 19 }}>
                Todo App
            </Text>
            <TodoForm />
            <View style={styles.dividerLine} />
            <StatusTodos />
        </View>
    );
}

