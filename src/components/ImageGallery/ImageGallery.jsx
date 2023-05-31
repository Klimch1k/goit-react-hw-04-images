import { ImageList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';


const ImageGallery = ({ images, toggle, showModal }) => {
  return (
    <ImageList>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            image={image}
            toggle={toggle}
            showModal={showModal}
          >
         
          </ImageGalleryItem>
        );
      })}
    </ImageList>
  );
};

export default ImageGallery;
