import styled from 'styled-components'
import {
  dark,
  xLightGray,
  accent,
  white,
} from './colors'
import { accompanyingFont } from './fonts'
import { basePadding } from './spacing'
import fontScale from './fontScale'

const Label = styled.label`
  font-family: ${accompanyingFont};
  font-size: ${fontScale.h5};
  color: ${dark};
  font-weight: bold;
`;

const Input = styled.input`
  padding: 1em 0;
  border-radius: 0;
  border: none;
  margin-bottom: 1em;
  width: 100%;
  border-bottom: 1px solid ${xLightGray};

  &:focus {
    outline: none;
    background: white;
    border-bottom: 2px solid ${accent};
  }

  &:active {
    background: white;
    border-bottom: 2px solid ${accent};
  }

  &:active {
    border-bottom: 2px solid ${accent};
  }
`;

const Container = styled.section`
  display: flex;
  width: 100%;
  max-width: 900px;
  border-radius: 2px;
  background: ${white};
  box-shadow: 0 2px 4px #00000017;
  margin-bottom: 2em;
  flex-direction: column;
  padding: ${basePadding};
`

const TextArea = styled.textarea`
  padding: 1em;
  border-radius: 0;
  border: none;
  margin-bottom: 1em;
  width: 100%;
  border-bottom: 1px solid ${xLightGray};
  background: ${xLightGray};

  &:focus {
    outline: none;
    background: white;
    border-bottom: 2px solid ${accent};
  }

  &:active {
    background: white;
    border-bottom: 2px solid ${accent};
  }

  &:active {
    border-bottom: 2px solid ${accent};
  }
`

export {
  Container,
  Input,
  Label,
  TextArea
}
