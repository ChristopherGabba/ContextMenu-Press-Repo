import { ReactNode } from "react"
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import * as ContextMenu from "zeego/context-menu"

interface ContextMenuSampleItemProps {
  children: ReactNode
  onQuickPress: () => void
}

export const ContextMenuSampleItem = (props: ContextMenuSampleItemProps) => {
  const { onQuickPress, children } = props
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger action="longPress">
        <TouchableOpacity
          onPress={onQuickPress}
          /**THIS IS A WORKAROUND TO AVOID ACCIDENTAL FIRING OF BUTTON */
          // onLongPress={() => {}} // DO NOTHING
          activeOpacity={0.7}
        >
          {children}
        </TouchableOpacity>
      </ContextMenu.Trigger>
      {/* @ts-ignore */}
      <ContextMenu.Content>
        <ContextMenu.Preview>
          <View style={$previewContainer}>
            <Text style={$previewText}>PREVIEW TEXT</Text>
          </View>
        </ContextMenu.Preview>
        <ContextMenu.Item
          key={`random_key1`}
          onSelect={() => {
            console.log("Selected Item 1")
          }}
        >
          <ContextMenu.ItemTitle>Item 1</ContextMenu.ItemTitle>
          <ContextMenu.ItemIcon
            ios={{ name: "square.and.arrow.up" }}
            androidIconName={"ios_share"}
          />
        </ContextMenu.Item>

        <ContextMenu.Item
          key={`random_key2`}
          onSelect={() => {
            console.log("Selected Item 1")
          }}
        >
          <ContextMenu.ItemTitle>Item 2</ContextMenu.ItemTitle>
          <ContextMenu.ItemIcon
            ios={{ name: "arrowshape.turn.up.forward" }}
            androidIconName={"forward"}
          />
        </ContextMenu.Item>
        <ContextMenu.Item key={`randomKey`} shouldDismissMenuOnSelect>
          <ContextMenu.ItemTitle>Cancel</ContextMenu.ItemTitle>
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  )
}

const $previewContainer: ViewStyle = {
  width: 200,
  height: 200,
  justifyContent: "center",
  alignItems: "center",
}

const $previewText: TextStyle = {
  color: "black",
  fontSize: 20,
  textAlign: "center",
}
