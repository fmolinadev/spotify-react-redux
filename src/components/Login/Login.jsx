import * as Style from "./LoginStyles";
import LogoBlack from "../../assets/Spotify_Logo_Black.png";
import { toLogin } from "../../utils/login";
const Login = () => {
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
