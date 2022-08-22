import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { Button } from "@mui/material";

export const StyledCard = styled(Card)`
  padding: 3vw;
  display: flex;
  flex-direction: row;
  margin-top: 5vh;
`;

export const StyledList = styled.div`
  list-style: none;
  width: 50vw;
  padding: 1vw;
  overflow-y: auto;
  border-style: solid;
  border-color: black;
  max-height: 20vh;
    word-wrap: break-word;
`;

export const StyledButton = styled(Button)`
  background-color: black;
  border-color: black;
  color: white;
  font-family: "Oswald";
  :hover {
    background-color: rgba(60, 60, 60, 0.75);
    border-color: rgba(60, 60, 60, 0.75);
    color: white;
  }
`;

export const FlexBox1 = styled.div`
  display: flex;
  padding-right: 7vw;
  flex-direction: column;
`;

export const FlexBox2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexBox3 = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1vh;
`;

export const FlexBox4 = styled.div`
  text-align: center;
  padding-bottom: 5vh;
  font-weight: bold;
  font-size: 4vh;
`;
