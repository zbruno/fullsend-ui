import tw from 'twin.macro'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { DEFAULT_TRANSITION } from '../../constants/styles'

import ButtonProps from './button.types'

type ButtonElementProps = Pick<
  ButtonProps,
  'buttonStyle' | 'disabled' | 'loading'
>

const primaryStyles = tw`text-white bg-purple-500 hover:bg-purple-600`
const secondaryStyles = tw`text-purple-500 bg-transparent border-purple-500 hover:text-purple-600 hover:border-purple-600`

export const ButtonElement = styled.button(
  ({ buttonStyle, disabled, loading }: ButtonElementProps) => [
    tw`relative font-semibold py-3 px-8 rounded inline-flex items-center border border-transparent text-white focus:outline-none appearance-none`,
    buttonStyle === 'primary' && primaryStyles,
    buttonStyle === 'secondary' && secondaryStyles,
    disabled &&
      tw`cursor-not-allowed bg-gray-300 text-gray-500 pointer-events-none`,
    loading &&
      css`
        ${ButtonText}, ${ButtonIcon} {
          transform: translateX(-15px);
        }
        ${ButtonLoader} {
          transform: translateX(0);
          opacity: 1;
        }
      `,
    css`
      ${DEFAULT_TRANSITION};
      transition-property: border-color, background-color, color;
    `
  ]
)

export const ButtonText = styled.span(() => [
  css`
    transform: translateX(0);
    ${DEFAULT_TRANSITION};
    transition-property: transform;
  `
])

export const ButtonIcon = styled.div`
  ${tw`fill-current mr-2`};
  ${css`
    ${DEFAULT_TRANSITION};
    transition-property: transform;
    transform: translateX(0);
  `};
`

export const ButtonLoader = styled.div(() => [
  tw`absolute inset-0 left-auto mr-4 mt-1 transition-all opacity-0`,
  css`
    ${DEFAULT_TRANSITION};
    transition-property: color, transform, opacity;
    transform: translateX(20px);
  `
])

// .btn {
//   @apply relative font-bold py-3 px-8 rounded inline-flex items-center border border-transparent;

//   &.primary{
//     @apply text-white bg-purple-500;

//     &:hover {
//       @apply bg-purple-600;
//     }
//   }

//   &.secondary {
//     @apply text-purple-500 bg-transparent border-purple-500;

//     &:hover {
//       @apply text-purple-600 border-purple-600;
//     }
//   }

//   &.disabled {
//     @apply cursor-not-allowed bg-gray-300 text-gray-500 pointer-events-none;
//   }

//   & * {
//     @apply transition-all;
//   }

//   & .btn-text {
//     transform: translateX(0);
//   }

//   & .btn-icon {
//     @apply fill-current mr-2;
//     transform: translateX(0);
//   }

//   & .btn-loader {
//     @apply absolute inset-0 left-auto mr-4 mt-2 transition-all opacity-0;
//     transform: translateX(20px);
//   }

//   &.loading {
//     & .btn-text {
//       transform: translateX(-15px);
//     }

//     & .btn-icon {
//       transform: translateX(-15px);
//     }

//     & .btn-loader {
//       @apply opacity-100;
//       transform: translateX(0);
//     }
//   }
// }
