import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import { ModalItem } from 'components/Modal/Modal';
import { useState } from 'react';

export default function ImageGalleryItem({ image }) {
  const [ showModal, setShowModal ] = useState(false);

  const toggleModal = () => {
    return setShowModal(showModal => !showModal);
  };

  const { webformatURL, largeImageURL } = image;

  return (
    <GalleryItem>
      <GalleryItemImage src={webformatURL} onClick={() => toggleModal()} />
      {showModal && (
        <ModalItem toggle={toggleModal} imgUrl={largeImageURL}></ModalItem>
      )}
    </GalleryItem>
  );
}



