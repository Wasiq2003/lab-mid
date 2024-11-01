import { Text, View } from 'react-native';
import Button from '../components/Button';
import { router } from 'expo-router';

export default function App() {
    return (
        <View className='flex-1 items-center justify-center'>
            <Text>Welcome! Wasiq.</Text>
            <Button
                title='Gets Start'
                handlePress={()=>router.push('/(auth)/sign-up')}
            />
        </View>
    );
}

