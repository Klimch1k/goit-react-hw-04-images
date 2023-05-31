
import { useEffect } from 'react';
import { Overlay, Modal } from './Modal.styled';

export function ModalItem({ toggle, imgUrl }) {
  const handleClick = e => {
    if (e.target === e.currentTarget) {
      toggle();
    }
  };

  const handleKeydown = e => {
    if (e.code === 'Escape') {
      toggle();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  return (
    <Overlay onClick={handleClick}>
      <Modal>
        <img src={imgUrl} alt="" />
      </Modal>
    </Overlay>
  );
}
