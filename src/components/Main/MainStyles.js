import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-image: linear-gradient(126.3deg, #101010 32.2%, #24201f 109.2%);
  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 2px;
  }
`;
