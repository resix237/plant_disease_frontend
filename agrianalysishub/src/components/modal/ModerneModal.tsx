import React, { Fragment, ReactComponentElement } from 'react';
import Modal from 'react-modal';

interface ModalProps {
    children: React.ReactNode;
    body: React.ReactNode;
    modalIsOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}
const customStyles = {
    content: {
        width: "50%",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        backgroundColor: "#3E173C",
        borderRadius: 10,
        zIndex: 99999,
        transform: 'translate(-50%, -50%)',
    },
};

function ModalComponent({ children, body, modalIsOpen, setIsOpen }: ModalProps) {
    let subtitle: any;

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000000';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <Fragment>

            <div onClick={openModal}>{children}</div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}

                contentLabel="Example Modal"
                className={" xl:w-1/2  top-1/2 absolute left-1/2 -translate-x-1/2 -translate-y-1/2  w-11/12 bg-primary py-3 px-5 rounded-lg"}
            >
                {body}
            </Modal>

        </Fragment>
    )
}

export default ModalComponent;
