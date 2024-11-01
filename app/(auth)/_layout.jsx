import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Redirect } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

const AuthLayout = () => {
    const { isSignedIn } = useAuth()

    if (isSignedIn) {
        return <Redirect href={'/(auth)/profile'} />
    }
    return (
        <Stack >
            <Stack.Screen name='sign-in' options={{ headerShown: false }} />
            <Stack.Screen name='sign-up' options={{ headerShown: false }} />
        </Stack>
    )
}

export default AuthLayout