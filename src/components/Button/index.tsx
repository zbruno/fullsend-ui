import React from 'react';
import PropTypes from 'prop-types';

import ButtonProps from './button.types';
import { ButtonElement, ButtonIcon, ButtonText, ButtonLoader } from './button.styles';
import Icon from '../Icon';
import Loader from '../Loader';

const Button = ({
  onClick,
  disabled,
  children,
  buttonStyle,
  loading,
  type,
  iconName
}: ButtonProps) => {
  return (
    <ButtonElement
      disabled={disabled || loading}
      loading={loading}
      type={type}
      onClick={onClick}
      buttonStyle={buttonStyle}
    >
      {iconName && (
        <ButtonIcon>
          <Icon iconName={iconName} />
        </ButtonIcon>
      )}
      <ButtonText>{children}</ButtonText>
      <ButtonLoader>
        <Loader loaderStyle={loading ? 'disabled' : buttonStyle}/>
      </ButtonLoader>
    </ButtonElement>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
  buttonStyle: PropTypes.oneOf(['primary', 'secondary']),
  loading: PropTypes.bool,
  iconName: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

Button.defaultProps = {
  onClick() {},
  disabled: false,
  buttonStyle: 'primary',
  loading: false,
  type: 'button'
};

export default Button;
