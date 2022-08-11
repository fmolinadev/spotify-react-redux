import * as Styles from "./SidebarStyles";
import LogoWhite from "../../assets/Spotify_Logo_White.png";
import IconHome from "../../assets/home-free-icon-font.png";
import IconSearch from "../../assets/search-free-icon-font.png";
import IconLibrary from "../../assets/books-free-icon-font.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const Sidebar = () => {
  const userPlaylist = useSelector((state) => state.playlist.playlist);
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    if (userPlaylist) setPlaylist(userPlaylist.items);
  }, [userPlaylist]);

  return (
    <Styles.Container>
      <Styles.LogoContainer>
        <Styles.Logo src={LogoWhite} alt="" />
      </Styles.LogoContainer>
      <Styles.OptionsContainer>
        <Styles.AllOptions>
          <Styles.Option>
            <Styles.OptionIcon src={IconHome} alt="home" />
            <Styles.OptionName>Inicio</Styles.OptionName>
          </Styles.Option>
          <Styles.Option>
            <Styles.OptionIcon src={IconSearch} alt="search" />
            <Styles.OptionName>Buscar</Styles.OptionName>
          </Styles.Option>
          <Styles.Option>
            <Styles.OptionIcon src={IconLibrary} alt="libraryu" />
            <Styles.OptionName>Tu Biblioteca</Styles.OptionName>
          </Styles.Option>
        </Styles.AllOptions>
        <Styles.Line />
        <Styles.AllPlaylist>
          {playlist ? (
            playlist.map((ele) => {
              console.log(ele);
              return <p key={ele.id}>{ele.name}</p>;
            })
          ) : (
            <p>Cargando listas...</p>
          )}
        </Styles.AllPlaylist>
      </Styles.OptionsContainer>
    </Styles.Container>
  );
};

export default Sidebar;
