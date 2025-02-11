import styled from 'styled-components'
import Link from 'next/link'
import { useState } from 'react'

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.md};
  transition: background 0.3s ease;
`

const Nav = styled.nav`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  font-size: ${({ theme }) => theme.typography.heading.h4};
  font-weight: 600;
`

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  // Add scroll listener in useEffect...

  return (
    <HeaderContainer>
      <Nav>
        <Logo>BRAND</Logo>
        <NavLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/lookbook">Lookbook</NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  )
}

export default Header 