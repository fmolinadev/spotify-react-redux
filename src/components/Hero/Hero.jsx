import * as Styles from "./HeroStyles";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Waveform } from "@uiball/loaders";

const Hero = () => {
  const getTopArtist = useSelector((state) => state.top.top);
  const getRecent = useSelector((state) => state.recent);
  const [myTop, setTop] = useState("");
  const [recentTrack, setRecentTrack] = useState("");

  useEffect(() => {
    if (getTopArtist) setTop(getTopArtist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getTopArtist]);

  useEffect(() => {
    if (getRecent) setRecentTrack(getRecent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getRecent]);

  return (
    <Styles.Container>
      <Styles.Title>Estos son tus dos artistas más escuchados:</Styles.Title>
      {!myTop ? (
        <Waveform color="white" lineWeight={3.5} />
      ) : (
        <Styles.TopContainer>
          <Styles.TopArtist>
            <img src={myTop.items[0].images[1].url} alt="cover" />
            <h3>{myTop.items[0]?.name}</h3>
          </Styles.TopArtist>
          <Styles.TopArtist>
            <img src={myTop.items[1].images[1].url} alt="cover" />
            <h3>{myTop.items[1]?.name}</h3>
          </Styles.TopArtist>
        </Styles.TopContainer>
      )}

      <Styles.Title>Reproducidos recientemente:</Styles.Title>
      <Styles.RecentContainer>
        {!recentTrack ? (
          <Waveform color="white" lineWeight={3.5} />
        ) : (
          recentTrack.recent?.items?.map((ele) => {
            console.log(ele);
            return (
              <Styles.RecentTrack key={ele.track.name}>
                <img src={ele.track.album.images[1]?.url} alt="cover" />
                <Styles.DataContainer>
                  <h3>{ele.track.name}</h3>
                  {ele.track.artists.length > 1 ? (
                    ele.track.artists.map((ar) => {
                      return (
                        <Styles.ArtistContainer key={ar.name}>
                          <li>{ar.name} </li>
                        </Styles.ArtistContainer>
                      );
                    })
                  ) : (
                    <h5>{ele.track.artists[0]?.name}</h5>
                  )}
                </Styles.DataContainer>
              </Styles.RecentTrack>
            );
          })
        )}
      </Styles.RecentContainer>
    </Styles.Container>
  );
};

export default Hero;
