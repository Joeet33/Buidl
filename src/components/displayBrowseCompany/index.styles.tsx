import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

export const StyledCard = styled(Card)`
  padding-top: 3vw;
  padding-left: 3vw;
  padding-right: 3vw;
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
  flex-direction: row;
`;

export const FlexBox2 = styled.div`
  display: flex;
  padding-right: 7vw;
  flex-direction: column;
`;

export const FlexBox3 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexBox4 = styled.div`
  text-align: center;
  padding-bottom: 5vh;
  font-weight: bold;
  font-size: 4vh;
`;

export const FlexBox5 = styled.div`
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

export const FlexBox6 = styled.div`
  display: flex;
`;

export const StyledAccordion = styled(Accordion)`
  border-radius: 1vw;
  box-shadow: none;
  margin-top: 0.3vh;

  :before {
    background-color: white;
  }

  svg {
    background-color: white;
    border-radius: 0.3vw;
  }
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  background-color: black;
  color: white;
  width: 20%;
  border-radius: 1vw;
  font-weight: bold;
  div {
    justify-content: center;
  }
`;

export const StyledAccordionDetails = styled(AccordionDetails)``;

export const DisplayStatusContainer = styled(Card)`
  padding-left: 2vw;
  padding-right: 2vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
  border-radius: 1vw;
  margin-bottom: 2vh;
  text-align: center;

  div {
    justify-content: center;
    margin-left: 0;
  }
`;
