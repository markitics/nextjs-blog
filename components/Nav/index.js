import {
  Container,
  InnerContainer,
  Button,
  List,
  Item,
  NavLink,
} from "./styles";
import Link from "next/link";
import Logo from "../Logo";
import Icon from "../Icons";
import Drawer from "../Drawer";
import useNav from "./hooks";
import useModal from "../../contexts/modal/hooks";
import { routes } from "../../routes";

const Nav = () => {
  const { open, close, isOpen } = useNav();
  const { openModal } = useModal();

  return (
    <>
      <Container>
        <InnerContainer>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <List>
            {routes.map((route) => (
              <Link key={route.name} href={route.route}>
                <Item>
                  <NavLink>{route.name}</NavLink>
                </Item>
              </Link>
            ))}
            <Item>
              <Button primary onClick={() => openModal()}>
                Log in
              </Button>
            </Item>
            <Item onClick={() => open()} md>
              <Icon variant="menu" />
            </Item>
          </List>
        </InnerContainer>
      </Container>
      <Drawer close={close} isOpen={isOpen} />
    </>
  );
};

export default Nav;
