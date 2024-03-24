import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../../redux/slice';
import ModalCart from '../modalCart/ModalCart';
import { selectModal } from '../../../redux/selectors';

const ModalCumper = () => {
  Modal.setAppElement('#root');
  const isOpenModal = useSelector(selectModal);
  const dispatch = useDispatch();

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
      padding: '48px 32px',
      border: '1px solid rgba(239, 237, 232, 0.2)',
      borderRadius: '12px',
      backgroundColor: '#10100f',
    },
    overlay: {
      backgroundColor: 'rgba(239, 237, 232, 0.2)', // напівпрозорий чорний колір
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
