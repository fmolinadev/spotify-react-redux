import * as Styles from "./HeaderStyles";
import Avatar from "../../assets/placeholder_profile.png";
import { useSelector } from "react-redux";

const Header = () => {
  const userInfo = useSelector((state) => state.user.user);
  // console.log("DATA PROFILE=>", userInfo);

  return (
    <Styles.Container>
      <Styles.Start>las flechas</Styles.Start>
      <Styles.End>
        <Styles.Profile>
          <Styles.ProfileImagen
            src={userInfo != null ? userInfo.images[0].url : Avatar}
            alt="user profile"
          />

          <Styles.ProfileName>
            {userInfo != null ? userInfo.display_name : "Loading user name"}
          </Styles.ProfileName>
        </Styles.Profile>
      </Styles.End>
    </Styles.Container>
  );
};

export default Header;
