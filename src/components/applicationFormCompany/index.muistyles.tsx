import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { TextField } from "@mui/material";

export const StyledCard = styled(Card)`
  padding: 2vw;
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
`;

export const FlexBox1 = styled.div`
  display: flex;
  padding-right: 7vw;
`;

export const FlexBox2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.div`
  margin: auto;
  padding-bottom: 4vh;
  font-weight: bold;
  font-size: 6vh;
`;

export const FlexBox3 = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledTextField = styled(TextField)`
  margin: auto;
  padding-bottom: 4vh;
  width: 50vw;
`;
