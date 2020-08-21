import styled, { css } from "styled-components";
import { pageWidth } from "../../styles/spacing";
import { Button as BaseButton } from "../../styles/buttons";
import { accentFont } from "../../styles/fonts";
import { light, dark } from "../../styles/colors";

const List = styled.ul`
  list-style: none;
  margin: 0;
`;
const Item = styled.li`
  display: inline;
  margin-left: 2rem;
  img {
    vertical-align: middle;
  }

  @media (max-width: ${pageWidth}) {
    display: none;
  }
  ${(props) =>
    props.md &&
    css`
      display: none;
      @media (max-width: ${pageWidth}) {
        display: inline;
      }
    `}
`;

const NavLink = styled.a`
  font-family: ${accentFont};
  color: ${dark};
`;

const Container = styled.nav`
  width: 100%;
  background: ${light};
  box-shadow: 0px 13px 40px rgba(0, 0, 0, 0.3), 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: ${pageWidth};
  padding: 1rem 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${pageWidth}) {
    padding: 1rem;
  }
`;

const Button = styled(BaseButton)``;

const DrawerIcon = styled.span`
  height: 30px;
  width: 30px;
  :before {
    content: "\2261";
  }
`;

export { Container, InnerContainer, Button, List, Item, NavLink, DrawerIcon };
