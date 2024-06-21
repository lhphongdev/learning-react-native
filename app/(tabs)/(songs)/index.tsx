import { TracksList } from "@/components/TrackLists";
import { screenPadding } from "@/constants/tokens";
import { useNavigationSearch } from "@/hooks/useNavigationSearch";
import { defaultStyles } from "@/styles";
import { ScrollView, Text, View } from "react-native";
import library from "@/assets/data/library.json";
import { useMemo } from "react";
import { trackTitleFilter } from "@/helpers/filter";

const SongsScreen = () => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: "Search songs...",
    },
  });

  const filterSongs = useMemo(() => {
    if (!search) return library;

    return library.filter(trackTitleFilter(search));
  }, [search]);

  return (
    <View style={defaultStyles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ paddingHorizontal: screenPadding.horizontal }}
      >
        <TracksList tracks={filterSongs} scrollEnabled={false} />
      </ScrollView>
    </View>
  );
};

export default SongsScreen;
