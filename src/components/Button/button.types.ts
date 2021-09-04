export enum ButtonStyle {
  Primary,
  Secondary
}

export type ButtonProps = {
  /**
   * Sets the component as disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * Sets the component as loading.
   * @default false
   */
  loading?: boolean
  /**
   * Used to notify once clicked.
   */
  onClick?(e: React.MouseEvent<HTMLElement>): void
  /**
   * Sets the action link children.
   */
  children: React.ReactNode
  /**
   * Sets the button style type. By default primary.
   * @default ButtonStyle.Primary
   */
  buttonStyle?: ButtonStyle
  /**
   * The icon to display. By default no icon will display.
   */
  icon?: React.ReactNode
  'aria-label': string
}
