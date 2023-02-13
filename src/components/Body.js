import styled from "styled-components";
import { AiFillClockCircle } from "react-icons/ai";
import { useStateProvider } from "../utils/StateProvider";
import { useEffect } from "react";
import axios from "axios";

function Body() {
  const [{ token, selectedPlaylistId }, dispatch] = useStateProvider();

  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = axios.get(
        `https://api.spotify.com/v1/playlists/${
          (selectedPlaylistId,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-type": "application/json",
            },
          })
        }`
      );
    };
    getInitialPlaylist();
  }, [token, dispatch]);
  return <Container></Container>;
}

export default Body;

const Container = styled.div``;
