import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import * as S from './styles';

function InputText({ style, icon, ...rest }, ref) {
  return (
    <S.Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />}
      <S.Input {...rest} ref={ref} />
    </S.Container>
  );
}

InputText.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

InputText.defaultProps = {
  icon: null,
  style: {},
};

export const Input = forwardRef(InputText);
