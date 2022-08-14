import styled from "styled-components";

export const ProfileContainer = styled.div`
  height: 40vh;
  overflow-y: scroll;
  padding-left: 1vw;
  padding-right: 1vw;

  button {
    margin-top: 2vh;
  }

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

export const FlexBox1 = styled.div`
  display: flex;
`;

export const FlexBox2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  div {
    margin-top: 1vh;
    margin-left: 0.2vw;
    margin-right: 0.2vw;
  }
`;
export const StyledHeader = styled.div`
  text-align: center;
  font-size: 4vh;
  font-weight: bold;
`;

export const FlexBox3 = styled.div`
  display: flex;
  text-align: center;
`;
export const FlexBox4 = styled.div`
  display: flex;
  text-align: center;
`;
export const FlexBox5 = styled.div`
  display: flex;
  text-align: center;
`;
export const FlexBox6 = styled.div`
  display: flex;
  text-align: center;
`;

export const FlexBox7 = styled.div`
  display: flex;
  justify-content: center;
`;
