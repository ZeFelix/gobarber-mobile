import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  background: #fff;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 15px;
  opacity: ${(props) => (props.past ? 0.6 : 1)};
  display: flex;
`;

export const Left = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #a8a3a2;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  color: #333;
  font-size: 14px;
  font-weight: bold;
`;

export const Time = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 3px;
`;
