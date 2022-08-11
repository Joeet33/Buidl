import styled from "styled-components";

import Card from "@mui/material/Card";

export const LoginContainer = styled(Card)`
  padding-left: 2vw;
  padding-right: 2vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
  border-radius: 1vw;
  margin-bottom: 2vh;
  position: relative;
  top: 1vh;

  text-align: center;

  div {
    padding-top: 1vh;
  }

  button {
    margin: 0;
    position: relative;
    top: 50%;
  }
`;
