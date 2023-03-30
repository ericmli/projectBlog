import React, { useState } from 'react'
import { View, ScrollView, TextInput, Text} from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import api from '../../service'
import Button from '../../components/Button'
import * as Yup from 'yup'
import { LoginSocial } from '../../components/loginSocial'
import { useForm, Controller } from 'react-hook-form'

export default function Register() {
  const navigation = useNavigation()
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      password: ''
    }
  })
  const onSubmit = data => console.log(data)

  function sendToAPI() {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required()
    })

    const register = {
      name,
      email,
      password
    }

    async function postLogin() {
      try {
        const validatedData = await schema.validate(register)
        api.post('/login', { name, email, password })
        console.log(validatedData)
        navigation.navigate('LOGIN')
      } catch (error) {
        console.log(error)
      }
    }
    postLogin(register)
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
          {errors.name && <Text>This is required.</Text>}

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

        <Button
          nameInput="REGISTER"
          onPress={sendToAPI}
        />

        <LoginSocial />
      </View>
    </ScrollView>
  )
}
