import React, { useMemo } from 'react';
import { DatePickerAndroid } from 'react-native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

export function DateInput({ date, onChange }) {
  const dateFormated = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  async function handleOpenPicker() {
    const { action, year, month, day } = await DatePickerAndroid.open({
      mode: 'spinner',
      date,
    });

    if (action === DatePickerAndroid.dateSetAction) {
      const selectedDate = new Date(year, month, day);

      onChange(selectedDate);
    }
  }

  return (
    <S.Container>
      <S.DateButton onPress={handleOpenPicker}>
        <Icon name="event" color="#fff" size={20} />
        <S.DateText>{dateFormated}</S.DateText>
      </S.DateButton>
    </S.Container>
  );
}
