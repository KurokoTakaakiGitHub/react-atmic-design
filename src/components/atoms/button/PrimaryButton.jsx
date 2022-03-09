import styled from "styled-components";

export const PriymaryButton = (props) => {
  const { children } = props;
  return <Sbutton>{children}</Sbutton>;
};

const Sbutton = styled.button`
  background-color: #40514e;
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999ex;
  outline: none;
  & :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
