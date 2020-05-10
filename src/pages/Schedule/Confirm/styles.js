import styled from 'styled-components/native';
import { Button } from '~/components/shared';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0 30px;
`;

export const Avatar = styled.Image`
  border-radius: 60px;
  height: 120px;
  width: 120px;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  color: #fff;
`;

export const Time = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
  margin-top: 4px;
`;

export const SubmitButton = styled(Button)`
  align-self: stretch;
  margin-top: 20px;
`;
