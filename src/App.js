import { useState } from "react";
import { useEffect } from "react";
import Body from "./components/Body/Body";
import Login from "./components/Login/Login.jsx";
import { loginToken } from "./utils/login";

const App = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    const tokenFromSpotify = loginToken();

    const getToken = tokenFromSpotify.access_token;
    console.log("GET TOKEN-->", getToken);
    setToken(getToken);
  }, []);

  return <>{token ? <Body /> : <Login />}</>;
};

export default App;
