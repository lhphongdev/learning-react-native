import { FlatList, FlatListProps, View } from "react-native";
import library from "@/assets/data/library.json";
import { TrackListItem } from "./TrackListItem";
import { utilsStyles } from "@/styles";
import { Track } from "react-native-track-player";

export type TrackListsProps = Partial<FlatListProps<Track>> & {
  tracks: Track[];
};

const ItemDivider = () => (
  <View
    style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}
  ></View>
);

export const TracksList = ({ tracks, ...flatListProps }: TrackListsProps) => {
  return (
    <FlatList
      data={tracks}
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
      ListFooterComponent={ItemDivider}
      ItemSeparatorComponent={ItemDivider}
      renderItem={({ item: track }) => <TrackListItem track={track} />}
      {...flatListProps}
    />
  );
};
