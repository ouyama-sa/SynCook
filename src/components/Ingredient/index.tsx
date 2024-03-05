import { Pressable, PressableProps, Image, Text } from "react-native";

import { styles } from "./styles";

export type IngredientsProps = {
  name: string
  image: string
  selected?: boolean
}

export function Ingredient({ name, image, selected = false, ...rest }){
  return (
    <Pressable style={[styles.container, selected && styles.selected]} {...rest}>
    <Image 
      source={require("@/assets/apple.png")} 
      style={styles.image}
      />
    <Text style={styles.title}>
      Apple
    </Text>
  </Pressable>
  )
}