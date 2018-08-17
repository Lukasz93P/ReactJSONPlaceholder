import React from 'react';
import Modal from 'react-responsive-modal';

const ConfirmationModal = props => {
  const {open, close, message, onConfirm} = props;
  return (
    <div>
      <Modal className="p-4" open={open} onClose={close} center>
        <h4 className="modal-title title my-3">{message}</h4>
        <div className="row">
          <button
            type="button"
            onClick={onConfirm}
            className="btn btn-danger col-6"
          >
            Confirm
          </button>
          <button
            type="button"
            onClick={close}
            className="btn btn-primary  col-6"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ConfirmationModal;
