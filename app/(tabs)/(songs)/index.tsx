import { TracksList } from "@/components/TrackLists";
import { defaultStyles } from "@/styles";
import { ScrollView, Text, View } from "react-native";

const SongsScreen = () => {
  return (
    <View style={defaultStyles.container}>
      <ScrollView>
        <TracksList scrollEnabled={false} />
      </ScrollView>
    </View>
  );
};

export default SongsScreen;
