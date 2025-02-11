'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useWishlist } from '@/contexts/WishlistContext'

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xxl};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoContainer = styled.div`
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  text-transform: uppercase;
  
  svg {
    width: 34px;
    height: 34px;
  }
`

const NavLinks = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.98);
    padding: ${({ theme }) => theme.spacing.xl};
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    animation: slideDown 0.3s ease;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  position: relative;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-weight: 500;
  transition: all 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scaleX(${({ $isActive }) => ($isActive ? 1 : 0)});
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    &:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`

const ShopButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`

const WishlistIcon = styled(Link)`
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const WishlistCounter = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/lookbook', label: 'Lookbook' },
  { path: '/news', label: 'News' },
  { path: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { state: wishlistState } = useWishlist()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleShopNow = () => {
    router.push('/collections')
    setIsMenuOpen(false)
  }

  return (
    <Nav style={{ 
      boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
      transform: `translateY(${scrolled ? '0' : '0'})`,
    }}>
      <NavContainer>
        <Link href="/" passHref>
          <LogoContainer>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 3L9 9h6l-3-6z" />
              <path d="M9 9l-6 6h18l-6-6H9z" />
              <path d="M4.5 15L3 19.5h18L19.5 15h-15z" />
              <circle cx="12" cy="6" r="1" fill="currentColor" />
              <circle cx="7.5" cy="12" r="1" fill="currentColor" />
              <circle cx="16.5" cy="12" r="1" fill="currentColor" />
            </svg>
            ELEGANCE
          </LogoContainer>
        </Link>
        <NavLinks $isOpen={isMenuOpen}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              href={item.path}
              $isActive={pathname === item.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <WishlistIcon href="/wishlist">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {wishlistState.items.length > 0 && (
              <WishlistCounter>{wishlistState.items.length}</WishlistCounter>
            )}
          </WishlistIcon>
          <ShopButton onClick={handleShopNow}>Shop Now</ShopButton>
        </NavLinks>
        <MobileMenuButton
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '×' : '☰'}
        </MobileMenuButton>
      </NavContainer>
    </Nav>
  )
} 