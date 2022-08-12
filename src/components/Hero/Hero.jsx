import * as Styles from "./HeroStyles";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Hero = () => {
  const getTopArtist = useSelector((state) => state.top.top);
  const getRecent = useSelector((state) => state.recent);
  const [myTop, setTop] = useState(null);
  const [recentTrack, setRecentTrack] = useState(null);

  useEffect(() => {
    if (getTopArtist) setTop(getTopArtist);
  }, [getTopArtist]);

  useEffect(() => {
    if (getRecent) setRecentTrack(getRecent);
  }, [getRecent]);

  return (
    <Styles.Container>
      <Styles.Title>Estos son tus dos artistas más escuchados:</Styles.Title>
      <Styles.TopContainer>
        <Styles.TopArtist>
          <img
            src={
              myTop != null ? myTop.items[0].images[1].url : <p>Loading...</p>
            }
            alt=""
          />
          <h3>{myTop != null ? myTop.items[0].name : <p>Loading...</p>}</h3>
        </Styles.TopArtist>
        <Styles.TopArtist>
          <img
            src={
              myTop != null ? myTop.items[1].images[1].url : <p>Loading...</p>
            }
            alt=""
          />
          <h3>{myTop != null ? myTop.items[1].name : <p>Loading...</p>}</h3>
        </Styles.TopArtist>
      </Styles.TopContainer>
      <Styles.Title>Reproducidos recientemente:</Styles.Title>
      <Styles.RecentContainer>
        {recentTrack != null ? (
          recentTrack.recent.items.map((ele) => {
            console.log(ele);
            return (
              <Styles.RecentTrack>
                <img src={ele.track.album.images[1].url} alt="cover" />;
                <Styles.DataContainer>
                  <h3>{ele.track.name}</h3>
                  {ele.track.artists.length > 1 ? (
                    ele.track.artists.map((ar) => {
                      return (
                        <Styles.ArtistContainer>
                          <h5>{ar.name}</h5>
                        </Styles.ArtistContainer>
                      );
                    })
                  ) : (
                    <h5>{ele.track.artists[0].name}</h5>
                  )}
                </Styles.DataContainer>
              </Styles.RecentTrack>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </Styles.RecentContainer>
    </Styles.Container>
  );
};

export default Hero;
