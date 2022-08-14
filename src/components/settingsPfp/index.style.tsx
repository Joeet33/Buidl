import styled from "styled-components";
import { PfpSelectProps } from "../../interfaces/stylePfpSelect";

export const PfpContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 30px;
`;

export const PfpSelection = styled.img<PfpSelectProps>`
  border-radius: 50%;
  margin-top: 10px;
  width: 110px;
  height: 110px;
  border: ${(props) =>
    props.active ? "5px solid #1da1f2" : "4px solid black"};
  cursor: ${(props) => (props.active ? "normal" : "pointer")};
  :hover {
    opacity: ${(props) => (props.active ? "100%" : "60%")};
  }
`;
