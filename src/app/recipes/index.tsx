import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Recipe } from "@/components/Recipe";

export default function Recipes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons 
          name="arrow-back"
          size={32}
          onPress={
            ()=> router.back()
          }/>

        <Text style={styles.title}>
            Ingredients
        </Text>

        <FlatList
          data={["1"]}
          keyExtractor={(item) => item}
          renderItem={
            () => (
              <Recipe recipe={{
                name: "Omelette",
                image: 
                  "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps167311_SD153321B02_04_3b.jpg",
                minutes: 10
              }} />
            )
          }
        />
      </View>
    </View>
  )
}