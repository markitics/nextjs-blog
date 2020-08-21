import styled from 'styled-components'
import { dark } from './colors'
import { pageWidth } from './spacing'


const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  @media (max-width: ${pageWidth}) {
    display: flex;
    flex-direction: column;
  }
`

export { Grid }
