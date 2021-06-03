import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  margin-top: ${RFValue(26)}px;
`;

export const Label = styled.Text`
  font-family: ${({ theme })=> theme.text.medium};
  font-size: ${RFValue(14)}px;
  color: #4E3975;
  margin-bottom: 8px;
`;

export const Error = styled.Text`
  color: ${({ theme })=> theme.colors.error};
  margin-bottom: ${RFValue(4)}px;
`;

export const FormInput = styled(TextInput)`
  padding: ${RFValue(15)}px;
  border-radius: 10px;
  border: 1px solid ${({ theme })=> theme.colors.text};
  color: ${({ theme })=> theme.colors.background};
  background-color: #FFFFFF;
  font-size: ${(RFValue(14))}px;
`;