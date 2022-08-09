import * as Styles from "./BodyStyles";
import Sidebar from "../Sidebar/Sidebar";
import Player from "../Player/Player";
import Main from "../Main/Main";

const Body = () => {
  return (
    <Styles.Container>
      <Sidebar />
      <Main />
      <Player />
    </Styles.Container>
  );
};

export default Body;
