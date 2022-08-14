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
  padding-bottom: 2vh;
  padding-left: 1.5vw;
`;

export const FlexBox2 = styled.div`
  display: flex;
  padding-right: 6vw;
`;

export const FlexBox3 = styled.div`
  display: flex;
  padding-top: 3vh;
  justify-content: center;
  padding-bottom: 1vh;
`;

export const FlexBox4 = styled.div`
  position: relative;
  flex-direction: row;
  display: flex;
  text-align: center;
  margin-left: 15vw;
  div {
    margin-right: 1vw;
    padding: 0.5vw;
    font-size: 3vh;
    border-style: solid;
    border-color: black;
  }
`;

export const BtnContainer = styled.div`
  margin: auto;
`;
