import React, { useMemo, useState } from 'react';
import { Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

export function DateInput({ date, onChange }) {
  const [localDate, setDate] = useState(date || new Date());
  const [show, setShow] = useState(false);

  const dateFormated = useMemo(
    () => format(localDate, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [localDate]
  );

  const handleChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    onChange(currentDate);
  };

  return (
    <S.Container>
      <S.DateButton
        onPress={() => {
          setShow(true);
        }}
      >
        <Icon name="event" color="#fff" size={20} />
        <S.DateText>{dateFormated}</S.DateText>
      </S.DateButton>
      {show && (
        <DateTimePicker
          timeZoneOffsetInMinutes={0}
          value={date}
          mode="date"
          is24Hour
          display="default"
          onChange={handleChange}
          locale={pt}
        />
      )}
    </S.Container>
  );
}

DateInput.defaultProps = {
  date: null,
};

DateInput.propTypes = {
  date: PropTypes.instanceOf(Date),
};
