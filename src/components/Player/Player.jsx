import * as Styles from "./PlayerStyles";
import PlaceholderCover from "../../assets/placeholder_cover.png";
// import HeartSimple from "../../assets/heart-free-icon-font.png";
import HeartLike from "../../assets/heart-like-free-icon-font.png";
import ExpandCard from "../../assets/card-free-icon-font.png";
import RandomOff from "../../assets/shuffle-off-free-icon-font.png";
// import RandomOn from "../../assets/shuffle-free-icon-font.png";
import PrevTrack from "../../assets/back-free-icon-font.png";
import NextTrack from "../../assets/next-free-icon-font.png";
import Play from "../../assets/play-free-icon-font.png";
// import Pause from "../../assets/pause-free-icon-font.png";
import RepeatOff from "../../assets/repeat-off-free-icon-font.png";
// import Repeat from "../../assets/repeat-free-icon-font.png";
import Microphone from "../../assets/microfono.png";
import List from "../../assets/cola.png";
import Connect from "../../assets/conecta-y-reproduce.png";
import VolumeMax from "../../assets/volumen-alto.png";
// import VolumeMed from "../../assets/volumen-medio.png"
// import VolumeMin from "../../assets/volumen-bajo.png"
// import Mute from "../../assets/volumen-mute.png"
const Player = () => {
  return (
    <Styles.Container>
      <Styles.DataContainer>
        <Styles.Placeholder src={PlaceholderCover} alt="cover track" />
        <Styles.DataTrack>
          <h4>Titulo</h4>
          <p>Artista</p>
        </Styles.DataTrack>
        <Styles.DataState>
          <Styles.LikeNull src={HeartLike} alt="favourite" />
          <Styles.Expand src={ExpandCard} alt="expand" />
        </Styles.DataState>
      </Styles.DataContainer>
      <Styles.ControlContainer>
        <Styles.AllButtoms>
          <li>
            <Styles.IconController src={RandomOff} alt="repeat" />
          </li>
          <li>
            <Styles.IconController src={PrevTrack} alt="prev" />
          </li>
          <li>
            <Styles.PlayController src={Play} alt="play" />
          </li>
          <li>
            <Styles.IconController src={NextTrack} alt="next" />
          </li>
          <li>
            <Styles.IconController src={RepeatOff} alt="repeat-control" />
          </li>
        </Styles.AllButtoms>
        <Styles.TimeView>
          <p>00:00</p>
          <hr />
          <p>02:45</p>
        </Styles.TimeView>
      </Styles.ControlContainer>
      <Styles.SettingContainer>
        <Styles.AllSettings>
          <li>
            <Styles.IconSetting src={Microphone} alt="karaoke" />
          </li>
          <li>
            <Styles.IconSetting src={List} alt="stack" />
          </li>
          <li>
            <Styles.IconSetting src={Connect} alt="connect" />
          </li>
          <li>
            <Styles.VolumeControl>
              <Styles.IconSetting src={VolumeMax} alt="volume" />
              <input type="range" min="0" max="100" step="1" />
            </Styles.VolumeControl>
          </li>
        </Styles.AllSettings>
      </Styles.SettingContainer>
    </Styles.Container>
  );
};

export default Player;
