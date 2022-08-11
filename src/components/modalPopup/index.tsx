import { ModalProps } from "../../interfaces/modalProps";

import { ModalContainer, StyledCard } from "./index.styles";




export const DisplayForm = ({ onClickClose, children }: ModalProps) => {
  return (
    <ModalContainer onClick={onClickClose}>
      <StyledCard onClick={(e) => e.stopPropagation()}>
        <button onClick={onClickClose}>X</button>
        {children}
      </StyledCard>
    </ModalContainer>
  );
};
