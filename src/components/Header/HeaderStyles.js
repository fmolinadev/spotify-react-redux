import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 55px;
  align-items: center;
  justify-content: space-between;
  background-color: #002321;
  padding-left: 28px;
`;

export const Start = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 6px;
`;

export const End = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding-right: 55px;
  padding-top: 10px;
  padding-bottom: 10px;
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
