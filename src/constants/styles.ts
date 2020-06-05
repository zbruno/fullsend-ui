import { css } from '@emotion/core';
import emotionReset from 'emotion-reset';

export const GLOBAL_STYLES = css`
  ${emotionReset};
  html {
    font-family: "Nunito", "system - ui", "BlinkMacSystemFont", "-apple - system", "sans - serif";
  }
  @keyframes ripple {
    0% {
      top: 16px;
      left: 16px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 32px;
      height: 32px;
      opacity: 0;
    }
  }
`;

export const DEFAULT_TRANSITION = css`
  transition-property: none;
  transition-delay: 0s;
  transition-duration: 350ms;
  transition-timing-function: ease-in-out;
`;
