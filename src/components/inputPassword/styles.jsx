import styled from 'styled-components'
import { Theme } from '../../theme/Theme'

export const View = styled.View`

`

export const TextInput = styled.TextInput`
  width: 100%;
  border-bottom-width: 0.5px;
  text-align: left;
  font-size: 16px;
  margin-top: 15px;
  color: ${Theme.colors.black[10]};
`

export const TextError = styled.Text`
  font-size: 12px;
  color: red;
`
export const TextTopInput = styled.Text`
  margin-top: 20px;
  top: 20px;
  color: ${Theme.colors.blue[20]};
`

export const HidePassword = styled.Text`
  position: absolute;
  top: 40%;
  right: 0;
  font-size: 16px;
  color: ${Theme.colors.blue[40]}
`
