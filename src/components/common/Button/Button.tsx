'use client'

import styled from 'styled-components'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
}

const StyledButton = styled.button<ButtonProps>`
  padding: ${({ size }) => {
    switch (size) {
      case 'small':
        return '0.5rem 1rem'
      case 'large':
        return '1rem 2rem'
      default:
        return '0.75rem 1.5rem'
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '0.875rem'
      case 'large':
        return '1.125rem'
      default:
        return '1rem'
    }
  }};
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ variant, theme }) =>
    variant === 'secondary' ? 'transparent' : theme.colors.primary};
  color: ${({ variant, theme }) =>
    variant === 'secondary' ? theme.colors.primary : theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background: ${({ variant, theme }) =>
      variant === 'secondary' ? theme.colors.primary : theme.colors.accent};
    border-color: ${({ variant, theme }) =>
      variant === 'secondary' ? theme.colors.primary : theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  )
} 