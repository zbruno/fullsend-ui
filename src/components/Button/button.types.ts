import { StandardTypes } from '../../constants/types';
import { IconName } from "@fortawesome/fontawesome-svg-core";

export type ButtonStyle = 'primary' | 'secondary';

/**
 * Button type.
 */
export type ButtonType = 'submit' | 'reset' | 'button';

export default interface ButtonProps extends StandardTypes {
  /**
   * Sets the component as disabled.
   */
  disabled?: boolean;
  /**
   * Sets the component as loading.
   */
  loading?: boolean;
  /**
   * Used to notify once clicked.
   */
  onClick?(e: React.MouseEvent<HTMLElement>): void;
  /**
   * Sets the action link children.
   */
  children: React.ReactNode;
  /**
   * Sets the button style type. By default primary.
   * @default primary
   */
  buttonStyle?: ButtonStyle;
  /**
   * Sets the button type. By default button.
   * @default button
   */
  type?: ButtonType;
  /**
   * The name of the icon to display. By default no icon is display.
   */
  iconName?: IconName;
}
