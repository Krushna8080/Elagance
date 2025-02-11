'use client'

import styled from 'styled-components'

interface ProductSortProps {
  value: string
  onChange: (value: string) => void
}

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

const SortLabel = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`

const Select = styled.select`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.textLight};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover, &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }

  option {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`

const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A to Z' },
  { value: 'name-desc', label: 'Name: Z to A' },
]

export function ProductSort({ value, onChange }: ProductSortProps) {
  return (
    <SortContainer>
      <SortLabel htmlFor="sort">Sort by:</SortLabel>
      <Select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </SortContainer>
  );
} 