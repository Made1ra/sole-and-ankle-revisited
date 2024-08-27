import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <>
      {isOpen && <Background onClick={onDismiss} />}
      <Overlay isOpen={isOpen} onDismiss={onDismiss}>
        <Content aria-label="Navigation menu">
          <StyledButton onClick={onDismiss}>
            <Icon id="close" strokeWidth={2} />
            <VisuallyHidden>Dismiss modal</VisuallyHidden>
          </StyledButton>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <FooterNav>
            <FooterNavLink href="/terms">Terms and Conditions</FooterNavLink>
            <FooterNavLink href="/privacy">Privacy Policy</FooterNavLink>
            <FooterNavLink href="/contact">Contact Us</FooterNavLink>
          </FooterNav>
        </Content>
      </Overlay>
    </>
  );
};

const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(96, 100, 108, 0.8);
  z-index: 1;
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  background: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 11.25rem;
  position: relative;
  background: var(--color-white);
  width: 100%;
  height: 100%;
`;

const StyledButton = styled(UnstyledButton)`
  position: absolute;
  top: 2rem;
  right: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.38rem;
  margin: 0 2rem;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-family: Raleway;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: var(--font-weight-medium);
  line-height: normal;
  text-transform: uppercase;
  text-decoration: none;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const FooterNav = styled.footer`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 0.88rem;
  height: 4.75rem;
  margin: 2rem;
`;

const FooterNavLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
`;

export default MobileMenu;
