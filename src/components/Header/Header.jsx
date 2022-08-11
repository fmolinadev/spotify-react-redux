import * as Styles from "./HeaderStyles";
import Avatar from "../../assets/placeholder_profile.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {
  const profileInfo = useSelector((state) => state.user.user);
  console.log("DATA USER=>", profileInfo);
  const [userInfo, setUserInfo] = useState(null);

  // useEffect(() => {
  //   if (profileInfo) setUserInfo(profileInfo);
  // }, [profileInfo]);

  return (
    <Styles.Container>
      <Styles.Start>las flechas</Styles.Start>
      <Styles.End>
        <Styles.Profile>
          <Styles.ProfileImagen
            src={profileInfo.images[0].url ? profileInfo.images[0].url : Avatar}
            alt="user profile"
          />
          <Styles.ProfileName>
            {profileInfo.display_name
              ? profileInfo.display_name
              : "Spotify User"}
          </Styles.ProfileName>
        </Styles.Profile>
      </Styles.End>
    </Styles.Container>
  );
};

export default Header;
