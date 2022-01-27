import Modal from 'react-modal';
import close from '../assets/close.svg';

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function ModalComponent({isOpen, onRequestClose} : ModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="modal"
        >
        
        <button onClick={onRequestClose}>
            <img src={close} alt="btn-close" />
        </button>
        
        <h1>Modal</h1>
        </Modal>
    );
}