import { Text, View } from "react-native"
import Animated, { SlideInDown, BounceOutDown } from "react-native-reanimated" 

import { styles } from "./styles"
import { Button } from "../Button"

import { theme } from "@/theme"
import { MaterialIcons } from "@expo/vector-icons"

type Props = {
  quantity: number
  onClear: () => void
  onSearch: () => void
}

export function Selected({ quantity, onClear, onSearch }: Props) {
  return (
    <Animated.View 
      style={styles.container} 
      entering={SlideInDown.duration(500)} 
      exiting={BounceOutDown}
    >
      <View style={styles.header} >
        <Text style={styles.label} >
          {quantity} ingredients selected
        </Text>
        <MaterialIcons name="close" size={24} onPress={onClear} color={theme.colors.gray_400}/>
      </View>

      <Button title="Search" onPress={onSearch} />
    </Animated.View>
  )
}