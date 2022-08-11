import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0px;
`;

export const Start = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const End = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding-right: 23px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 1px 1px;
  background-color: black;
  border-radius: 50px;
  opacity: 0.9;
`;

export const ProfileImagen = styled.img`
  width: 30px;
  border-radius: 50%;
  padding-right: 6px;
`;

export const ProfileName = styled.h5`
  padding-right: 5px;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  color: white;
  font-weight: bold;
`;
