import React from 'react'
import styles from './styles'
import Map from './components/Map'
import { View } from 'react-native'
import ColorIndexView from './components/ColorIndexView'
import TopBarContainer from './components/TopBarContainer'
import ButtonFaq from './components/ButtonFaq'

export const Main = () => {

  const [isVisible, SetVisible] = React.useState(false)
  const [modalVisible, SetModalVisible] = React.useState(false)

  return (
    <View style={styles.container}>
      <Map
       showTopBar={() => SetVisible(!isVisible)}  
      />
      {isVisible && <TopBarContainer/>}
      <ButtonFaq 
        onPress={() => SetModalVisible(!modalVisible)}
      />
      {modalVisible && <ColorIndexView/>}
    </View>
  )
}
