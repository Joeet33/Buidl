import { ModalProps } from "../../interfaces/modalProps";

import { ModalContainer, StyledModal } from "./index.styles";

export const DisplayForm = ({ onClickClose, children }: ModalProps) => {
  return (
    <ModalContainer onClick={onClickClose}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <button onClick={onClickClose}>X</button>
        {children}
      </StyledModal>
    </ModalContainer>
  );
};
