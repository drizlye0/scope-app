import React from 'react'
import styles from './styles'
import Map from './components/Map'
import { View } from 'react-native'
import ColorIndexView from './components/ColorIndexView'
import TopBarContainer from './components/TopBarContainer'

export const Main = () => {
  const [isVisible, SetModalVisible] = React.useState(false)
  return (
    <View style={styles.container}>
      <Map
       showTopBar={() => SetModalVisible(!isVisible)}  
      />
      {isVisible && <TopBarContainer/>}
      <ColorIndexView />
    </View>
  )
}
