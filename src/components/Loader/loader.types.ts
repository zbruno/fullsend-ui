import { StandardTypes } from "../../constants/types";

export type LoaderStyles = 'primary' | 'secondary' | 'disabled';

export default interface LoaderProps extends StandardTypes {
  /**
   * Sets the color of the loader.
   */
  loaderStyle?: LoaderStyles;
}
