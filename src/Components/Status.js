import React, { useEffect, useState } from "react";
import axios from "axios";

const DiscordStatus = ({ userId }) => {
  const [status, setStatus] = useState(null);
  const [activity, setActivity] = useState(null);
  const [song, setSong] = useState(null);
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDiscordStatus = async () => {
      try {
        const response = await axios.get(
          `https://api.lanyard.rest/v1/users/395904048982654987`
        );
        const data = response.data;

        // Check if user data is available
        if (data.data) {
          // Set status based on Discord status
          const discordStatus = data.data.discord_status;
          if (
            discordStatus === "online" ||
            discordStatus === "idle" ||
            discordStatus === "dnd"
          ) {
            setStatus("Online");
          } else {
            setStatus("Offline");
          }

          const activities = data.data.activities;

          if (activities.length > 0) {
            const currentActivity = activities[0];
            setActivity(currentActivity.name);

            // Check if the activity is Spotify
            if (currentActivity.type === 2) {
              // 2 indicates a listening activity
              setSong(currentActivity.details); // Song name
              setArtist(currentActivity.state); // Artist name
            } else {
              setSong(null);
              setArtist(null);
            }
          } else {
            setActivity(null);
            setSong(null);
            setArtist(null);
          }
        } else {
          setStatus("Offline");
          setActivity(null);
          setSong(null);
          setArtist(null);
        }
      } catch (error) {
        console.error("Error fetching Discord status:", error);
        setStatus("Error");
      } finally {
        setLoading(false);
      }
    };

    fetchDiscordStatus();
    const interval = setInterval(fetchDiscordStatus, 5000); // Refresh every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {song && artist ? (
        <p>
          Listening to <strong>{song}</strong> by <strong>{artist}</strong>
        </p>
      ) : (
        <p>+ {status}</p>
      )}
    </div>
  );
};

export default DiscordStatus;
