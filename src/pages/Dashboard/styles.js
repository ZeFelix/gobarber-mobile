import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  align-self: center;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { padding: 30 },
  showsVerticalScrollIndicator: false,
})``;
