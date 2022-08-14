import Card from "@mui/material/Card";
import styled from "@emotion/styled";

export const StyledCard = styled(Card)`
  display: inline-block;
  margin: 0 10px;
  width: 8vw;
  background-color: black;
  padding-left: 1vw;
  padding-right: 1vw;
  padding-top: 2vh;
  padding-bottom: 2vh;
  text-align: center;

  a {
    color: white;
    text-decoration: none;

    :hover{
      font-weight: bold;
    }
  }
`;