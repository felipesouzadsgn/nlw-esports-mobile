import { THEME } from "../../theme"

import { styles } from "./styles"

import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </View>
  )
}
