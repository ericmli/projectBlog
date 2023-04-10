import React from 'react'
import { View, TextInput, TextError, TextTopInput, HidePassword } from './styles'
import { Controller } from 'react-hook-form'

export function Password({ name, errors, control, placeholder }) {
  const [hide, setHide] = React.useState(true)

  return (
    <View>
      <TextTopInput>{placeholder}</TextTopInput>
      <View>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={hide}
            />
          )}
        />
        <HidePassword
        onPress={() => setHide(!hide)}>{
          hide ? 'Show' : 'Hide'
        }</HidePassword>
      </View>
      {errors[name] && <TextError>{errors[name].message}</TextError>}
    </View>
  )
}
