import styled, { css } from 'styled-components';
import { gray3, light, featured, dark, xLightGray, accent } from './colors';
import { View } from './primitives';
import { headerFont, baseFont, accentFont, accompanyingFont } from './fonts';
import fontScale from './fontScale'

const headerStyles = css`
  color: ${dark};
  text-rendering: optimizeLegibility;
  font-family: ${headerFont};
  ${props => props.lowercase && css`
    text-transform: none;
  `}

  ${props => props.xLight && css`
    color: ${light};
  `}

  ${props => props.light && css`
    color: ${xLightGray};
  `}
`;

const H1 = styled.h1`
  font-size: ${fontScale.h1};
  ${headerStyles};
`;

const H2 = styled.h2`
  font-size: ${fontScale.h2};
  ${headerStyles};
`;

const H3 = styled.h3`
  font-size: ${fontScale.h3};
  ${headerStyles};
`;

const H4 = styled.h4`
  font-size: ${fontScale.h4};
  ${headerStyles};
`;

const H5 = styled.h5`
  font-size: ${fontScale.h5};
  ${headerStyles};
  ${props => props.typeface && css`
    font-family: ${accentFont};
    text-transform: uppercase;
  `}
`;

const H6 = styled.h6`
  font-size: ${fontScale.h6};
  ${headerStyles};
`;

const Featured = styled(View)`
  background: ${featured};
  display: inline-block;
  color: ${light};
  padding: 0.5em 1em;
  line-height: 1em;
  text-transform: uppercase;
  font-size: ${fontScale.h6};
  font-family: ${accentFont};
`;

const P = styled.p`
  width: 100%;
  font-size: ${fontScale.base};
  line-height: 1.5;
  font-family: ${baseFont};

  ${props => props.light && css`
    color: ${xLightGray};
    line-height: 1.75em;
  `}

  ${props => props.typeface && css`
    font-family: ${accentFont};
  `}
`;

const PullQuoteH5 = styled(H5)`
  font-size: ${fontScale.h2};
`;

const HeadingSmall = styled(H5)`
  font-family: ${accompanyingFont};
  color: ${xLightGray};
`;

export {
  Featured,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  HeadingSmall,
  P,
  PullQuoteH5,
};
