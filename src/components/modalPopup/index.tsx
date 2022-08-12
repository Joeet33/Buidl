import { ModalProps } from "../../interfaces/modalProps";

import { ModalContainer, StyledCard } from "./index.styles";
import { StyledClose } from "./index.muistyles";

export const DisplayForm = ({ onClickClose, children }: ModalProps) => {
  return (
    <ModalContainer onClick={onClickClose}>
      <StyledCard onClick={(e) => e.stopPropagation()}>
        <StyledClose size="large" variant="text" onClick={onClickClose}>
          X
        </StyledClose>
        {children}
      </StyledCard>
    </ModalContainer>
  );
};
