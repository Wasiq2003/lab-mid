import * as React from 'react'
import { TextInput, Button, View } from 'react-native'
import { useSignUp } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import TextField from '../../components/textField'

export default function SignUpScreen() {
    const { isLoaded, signUp, setActive } = useSignUp()
    const router = useRouter()

    const [form, setForm] = React.useState({
        emailAddress: '',
        password: '',
    })

    const [pendingVerification, setPendingVerification] = React.useState(false)
    const [code, setCode] = React.useState('')

    const onSignUpPress = async () => {
        if (!isLoaded) {
            return
        }

        try {
            await signUp.create({
                emailAddress,
                password,
            })

            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

            setPendingVerification(true)
        } catch (err) {
            console.error(JSON.stringify(err, null, 2))
        }
    }

    const onPressVerify = async () => {
        if (!isLoaded) {
            return
        }

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code,
            })

            if (completeSignUp.status === 'complete') {
                await setActive({ session: completeSignUp.createdSessionId })
                router.replace('/(tabs)/profile')
            } else {
                console.error(JSON.stringify(completeSignUp, null, 2))
            }
        } catch (err) {
            console.error(JSON.stringify(err, null, 2))
        }
    }

    return (
        <View>
            {!pendingVerification && (
                <>
                    <TextField
                        lable='name'
                        autoCapitalize="none"
                        value={emailAddress}
                        placeholder="Email..."
                        handleChangeText={(e) => setForm(...form, (form.e))}
                    />
                    <TextField
                        lable='Email'
                        autoCapitalize="none"
                        value={emailAddress}
                        placeholder="Email..."
                        handleChangeText={(e) => setForm(...form, (form.e))}
                    />
                    <TextField
                        value={password}
                        placeholder="Password..."
                        secureTextEntry={true}
                        onChangeText={(e) => setForm(...form, (form.e))}
                    />
                    <Button title="Sign Up" onPress={onSignUpPress} />
                </>
            )}
            {pendingVerification && (
                <>
                    <TextInput value={code} placeholder="Code..." onChangeText={(code) => setCode(code)} />
                    <Button title="Verify Email" onPress={onPressVerify} />
                </>
            )}
        </View>
    )
}