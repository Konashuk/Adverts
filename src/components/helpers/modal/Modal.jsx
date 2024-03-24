import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../../redux/slice';
import ModalCart from '../modalCart/ModalCart';
import { selectModal } from '../../../redux/selectors';
import { useEffect } from 'react';

const ModalCumper = () => {
  Modal.setAppElement('#root');
  const isOpenModal = useSelector(selectModal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpenModal]);

  function closeModal() {
    dispatch(setModal(false));
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      // marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '982px',
      height: '720px',
      padding: '40px',
      border: '1px solid rgba(239, 237, 232, 0.2)',
      borderRadius: '20px',
      backgroundColor: '#fff',
    },
    overlay: {
      background: 'rgba(17, 18, 19, 0.4)',
    },
  };

  return (
    <div>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalCart />
      </Modal>
    </div>
  );
};

export default ModalCumper;
