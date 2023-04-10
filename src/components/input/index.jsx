import React from 'react'
import { View, TextInput, TextError, TextTopInput } from './styles'
import { Controller } from 'react-hook-form'

export function Input({ name, errors, inputRef, control, onSubmitEditing, placeholder }) {
  return (
    <View>
      <TextTopInput>{placeholder}</TextTopInput>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            ref={inputRef}
            onSubmitEditing={onSubmitEditing}
          />
        )}
      />
      {errors[name] && <TextError>{errors[name].message}</TextError>}
    </View>
  )
}
