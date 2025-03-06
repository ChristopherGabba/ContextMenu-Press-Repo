import { useNavigation } from "@react-navigation/native"
import { useMemo } from "react"
import {
  FlatList,
  Image,
  ImageStyle,
  ListRenderItem,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native"
import { ContextMenuSampleItem } from "./ContextMenuSampleItem"
import { AppStackScreenProps } from "@/navigators"

const BEAUTIFUL_FERNANDO_IMAGE =
  "https://media.licdn.com/dms/image/v2/C5603AQH42EcTxqKmDQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1571069895602?e=2147483647&v=beta&t=N_v5LzpD4yFNjq5klZJoKlhe7BT6BO5uAVjlUbt91aI"

interface MainScreenProps extends AppStackScreenProps<"Main"> {}

export const MainScreen = (props: MainScreenProps) => {
  const { navigation } = props

  const data = useMemo(() => {
    return Array.from({ length: 20 }, (_, index) => index).map((i) => i)
  }, [])

  const renderItem: ListRenderItem<number> = ({}) => {
    return (
      <ContextMenuSampleItem
        onQuickPress={() =>
          navigation.navigate("FullScreenImage", { uri: BEAUTIFUL_FERNANDO_IMAGE })
        }
      >
        <Image style={$thumbnail} source={{ uri: BEAUTIFUL_FERNANDO_IMAGE }} />
      </ContextMenuSampleItem>
    )
  }

  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <FlatList data={data} renderItem={renderItem} style={{ flex: 1 }} />
    </SafeAreaView>
  )
}

const $thumbnail: ImageStyle = {
  width: 100,
  height: 200,
}

// @demo remove-file
