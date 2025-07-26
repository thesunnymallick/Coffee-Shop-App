import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { CARDITEM } from './homeScreenTypes'
interface CardItemProps{
 item:CARDITEM
}
const CardItem:React.FC<CardItemProps> = ({item}) => {
  return (
    <View>
      <Text>CardItem</Text>
    </View>
  )
}


const styles=StyleSheet.create({
    
})

export default CardItem