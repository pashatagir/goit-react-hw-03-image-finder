import ImageGalleryItem from 'components/ImageGalleryItem';
import { GalleryContainer } from './ImageGallery.styled';

const ImageGallery = ({ images }) => (
  <GalleryContainer>
    {images.map(({ id, webformatURL, tags, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        tags={tags}
      />
    ))}
  </GalleryContainer>
);

export default ImageGallery;
