/* eslint-disable no-undef */
import React from 'react'
import { Text, View, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import styles from './styles'
import Button from '../../components/Button'
import { LoginSocial } from '../../components/loginSocial'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../service/auth'
import api from '../../service'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Input } from '../../components/input'
import { Password } from '../../components/inputPassword'

export default function Login({ navigation }) {
  const { login } = React.useContext(AuthContext)
  const [alert, setAlert] = React.useState('')

  const schema = yup.object().shape({
    name: yup.string().email('Please enter valid E-mail').required('E-mail Address is Required'),
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
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.title}>Welcome back</Text>
          <Text>Sign in with your account</Text>

          <Input
            name="name"
            placeholder="E-mail"
            control={control}
            errors={errors}
            // onSubmitEditing={() => input2Ref.current.focus()}
          />

          <Password
            name="password"
            placeholder="Password"
            control={control}
            errors={errors}
          />
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
      </View>
    </TouchableWithoutFeedback>
  )
}
