import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  align-items: center;
  background: #3b9eff;
  border-radius: 4px;
  justify-content: center;
  height: 46px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
