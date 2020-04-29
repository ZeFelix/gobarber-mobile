import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

function Appoitments({ data, onCancel }) {
  const { provider, date, past, cancelable, canceled_at } = data;

  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [date]);

  function sourceImage() {
    return provider.avatar
      ? { uri: provider.avatar.url }
      : require('~/assests/img/logo.png');
  }

  return (
    <S.Container past={past}>
      <S.Left>
        <S.Avatar source={sourceImage()} />
        <S.Info>
          <S.Name>{provider.name}</S.Name>
          <S.Time>{dateParsed}</S.Time>
        </S.Info>
      </S.Left>
      {cancelable && !canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </S.Container>
  );
}

Appoitments.propTypes = {
  data: PropTypes.shape({
    provider: PropTypes.object.isRequired,
    date: PropTypes.string.isRequired,
    past: PropTypes.bool.isRequired,
    cancelable: PropTypes.bool.isRequired,
    canceled_at: PropTypes.string,
  }).isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Appoitments;
