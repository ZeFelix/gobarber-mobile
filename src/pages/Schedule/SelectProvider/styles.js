import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ProviderList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
  horizontal: false,
})`
  margin-top: 60px;
  padding: 0 20px;
`;

export const Provider = styled(RectButton)`
  align-items: center;
  background: #fff;
  border-radius: 4px;
  flex: 1;
  padding: 20px;
  margin: 0 10px 20px;
`;

export const Avatar = styled.Image`
  border-radius: 40px;
  background: #333;
  height: 80px;
  width: 80px;
`;

export const Name = styled.Text`
  color: #333;
  font-size: 14px;
  font-weight: bold;
  margin-top: 15px;
  text-align: center;
`;
