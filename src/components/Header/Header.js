import React from "react";
import styled from "styled-components/macro";

import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import Icon from "../Icon";
import MobileMenu from "../MobileMenu";
import { QUERIES } from "../../constants";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Icons>
          <Icon id="shopping-bag" strokeWidth={2} />
          <Icon id="search" strokeWidth={2} />
          <Icon
            id="menu"
            strokeWidth={2}
            onClick={() => setShowMobileMenu(true)}
          />
        </Icons>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <NavSide />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.mobile} {
    padding-inline: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 14vw - 1.5rem, 3rem);
  margin: 0 3rem;
  margin-right: clamp(0.5rem, 14vw - 1.5rem, 3rem);

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const Icons = styled.div`
  height: 1.5rem;
  flex-shrink: 0;
  display: none;
  align-self: center;
  gap: 2rem;

  @media ${QUERIES.tabletAndDown} {
    display: flex;
  }
`;

const NavSide = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
