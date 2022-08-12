import styled from "styled-components";
import Card from "@mui/material/Card";

export const DisplayProfileContainer = styled(Card)`
  padding-left: 2vw;
  padding-right: 2vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
  border-radius: 1vw;
  margin-bottom: 2vh;
`;

export const FlexBox1 = styled.div`
  padding-top: 1vh;
  text-align: center;
`;

export const FlexBox2 = styled.div`
  display: flex;

  div {
    padding-top: 2vh;
    padding-left: 2vw;
  }
`;

export const FlexBox3 = styled.div`
  display: flex;
  padding-top: 3vh;
`;

export const FlexBox4 = styled.div`
  position: relative;
`;

export const BtnContainer = styled.div`
  margin-left: auto;
`;
