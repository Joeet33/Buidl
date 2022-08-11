import { ModalProps } from "../../interfaces/modalProps";

import { FormContainer, ModalContainer } from "./index.styles";

export const DisplayForm = ({ onClickClose, children }: ModalProps) => {
  return (
    <ModalContainer onClick={onClickClose}>
      <FormContainer onClick={(e) => e.stopPropagation()}>
        <button onClick={onClickClose}>X</button>
        {children}
      </FormContainer>
    </ModalContainer>
  );
};
