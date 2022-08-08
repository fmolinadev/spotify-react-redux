import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
`;

export const LogoContainer = styled.div`
  margin-top: 5px;
`;

export const Logo = styled.img`
  width: 184px;
  height: 56px;
  padding: 20px 0px;
`;

export const Line = styled.hr`
  height: 0.1px;
  width: 100vw;
  opacity: 0.1;
  background-color: black;
`;

export const ButtonContainer = styled.div``;

export const Button = styled.button`
  display: flex;
  position: relative;
  width: 390px;
  background-color: #1ed760;
  border-color: transparent;
  border-radius: 500px;
  font-family: "Montserrat", sans-serif;
  padding: 14px 90px;
  align-items: center;
  justify-content: center;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #000000;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  &:hover {
    color: white;
  }
`;
