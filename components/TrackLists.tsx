import { FlatList, FlatListProps } from "react-native";
import library from "@/assets/data/library.json";
import { TrackListItem } from "./TrackListItem";

export type TrackListsProps = Partial<FlatListProps<unknown>>;

export const TracksList = ({ ...flatListProps }: TrackListsProps) => {
  return (
    <FlatList
      data={library}
      renderItem={({ item: track }) => (
        <TrackListItem
          track={{
            ...track,
            image: track.artwork,
          }}
        />
      )}
      {...flatListProps}
    />
  );
};
