import { Carousel } from 'antd'
import styled from 'styled-components'

interface ProductDetailImagesProps {
  images: string[]
}

const ProductDetailImages = ({ images }: ProductDetailImagesProps) => {
  return (
    <Carousel
      style={{
        width: '100%',
        maxHeight: '360px',
        aspectRatio: '16/9',
        overflow: 'hidden',
      }}
      autoplay
    >
      {images.map((image) => (
        <ImageContainer key={image}>
          <img src={image} alt="" />
        </ImageContainer>
      ))}
    </Carousel>
  )
}

export default ProductDetailImages

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
  }
`
