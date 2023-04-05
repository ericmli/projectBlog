/* eslint-disable no-undef */
import React from 'react'
import { Text, View, TouchableWithoutFeedback, Keyboard, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles'
import Button from '../../components/Button'
import { LoginSocial } from '../../components/loginSocial'
import { useForm, Controller } from 'react-hook-form'
import { AuthContext } from '../../service/auth'
import api from '../../service'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function Login({ navigation }) {
  const { login } = React.useContext(AuthContext)
  const [alert, setAlert] = React.useState('')

  const schema = yup.object().shape({
    name: yup.string().email('Please enter valid email').required('Email Address is Required'),
    password: yup.string().min(6, ({ min }) => `Password must be at least ${min} characters`).required('Password is required')
  })

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = async input => {
    const formInput = {
      name: input.name,
      password: input.password
    }

    try {
      const response = await api.get(`login?email=${formInput.name}&&password=${formInput.password}`)
      const token = response.data
      if (response.data.length !== 0) {
        login(token)
        navigation.navigate('sendHome')
      } else {
        setAlert('E-mail or Password Invalid')
      }
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
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
      <ScrollView style={styles.container}>
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
                onSubmitEditing={() => { input2.focus() }}
              />
            )}
          />
          {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

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
                ref={ref => { input2 = ref }}
                onKeyPress={handleSubmit()}
              />
            )}
          />
          {errors.password && <Text style={styles.error}>{errors.password.message }</Text>}
          <Text style={styles.error}>{alert}</Text>

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
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}
