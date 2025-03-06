import { AppStackScreenProps } from "@/navigators"
import { useNavigation } from "@react-navigation/native"
import { Image, SafeAreaView, Text, TouchableOpacity } from "react-native"

interface FullScreenImageScreenProps extends AppStackScreenProps<"FullScreenImage"> {}

export const FullScreenImageScreen = (props: FullScreenImageScreenProps) => {
  const { uri } = props.route.params

  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Image source={{ uri }} style={{ width: "100%", height: "100%" }} />
    </SafeAreaView>
  )
}

// @demo remove-file
