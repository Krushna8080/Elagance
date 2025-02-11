'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface FilterSidebarProps {
  filters: {
    category: string
    priceRange: [number, number]
    colors: string[]
    sizes: string[]
    sort: string
  }
  onFilterChange: (filters: any) => void
}

const Sidebar = styled.aside`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  height: fit-content;
  position: sticky;
  top: 100px;

  @media (max-width: 1024px) {
    position: relative;
    top: 0;
  }
`

const FilterSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  &:last-child {
    margin-bottom: 0;
  }
`

const FilterTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
`

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  input {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`

const RangeContainer = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.sm};
`

const RangeSlider = styled.input`
  width: 100%;
  margin: ${({ theme }) => theme.spacing.md} 0;
`

const RangeValues = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
`

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32px, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};
`

const ColorButton = styled.button<{ $color: string; $isSelected: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.primary : 'transparent'};
  background-color: ${({ $color }) => $color};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 2px;

  &:hover {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ $color }) => $color};
  }
`

const SizeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45px, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};
`

const SizeButton = styled.button<{ $isSelected: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: 4px;
  border: 1px solid ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.primary : theme.colors.textLight};
  background: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.primary : 'transparent'};
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.white : theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ $isSelected, theme }) =>
      $isSelected ? theme.colors.white : theme.colors.primary};
  }
`

const ClearFilters = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.textLight};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: ${({ theme }) => theme.spacing.xl};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`

const categories = [
  { id: 'all', label: 'All Collections' },
  { id: 'spring', label: 'Spring' },
  { id: 'summer', label: 'Summer' },
  { id: 'autumn', label: 'Autumn' },
  { id: 'winter', label: 'Winter' },
]

const colors = [
  { id: 'black', value: '#000000', label: 'Black' },
  { id: 'white', value: '#FFFFFF', label: 'White' },
  { id: 'blue', value: '#0000FF', label: 'Blue' },
  { id: 'red', value: '#FF0000', label: 'Red' },
]

const sizes = ['XS', 'S', 'M', 'L', 'XL']

export function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const handleCategoryChange = (category: string) => {
    onFilterChange({ category });
  };

  const handlePriceChange = (value: string) => {
    const price = parseInt(value);
    onFilterChange({ priceRange: [0, price] });
  };

  const handleColorToggle = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter(c => c !== color)
      : [...filters.colors, color];
    onFilterChange({ colors: newColors });
  };

  const handleSizeToggle = (size: string) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter(s => s !== size)
      : [...filters.sizes, size];
    onFilterChange({ sizes: newSizes });
  };

  const handleClearFilters = () => {
    onFilterChange({
      category: 'all',
      priceRange: [0, 1000],
      colors: [],
      sizes: [],
      sort: 'newest'
    });
  };

  return (
    <Sidebar>
      <FilterSection>
        <FilterTitle>Categories</FilterTitle>
        <CheckboxGroup>
          {categories.map(category => (
            <CheckboxLabel key={category.id}>
              <input
                type="radio"
                name="category"
                checked={filters.category === category.id}
                onChange={() => handleCategoryChange(category.id)}
              />
              {category.label}
            </CheckboxLabel>
          ))}
        </CheckboxGroup>
      </FilterSection>

      <FilterSection>
        <FilterTitle>Price Range</FilterTitle>
        <RangeContainer>
          <RangeSlider
            type="range"
            min="0"
            max="1000"
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceChange(e.target.value)}
          />
          <RangeValues>
            <span>$0</span>
            <span>${filters.priceRange[1]}</span>
          </RangeValues>
        </RangeContainer>
      </FilterSection>

      <FilterSection>
        <FilterTitle>Colors</FilterTitle>
        <ColorGrid>
          {colors.map(color => (
            <ColorButton
              key={color.id}
              $color={color.value}
              $isSelected={filters.colors.includes(color.id)}
              onClick={() => handleColorToggle(color.id)}
              aria-label={`Select ${color.label}`}
            />
          ))}
        </ColorGrid>
      </FilterSection>

      <FilterSection>
        <FilterTitle>Sizes</FilterTitle>
        <SizeGrid>
          {sizes.map(size => (
            <SizeButton
              key={size}
              $isSelected={filters.sizes.includes(size)}
              onClick={() => handleSizeToggle(size)}
            >
              {size}
            </SizeButton>
          ))}
        </SizeGrid>
      </FilterSection>

      <ClearFilters onClick={handleClearFilters}>
        Clear All Filters
      </ClearFilters>
    </Sidebar>
  );
} 