import styled from "styled-components";

export const Container = styled.section`
  position: fixed;
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 100vw;
  height: 90px;
  background-color: #181818;
  color: white;
  bottom: 0;
  align-items: center;
`;

export const DataContainer = styled.div`
  display: flex;
  flex: 0.3;
  max-width: 465px;
`;

export const Placeholder = styled.img`
  width: 55px;
  padding: 15px;
  object-fit: contain;
`;

export const DataTrack = styled.div`
  padding: 25px 0px;
  align-items: center;
  width: 100px;
  min-width: 90px;
  & > h4 {
    color: white;
    font-size: 14px;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    padding-bottom: 2px;
  }
  & > p {
    color: white;
    font-size: 11px;
    font-family: "Montserrat", sans-serif;
    font-weight: light;
    padding-top: 2px;
  }
`;

export const DataState = styled.div`
  padding: 37px 8px 2px 19px;
  height: 25px;
  min-width: 90px;
  align-items: center;
`;

export const LikeNull = styled.img`
  width: 15px;
`;

export const Expand = styled.img`
  width: 16px;
  padding-left: 13px;
`;

export const ControlContainer = styled.div`
  flex: 0.4;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 2px 50px;
`;

export const AllButtoms = styled.ul`
  display: flex;
  margin: auto;
  color: white;
  padding-top: 8px;
  width: 100%;
  justify-content: center;
  align-items: center;
  & > li {
    list-style-type: none;
    opacity: 0.8;
  }
  & > li:hover {
    opacity: 1;
  }
`;

export const IconController = styled.img`
  width: 15px;
  padding: 16px 18px;
  margin: auto;
`;

export const PlayController = styled.img`
  width: 22px;
  height: 20px;
  padding: 8px 8px;
  margin-top: 5px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.1s;
  &:active {
    transform: scale(0.9);
  }
`;

export const TimeView = styled.div`
  display: flex;
  padding-top: 2px;
  width: 100%;

  & > p {
    font-size: 10px;
    font-family: "Montserrat", sans-serif;
    font-weight: regular;
    padding: 0px 9px;
  }
  & > hr {
    height: 3px;
    width: 90%;
    border-radius: 6px;
    padding-top: 1px;
    margin-top: 4px;
  }
`;

export const SettingContainer = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  max-width: 465px;
  right: 0;
`;

export const AllSettings = styled.ul`
  display: flex;
  margin: auto;
  color: white;
  padding-top: 8px;
  width: 100%;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  & > li {
    list-style-type: none;
    opacity: 0.8;
  }
  & > li:hover {
    opacity: 1;
  }
`;

export const IconSetting = styled.img`
  width: 18px;
  padding: 12px 10px;
  margin: auto;
`;

export const VolumeControl = styled.div`
  display: flex;
  width: 145px;
  & input {
    height: 8px;
    width: 80%;
    cursor: pointer;
    overflow: hidden;
    display: block;
    appearance: none;
    border-radius: 6px;
    padding-top: 1px;
    margin-top: 17px;
    background-color: #1ed760;
  }
  &:focus {
    outline: none;
  }
  &:-webkit-slider-runnable-track {
    border-radius: 20px;
  }
`;
