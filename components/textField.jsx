import { View, Text } from 'react-native'
import React from 'react'

const TextField = ({lable, value, handleChangeText}) => {
    return (
        <View>
            <Text>{lable}</Text>
            <View>
                <TextField
                    value={value}
                    onChangeText={handleChangeText} />
            </View>
        </View>
    )
}

export default TextField