import * as Styles from "./HeaderStyles";
import Avatar from "../../assets/placeholder_profile.png";
const Header = () => {
  return (
    <Styles.Container>
      <Styles.Start>las flechas</Styles.Start>
      <Styles.End>
        <Styles.Profile>
          <Styles.ProfileImagen src={Avatar} alt="user profile" />
          <Styles.ProfileName>User</Styles.ProfileName>
        </Styles.Profile>
      </Styles.End>
    </Styles.Container>
  );
};

export default Header;
