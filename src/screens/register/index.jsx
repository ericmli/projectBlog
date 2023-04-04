import React from 'react'
import { View, ScrollView, TextInput, Text } from 'react-native'
import styles from './styles'
import api from '../../service'
import Button from '../../components/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { LoginSocial } from '../../components/loginSocial'
import { useForm, Controller } from 'react-hook-form'

export default function Register({ navigation }) {
  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),

    email: yup.string().email('Please enter valid email').required('Email Address is Required'),

    password: yup.string().min(6, ({ min }) => `Password must be at least ${min} characters`).required('Password is required'),

    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Password are not the Same')
  })

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = async input => {
    const register = {
      name: input.name,
      email: input.email,
      password: input.password
    }

    async function postLogin() {
      try {
        const validatedData = await schema.validate(register)
        api.post('/login', register)
        console.log(validatedData)
        navigation.navigate('LOGIN')
      } catch (error) {
        console.log(error)
      }
    }
    postLogin()
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>

        <Text style={styles.textTopInput}>Username</Text>
        <Controller
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
          name="name"
        />
        {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

        <Text style={styles.textTopInput}>E-mail</Text>
        <Controller
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
          name="email"
        />
        {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

        <Text style={styles.textTopInput}>Password</Text>
        <Controller
          control={control}
          rules={{
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
          name="password"
        />
        {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

        <Text style={styles.textTopInput}>Confirm Password</Text>
        <Controller
          control={control}
          rules={{
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
          name="confirmPassword"
        />
        {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword.message}</Text>}

        <Button
          nameInput="REGISTER"
          onPress={handleSubmit(onSubmit)}
        />

        <LoginSocial />
      </View>
    </ScrollView>
  )
}
