import styled from "styled-components";

export const DisplayProfileContainer = styled.div`
  padding-left: 2vw;
  padding-right: 2vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
  box-shadow: 0 0px 0px 0 black, 0 0px 1px 0 black;
  border-radius: 1vw;
  margin-bottom: 2vh;
`;

export const FlexBox1 = styled.div`
  display: flex;
`;

export const FlexBox2 = styled.div`
  padding-left: 6vw;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 1vh;
  div {
    :nth-of-type(2n) {
      padding-top: 2vh;
      text-align: left;
    }
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
