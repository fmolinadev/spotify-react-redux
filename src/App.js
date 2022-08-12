/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpotifyWebApi from "spotify-web-api-js";
import Body from "./components/Body/Body";
import Login from "./components/Login/Login.jsx";
import { ADD_USER } from "./redux/slice.user";
import { ADD_TOKEN } from "./redux/slice.token";
import { loginToken } from "./utils/login";
import { GET_PLAYLIST } from "./redux/slice.playlist";
import { GET_TOP } from "./redux/slice.top";
import { GET_RECENT } from "./redux/slice.recent";

const App = () => {
  const dispatch = useDispatch();
  const dataSpotify = new SpotifyWebApi();
  const tokenUserAcces = useSelector((state) => state.token.token);

  useEffect(() => {
    const tokenFromSpotify = loginToken();
    const getAccessToken = tokenFromSpotify.access_token;
    // console.log("GET TOKEN-->", getAccessToken);
    if (getAccessToken) {
      dispatch(ADD_TOKEN(getAccessToken));
      dataSpotify.setAccessToken(getAccessToken);
      dataSpotify.getMe().then((dataUser) => {
        dispatch(ADD_USER(dataUser));
      });
      dataSpotify.getUserPlaylists().then((playlist) => {
        dispatch(GET_PLAYLIST(playlist));
      });
      dataSpotify.getMyTopArtists().then((top) => {
        dispatch(GET_TOP(top));
      });
      dataSpotify.getMyRecentlyPlayedTracks().then((tracks) => {
        dispatch(GET_RECENT(tracks));
      });
    }
  }, []);

  return <>{tokenUserAcces ? <Body /> : <Login />}</>;
};

export default App;
