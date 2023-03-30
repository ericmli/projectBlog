import React, { useContext, useEffect } from 'react'
import { Text, View, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native'
import styles from './styles'
import Button from '../../components/Button'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { LoginSocial } from '../../components/loginSocial'
import { useForm, Controller } from 'react-hook-form'
import { AuthContext } from '../../service/auth'
import api from '../../service'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({ navigation }) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      password: ''
    }
  })

  const onSubmit = async input => {
    const formInput = {
      name: input.name,
      password: input.password
    }

    try {
      const response = await api.get(`login?email=${formInput.name}&${formInput.password}`)
      const token = response.data
      if (response.data.length !== 0) {
        login(token)
        navigation.navigate('sendHome')
      } else {
        console.log('Login invalido')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const { login } = useContext(AuthContext)

  useEffect(() => {
    autoLogin()
  }, [])

  const autoLogin = async () => {
    try {
      const token = await AsyncStorage.getItem('token')
      if (token !== 0) {
        await AsyncStorage.setItem('token', token)
        navigation.replace('sendHome')
      }
    } catch (error) {
      console.log('Token inexistente !')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.title}>Welcome back</Text>
          <Text>Sign in with your account</Text>

          <Text style={styles.textTopInput}>E-mail</Text>
          <Controller
            name="name"
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.name && <Text style={styles.error}>E-mail Invalid</Text>}

          <Text style={styles.textTopInput}>Password</Text>
          <Controller
            name="password"
            control={control}
            rules={{
              required: true,
              maxLength: 100
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry
              />
            )}
          />
          {errors.password && <Text style={styles.error}>Password Invalid</Text>}

          <Button
            nameInput={'LOGIN'}
            onPress={handleSubmit(onSubmit)}
          />

          <View style={styles.containerReset}>
            <Text style={{ color: '#252525' }}>Forget your password?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Reset Password')
              }}
            >
              <Text style={styles.textReset}>Reset Here</Text>
            </TouchableOpacity>
          </View>
          <LoginSocial />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
