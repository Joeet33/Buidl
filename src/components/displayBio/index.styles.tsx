import styled from "styled-components";

export const BioContainer = styled.div`
  font-size: 1vw;
  position: relative;
  height: 20vh;
  width: 100%;
  border-style: solid;
  border-color: black;
  border-radius: 2px;
  padding-top: 2vh;
  padding-left: 1vw;
  padding-bottom: 2vh;
  padding-right: 1vw;
  margin-left: 2vw;
  overflow-y: auto;


  /* width */
  ::-webkit-scrollbar {
    width: 20px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #292929;
  }
`;
