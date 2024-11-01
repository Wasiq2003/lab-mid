import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ title, handlePress }) => {
    return (
        <TouchableOpacity onPress={handlePress}
            className='bg-gray-500 w-full rounded-full h-12 items-center justify-center mt-4'>
            <Text className='text-lg font-semibold'>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button