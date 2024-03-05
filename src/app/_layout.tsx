import { Slot } from "expo-router"
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat"

export default function Layout(){
  const [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  })

  if(!fontsLoaded) {
    return
  }

  return fontsLoaded ? <Slot /> : null
}