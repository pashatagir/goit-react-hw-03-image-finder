const ImageGalleryItem = ({ images }) =>
  images.map(({ id, webformatURL, tags }) => (
    <li key={id}>
      <img src={webformatURL} alt={tags} />
    </li>
  ));

export default ImageGalleryItem;
