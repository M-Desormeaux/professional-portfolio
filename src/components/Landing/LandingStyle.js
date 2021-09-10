import styled from "styled-components";

export const LandingStyle = styled.div`
  //min-height: 100vh;

  div ~ div {
    margin-left: 16px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgDiv = styled.div`
  display: contents;
`;

export const ImgStyle = styled.img`
  border-radius: ${({ corner }) => corner}rem;
`;

export const BlurbDiv = styled.div`
  width: 500px;
`;
