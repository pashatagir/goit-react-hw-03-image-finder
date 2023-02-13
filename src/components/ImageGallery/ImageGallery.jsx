import ImageGalleryItem from 'components/ImageGalleryItem';
const ImageGallery = ({ images }) => (
  <ul>
    <ImageGalleryItem images={images} />
  </ul>
);

export default ImageGallery;
