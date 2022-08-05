import styled from "styled-components";
import { StyledUsername } from "../../components/displayUsername/index.styles";

export const ProfileDetails = styled.div`
  padding-top: 8vh;
  padding-left: 2vw;
  box-shadow: 0 0px 0px 0 black, 0 0px 1px 0 black;
  border-radius: 1vw;
`;

export const EditBtn = styled.button`
  margin-left: 90%;
`;

export const NameHeader = styled.div`
  div: nth-of-type(2n) {
    text-align: center;
  }
`;
