import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  height: 100vh;
  padding-left: 28px;
`;

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 28px;
  padding: 20px 0px;
  color: white;
`;

export const TopContainer = styled.section`
  display: flex;
  padding-bottom: 23px;
`;

export const TopArtist = styled.article`
  padding-right: 14px;
  & img {
    width: 250px;
    border-radius: 8px;
  }
  & h3 {
    font-family: "Helvetica", sans-serif;
    color: white;
    font-weight: regular;
    font-size: 18px;
    margin-top: -45px;
    margin-left: 16px;
  }
`;

export const RecentContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 8px;
  padding-bottom: 90px;
`;

export const RecentTrack = styled.article`
  height: 300px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  background-color: #1b1b1a;
  border-radius: 10px;
  &:hover {
    background-color: #2c2b2b;
  }
  & img {
    display: block;
    width: 90%;
    border-radius: 10px;
    margin: 10px;
  }
`;

export const DataContainer = styled.div`
  align-items: center;
  margin-top: 48px;
  padding-left: 12px;
  & h3 {
    font-family: "Helvetica", sans-serif;
    color: white;
    font-weight: regular;
    font-size: 12px;
    margin-top: -45px;
    padding-bottom: 9px;
  }

  & h5 {
    font-family: "Helvetica", sans-serif;
    color: white;
    font-weight: lighter;
    font-size: 12px;
  }
`;

export const ArtistContainer = styled.ul`
  list-style-type: none;
  display: inline-block;
  position: relative;
  & li {
    font-family: "Helvetica", sans-serif;
    color: white;
    font-weight: lighter;
    font-size: 12px;
    padding-right: 3px;
  }
`;
