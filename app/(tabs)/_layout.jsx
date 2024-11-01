import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs tabBar={options={headerShown: false}}>
        <Tabs.Screen name='home'  />
        <Tabs.Screen name='bookmark' options={{headerShown: false}} />
        <Tabs.Screen name='notification' options={{headerShown: false}} />
        <Tabs.Screen name='profile' options={{headerShown: false}} />
    </Tabs>
  )
}

export default TabsLayout