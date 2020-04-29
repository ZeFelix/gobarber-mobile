import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  appointmentRequest,
  appoitementDeleteRequest,
} from '~/store/modules/appointment/actions';

import { Background } from '~/components/shared';
import Appointment from '~/components/Appoitments';

import * as S from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const [appoitments, setAppoitments] = useState([]);
  const { data } = useSelector((state) => state.appointment);

  useEffect(() => {
    dispatch(appointmentRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setAppoitments(appoitments);
  }, [data, appoitments]);

  function handleCancel(id) {
    dispatch(appoitementDeleteRequest(id));
  }

  return (
    <Background>
      <S.Container>
        <S.Title>Agendamentos</S.Title>
        <S.List
          data={data}
          renderItem={({ item }) => (
            <Appointment
              onCancel={() => {
                handleCancel(item.id);
              }}
              data={item}
            />
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </S.Container>
    </Background>
  );
}

export const dashboardOptions = {
  tabBarLabel: 'Agendamentos',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ color }) => <Icon name="event" size={20} color={color} />,
};
