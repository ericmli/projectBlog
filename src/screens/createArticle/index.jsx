import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './styles'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export function CreateArticle() {
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
  }

  // function handleSubmit() {

  // }

  return (
    <View style={styles.container}>
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
      {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}
    </View>
  )
}
