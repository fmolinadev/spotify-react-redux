//Require fro login:
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

export const toLogin = `${endpointLogin}?client_id=${myClientID}&response_type=token&redirect_uri=${redirectURI}&scope=${scopes.join(
  "%20"
)}&show_dialog=true`;

export const loginToken = () => {
  return window.location.hash
    .substring(1) /* quita el # */
    .split("&")
    .reduce((acces, item) => {
      let divider = item.split("=");
      acces[divider[0]] = decodeURIComponent(divider[1]); //Solo traigo el "acces token"
      return acces;
    }, {});
};
