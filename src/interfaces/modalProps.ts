import React from "react";

export interface ModalProps {
  onClickClose: () => void;
  children:React.ReactNode;
}