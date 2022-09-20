import { SafeAreaView } from "react-native-safe-area-context"
import { useRoute, useNavigation } from "@react-navigation/native"
import { Entypo } from "@expo/vector-icons"

import logo from "../../assets/logo-nlw-esports.png"
import { Background } from "../../components/Background"

import { styles } from "./styles"
import { GameParams } from "../../@types/navigation"
import { TouchableOpacity, View, Image } from "react-native"
import { THEME } from "../../theme"
import { Heading } from "../../components/Heading"

export function Game() {
  const route = useRoute()
  const game = route.params as GameParams;

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image
            source={logo}
            style={styles.logo}
          />
          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading
          title={game.title}
          subtitle="Conecte-se e come a jogar!"
        />

      </SafeAreaView>
    </Background>
  )
}
