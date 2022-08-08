import * as Style from "./LoginStyles";
import LogoBlack from "../../assets/Spotify_Logo_Black.png";
const Login = () => {
  const endpointLogin = `https://accounts.spotify.com/authorize`;
  const myClientID = "6e68b40ac15344c2b31b7b1478260ac4";
  const redirectURI = "http://localhost:3000/";
  const scopes = [
    "user-top-read",
    "user-read-recently-played",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-library-read",
    "user-modify-playback-state",
  ];

  const toLogin = `${endpointLogin}?client_id=${myClientID}&response_type=token&redirect_uri=${redirectURI}&scope=${scopes.join(
    "%20"
  )}&show_dialog=true`;

  return (
    <Style.Container>
      <Style.LogoContainer>
        <Style.Logo src={LogoBlack} alt="logo sporify" />
      </Style.LogoContainer>
      <Style.Line />
      <Style.ButtonContainer>
        <Style.Button>
          <Style.Link href={toLogin}>Login Account</Style.Link>
        </Style.Button>
      </Style.ButtonContainer>
    </Style.Container>
  );
};

export default Login;
