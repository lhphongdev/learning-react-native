import { Event, useTrackPlayerEvents } from "react-native-track-player";

const events = [
  Event.PlaybackState,
  Event.PlayerError,
  Event.PlaybackTrackChanged,
];

export const useLogTrackPlayerState = () => {
  useTrackPlayerEvents(events, async (event) => {
    if (event.type === Event.PlaybackError) {
      console.log("An error occurred", event);
    }

    if (event.type === Event.PlaybackState) {
      console.log("State changed", event.state);
    }

    if (event.type === Event.PlaybackTrackChanged) {
      console.log("Track changed", event.track);
    }
  });
};
