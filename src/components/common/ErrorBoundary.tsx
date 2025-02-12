'use client'

import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const ErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.background};
`

const Content = styled.div`
  max-width: 600px;
`

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`

const Message = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 2rem;
`

const RetryButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 1rem;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`

const HomeLink = styled(Link)`
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null
    }
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to an error reporting service
    console.error('Error caught by boundary:', error, errorInfo)
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <Content>
            <Title>Something went wrong</Title>
            <Message>
              {this.state.error?.message || 'An unexpected error occurred'}
            </Message>
            <RetryButton onClick={this.handleRetry}>
              Try Again
            </RetryButton>
            <HomeLink href="/">
              Return Home
            </HomeLink>
          </Content>
        </ErrorContainer>
      )
    }

    return this.props.children
  }
} 