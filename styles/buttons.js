import styled, { css } from 'styled-components'
import { buttonFont } from './fonts'
import { dark, primary, white, gray4 } from './colors'
import { lighten } from 'polished'
import fontScale from './fontScale'

const Button = styled.button`
  background: ${gray4};
  color ${white};
  border: none;
  font-family: ${buttonFont};
  font-size: ${fontScale.h6};
  min-height: 35px;
  min-width: 137px;
  text-transform: uppercase;
  border-radius: 2px;
  line-height: 1;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${lighten(0.1, gray4)};
  }

  ${props =>
    props.light &&
    css`
      background: white;
      border-color: white;
      color: ${dark};

      &:hover {
        background: #EFEFEFEF;
      }
    `}

  ${props =>
    props.primary &&
    css`
      background: ${primary};
      border: 1px solid ${primary};
      color: ${white};

      &:hover {
        background: ${lighten(0.1, primary)};
      }
    `}

  ${props =>
    props.bigText &&
    css`
      font-size: ${fontScale.base};
      text-transform: capitalize;
    `}
  ${props =>
    props.width === 'full' &&
    !props.desktop &&
    css`
      width: 100%;
      max-width: 100%;
    `}

  ${props =>
    props.buttonWidth === 'full' &&
    css`
      width: 100%;
      max-width: 100%;
    `}

  &:disabled {
    background: ${lighten(0.1, primary)};
  }

  ${props =>
    props.marginTop &&
    css`
      margin-top: 1rem;
    `}
`

export { Button }
