import * as React from 'react'
import cx from 'classnames'

import { ButtonProps, ButtonStyle } from './button.types'
// import Loader from '../Loader'

const Button = ({
  buttonStyle = ButtonStyle.Primary,
  children,
  disabled = false,
  loading = false,
  'aria-label': ariaLabel,
  icon,
  onClick
}: ButtonProps) => {
  const shouldBeDisabled = disabled || loading
  const classes = cx({
    btn: true,
    primary: buttonStyle === ButtonStyle.Primary,
    secondary: buttonStyle === ButtonStyle.Secondary,
    disabled: shouldBeDisabled
  })

  return (
    <button
      disabled={disabled || loading}
      type='button'
      onClick={onClick}
      aria-label={ariaLabel}
      aria-disabled={shouldBeDisabled}
      className={classes}
    >
      {icon && <div>{icon}</div>}
      <span>{children}</span>
      <div>
        {/* <Loader loaderStyle={loading ? 'disabled' : buttonStyle} /> */}
      </div>
    </button>
  )
}

export default Button
