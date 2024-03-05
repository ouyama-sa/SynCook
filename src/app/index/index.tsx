import { View, Text, ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import { Selected } from "@/components/Selected";
import { useState } from "react";
import { Ingredient } from "@/components/Ingredient";
import { router } from "expo-router";


export default function Index() {
  const [selected, setSelected] = useState<string[]>([])

  function handleToggleSelected(value: string){
    if(selected.includes(value)){
      return setSelected(
        (state) => state.filter((item) => item !== value)
      )
    }

    setSelected((state) => [...state, value])
  }

  function handleClearSelected() {
    Alert.alert("Clear", "Clear all selected ingredients?", [
      { text: "No", style: "cancel" },
      { text: "Yes", onPress: () => setSelected([]) },
    ])
  }

  function handleSearch() {
    router.navigate("/recipes/")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Pick {"\n"}
        <Text style={styles.span}>your ingredients</Text>
        </Text>

      <Text style={styles.subtitle}>
        Discover recipes based on the ingredients you picked.
      </Text>

      <ScrollView 
        contentContainerStyle={styles.ingredientsContainer}
        showsVerticalScrollIndicator={false}
        >
        {
          Array.from({ length: 100 }).map((item, index) => (
            <Ingredient 
              key={index}  
              name="Apple" 
              image="" 
              selected={selected.includes(String(index))} 
              onPress={ ()=>handleToggleSelected(String(index)) } />
          ))
        }
      </ScrollView>
      { 
        selected.length > 0 && (
          <Selected 
            quantity={selected.length} 
            onClear={handleClearSelected} 
            onSearch={handleSearch} 
          />
        )
      }
    </View>
  )
}
