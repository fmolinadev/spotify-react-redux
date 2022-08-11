import styled from "styled-components";

export const Container = styled.aside`
  width: 300px;
  max-width: 45%;
  height: 100vh;
  background-color: black;
`;

export const LogoContainer = styled.div`
  padding: 25px 22px 20px;
`;

export const Logo = styled.img`
  width: 132px;
`;

export const OptionsContainer = styled.div`
  padding: 12px 22px 20px;
`;

export const AllOptions = styled.ul`
  align-items: center;
`;

export const Option = styled.li`
  padding-bottom: 16px;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  list-style-type: none;
  color: white;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export const OptionIcon = styled.img`
  width: 20px;
`;

export const OptionName = styled.span`
  padding-left: 15px;
  font-size: 14px;
`;

export const Line = styled.hr`
  height: 0.1px;
  width: 100%;
  opacity: 0.2;
  background-color: black;
`;

export const AllPlaylist = styled.section`
  margin-top: 20px;
  height: 180px;
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

  & p {
    font-family: "Montserrat", sans-serif;
    font-size: 11px;
    letter-spacing: 1px;
    cursor: pointer;
    color: white;
    opacity: 0.8;
    padding: 7px 0px;
    &:hover {
      opacity: 1;
    }
  }
`;
