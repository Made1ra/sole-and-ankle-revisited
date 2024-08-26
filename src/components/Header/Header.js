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
  const isSmall = window.matchMedia(QUERIES.tabletAndDown).matches;

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        {isSmall ? (
          <Icons>
            <Icon id="shopping-bag" strokeWidth={2} />
            <Icon id="search" strokeWidth={2} />
            <Icon
              id="menu"
              strokeWidth={2}
              onClick={() => setShowMobileMenu(true)}
            />
          </Icons>
        ) : (
          <>
            <Nav>
              <NavLink href="/sale">Sale</NavLink>
              <NavLink href="/new">New&nbsp;Releases</NavLink>
              <NavLink href="/men">Men</NavLink>
              <NavLink href="/women">Women</NavLink>
              <NavLink href="/kids">Kids</NavLink>
              <NavLink href="/collections">Collections</NavLink>
            </Nav>
            <Side />
          </>
        )}
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

  @media ${QUERIES.mobile} {
    padding-inline: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const Icons = styled.div`
  height: 1.5rem;
  flex-shrink: 0;
  display: flex;
  align-self: center;
  gap: 2rem;
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
