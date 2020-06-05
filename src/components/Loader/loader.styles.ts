import tw from 'twin.macro'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { DEFAULT_TRANSITION } from '../../constants/styles'
import { LoaderStyles } from './loader.types'

type LoaderProps = {
  loaderStyle: LoaderStyles
}

export const LoaderElement = styled.div(({ loaderStyle }: LoaderProps) => [
  tw`inline-block h-6 w-6 relative`,
  loaderStyle === 'primary' &&
    css`
      ${InnerLoaderElement} {
        ${tw`border-white`}
      }
    `,
  loaderStyle === 'secondary' &&
    css`
      ${InnerLoaderElement} {
        ${tw`border-purple-500`}
      }
    `,
  loaderStyle === 'disabled' &&
    css`
      ${InnerLoaderElement} {
        ${tw`border-gray-500`}
      }
    `
])

export const InnerLoaderElement = styled.div(() => [
  tw`absolute opacity-100 border-2 border-solid rounded-full`,
  css`
    ${DEFAULT_TRANSITION};
    transition-property: border-color;
    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    &:last-of-type {
      animation-delay: 0.5s;
    }
  `
])
