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
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 25px;
`;

export const ProfileImagen = styled.img`
  width: 32px;
  border-radius: 50%;
  padding-right: 6px;
`;

export const ProfileName = styled.h5`
  padding-right: 20px;
`;
