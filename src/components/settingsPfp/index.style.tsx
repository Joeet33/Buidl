import styled from "styled-components";

export const PfpOptions = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 30px;
`;

interface Props {
  active: string | undefined | boolean;
}

export const PfpOption = styled.img<Props>`
  border-radius: 50%;
  margin-top: 10px;
  width: 110px;
  height: 110px;
  border: ${(props) => (props.active ? "5px solid #1da1f2" : "5px")};
`;

export const PfpStyle = styled.img`
  border-radius: 50%;
  margin-top: 10px;
  width: 110px;
  height: 110px;
  border: 5px;
`;
