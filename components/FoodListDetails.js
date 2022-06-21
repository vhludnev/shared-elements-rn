import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { height, SPACING } from '../config/theme'
import { CELL_WIDTH } from './FoodList'

const FoodListDetails = ({ navigation, route }) => {
  const { item } = route.params

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[StyleSheet.absoluteFillObject, {backgroundColor: item.color, borderRadius: 16}]} />
      <View style={{position: 'absolute', top: SPACING * 6, left: SPACING * 2}}>
        <Text style={styles.type}>{item.type}</Text>
        <Text style={styles.subType}>{item.subType}</Text>
      </View>
      <View style={{marginTop: height * 0.1}}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: SPACING * 3}}>
          {item.subcategories.map((subCategory, idx) => {
            return (
              <View key={idx} style={{backgroundColor: item.fullColor, padding: SPACING, borderRadius: 50}}>
                <Image source={{uri: subCategory.image}} style={{width: 32, height: 32, resizeMode: 'contain'}}/>
              </View>
            )
          })}
        </View>
      </View>
      <AntDesign 
        name='close'
        size={24}
        color={'#333'}
        style={{
          padding: SPACING,
          position: 'absolute',
          top: SPACING * 5,
          right: SPACING,
          zIndex: 2,
          elevation: 8
        }}
        onPress={() => {
          navigation.goBack()
        }}
      />
      <View style={{padding: SPACING}}>
        <Text style={{fontSize: 32, fontWeight: '700', marginBottom: SPACING / 2}}>{item.price}</Text>
        <Text style={{fontSize: 14, lineHeight: 20, opacity: 0.7}}>{item.description}</Text>
      </View>
    </SafeAreaView>
  )
}

export default FoodListDetails

const styles = StyleSheet.create({
  type: {
     fontWeight: '800', 
     fontSize: 22
  },
  subType: {
     fontSize: 12,
     opacity: 0.8,
  },
  image: {
     width: CELL_WIDTH * 0.9,
     height: CELL_WIDTH * 0.9,
     alignSelf: 'center',
     resizeMode: 'contain',
     //position: 'absolute',
     //top: height * 0.2
     marginTop: SPACING * 8,
     marginBottom: SPACING * 4
  }
})