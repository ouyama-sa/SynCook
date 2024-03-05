import { StyleSheet } from "react-native"
import { theme } from "@/theme"

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: theme.fonts.size.heading.xl,
    lineHeight: 44,
    marginTop: 42,
    fontFamily: theme.fonts.family.bold,
  },
  span: {
    fontFamily: theme.fonts.family.regular,
  },
  subtitle: {
    fontSize: theme.fonts.size.body.md,
    fontFamily: theme.fonts.family.regular,
    marginTop: 12,
    marginBottom: 38,
    color: theme.colors.gray_400,
  },
  ingredientsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 12,
    paddingBottom: 200,
  },
})