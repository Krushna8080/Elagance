'use client'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import Layout from '@/components/layout/Layout/Layout'
import ClientProviders from '@/components/providers/ClientProviders'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/contexts/CartContext'

interface ProductImage {
  url: string
  alt: string
}

const ProductContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  margin-top: 80px;
`

const ProductContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xxl};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

const ImageGallery = styled.div`
  position: sticky;
  top: 100px;
`

const MainImage = styled(motion.div)`
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
`

const Thumbnail = styled.button<{ $isActive: boolean }>`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ProductInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.xl} 0;
`

const ProductTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: 700;
`

const ProductPrice = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-weight: 600;
`

const ProductDescription = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`

const SizeSelector = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-weight: 600;
  }
`

const SizeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
`

const SizeButton = styled.button<{ $isSelected: boolean }>`
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.primary : theme.colors.textLight};
  border-radius: 4px;
  background: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.primary : 'transparent'};
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.white : theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const AddToCartButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`

const ProductDetails = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxl};

  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-weight: 600;
  }

  ul {
    list-style: disc;
    padding-left: ${({ theme }) => theme.spacing.xl};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    
    li {
      margin-bottom: ${({ theme }) => theme.spacing.sm};
      color: ${({ theme }) => theme.colors.text};
    }
  }
`

// Mock product data
const mockProduct = {
  id: 1,
  name: 'Classic Wool Blend Coat',
  price: 299.99,
  description: 'A timeless piece crafted from premium wool blend fabric. This coat features a modern cut with traditional detailing, perfect for both casual and formal occasions.',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  images: [
    { url: '/category-1.jpg', alt: 'Classic Wool Blend Coat - Front View' },
    { url: '/category-2.jpg', alt: 'Classic Wool Blend Coat - Side View' },
    { url: '/category-3.jpg', alt: 'Classic Wool Blend Coat - Back View' },
    { url: '/category-4.jpg', alt: 'Classic Wool Blend Coat - Detail View' },
  ],
  details: [
    'Premium wool blend fabric (70% Wool, 30% Polyester)',
    'Fully lined interior',
    'Double-breasted button closure',
    'Side pockets',
    'Dry clean only',
  ],
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    setIsAddingToCart(true);
    
    try {
      addItem({
        id: mockProduct.id,
        name: mockProduct.name,
        price: mockProduct.price,
        image: mockProduct.images[0].url,
        size: selectedSize,
        quantity: 1,
      });

      // Show success message or notification
      alert('Product added to cart successfully!');
      
      // Optionally redirect to cart page
      // router.push('/cart');
    } catch (error) {
      console.error('Error adding item to cart:', error);
      alert('Failed to add item to cart. Please try again.');
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <ClientProviders>
      <Layout>
        <ProductContainer>
          <ProductContent>
            <ImageGallery>
              <MainImage>
                <motion.img
                  key={selectedImage}
                  src={mockProduct.images[selectedImage].url}
                  alt={mockProduct.images[selectedImage].alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </MainImage>
              <ThumbnailGrid>
                {mockProduct.images.map((image, index) => (
                  <Thumbnail
                    key={index}
                    $isActive={selectedImage === index}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image.url} alt={image.alt} />
                  </Thumbnail>
                ))}
              </ThumbnailGrid>
            </ImageGallery>

            <ProductInfo>
              <ProductTitle>{mockProduct.name}</ProductTitle>
              <ProductPrice>${mockProduct.price.toFixed(2)}</ProductPrice>
              <ProductDescription>
                <p>{mockProduct.description}</p>
              </ProductDescription>

              <SizeSelector>
                <h3>Select Size</h3>
                <SizeGrid>
                  {mockProduct.sizes.map((size) => (
                    <SizeButton
                      key={size}
                      $isSelected={selectedSize === size}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </SizeButton>
                  ))}
                </SizeGrid>
              </SizeSelector>

              <AddToCartButton onClick={handleAddToCart}>
                Add to Cart
              </AddToCartButton>

              <ProductDetails>
                <h3>Product Details</h3>
                <ul>
                  {mockProduct.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </ProductDetails>
            </ProductInfo>
          </ProductContent>
        </ProductContainer>
      </Layout>
    </ClientProviders>
  );
} 