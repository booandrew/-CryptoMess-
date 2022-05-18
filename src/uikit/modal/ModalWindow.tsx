import React, {FC} from 'react';
import {Modal, ModalProps} from 'react-bootstrap';
import styled from 'styled-components';
import {Typography} from '../text';

/**
 * Свойства компонента, расширяющие свойства react-bootstrap modal.
 *
 * @prop {JSX.Element | JSX.Element[] | string} [body] Тело модального окна.
 * @prop {JSX.Element | JSX.Element[] | string} [header] Заголовок модального окна.
 * @prop {JSX.Element} [footer] Футер модального окна.
 * @prop {boolean} [disableClose] Признак блокировки возможности закрытия модального окна.
 * @prop {string} [className] Имя класса.
 * @prop {string} [bodyClassName] CSS-классы тела модального окна.
 * @prop {string} [footerClassName] CSS-классы футера модального окна.
 * @prop {boolean} [showOverlay] Признак, отображать ли оверлей с прелоадером над модальным окном.
 * @prop {Function} [onClose] Колбэк на закрытие модального окна.
 */
export interface IModalWindowProps extends ModalProps {
    body?: JSX.Element | JSX.Element[] | string;
    header?: JSX.Element | JSX.Element[] | string;
    footer?: JSX.Element;
    onClose?: () => void;
}

/**
 * Компонент модального окна, использущий react-bootstrap modal.
 */
export const ModalWindow: FC<IModalWindowProps> = ({body, children, footer, header, onClose, show, ...restProps}) => (
    <StyledModal show={show} onHide={onClose ? onClose : () => {}} centered {...restProps}>
        <Modal.Header>
            <Typography>{header}</Typography>
        </Modal.Header>
        {children ? (
            children
        ) : (
            <>
                {body && <Modal.Body>{body}</Modal.Body>}
                {footer && <Modal.Footer>{footer}</Modal.Footer>}
            </>
        )}
    </StyledModal>
);

const StyledModal = styled(Modal)`
    z-index: ${({theme}) => theme.zIndex.modal};
`;
