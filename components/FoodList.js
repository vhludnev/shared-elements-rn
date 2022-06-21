import React, { useState } from 'react'
import { SafeAreaView, Text, View, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import food, { tabs, ORANGE, popularFood } from '../config/data/food'
import { AntDesign } from '@expo/vector-icons'
import { SPACING, width } from '../config/theme'


export const CELL_WIDTH = width * 0.64
const CELL_HEIGHT = CELL_WIDTH * 1.4
const FULL_SIZE = CELL_WIDTH + SPACING * 2

const FoodList = ({ navigation }) => {
   const [selectedTab, setSelectedTab] = useState(tabs[0])
   return (
      <ScrollView>
         <SafeAreaView style={{ flex: 1, paddingTop: 40 }}>
            <FlatList
               style={{flexGrow: 0}}
               contentContainerStyle={{padding: SPACING}}
               horizontal
               showsHorizontalScrollIndicator={false}
               data={tabs}
               keyExtractor={(item, index) => `${item}-${index}`}
               renderItem={({item: tab}) => {
                  return (
                     <TouchableOpacity onPress={() => setSelectedTab(tab)}>
                        <View style={[styles.pill, {backgroundColor: selectedTab === tab ? ORANGE : 'transparent'}]}>
                           <Text style={[styles.pillText, {color: selectedTab === tab ? '#fff' : '#000'}]}>
                              {tab}
                           </Text>
                        </View>
                     </TouchableOpacity>
                  )
               }}
            />
            <FlatList 
               /* style={{flex: 1, backgroundColor: 'red', height: 100}} */
               data={food}
               horizontal
               showsHorizontalScrollIndicator={false}
               snapToInterval={FULL_SIZE}
               decelerationRate='fast'
               keyExtractor={item => item.key}
               renderItem={({item}) => {
                  return (
                     <TouchableOpacity style={{width: CELL_WIDTH, height: CELL_HEIGHT, margin: SPACING}} onPress={() => {navigation.navigate('FoodListDetails', { item })}}>
                        <View style={{flex: 1, padding: SPACING, justifyContent: 'center'}}>
                           <View style={[StyleSheet.absoluteFillObject, {backgroundColor: item.color, borderRadius: 16}]} />
                           <View style={{position: 'absolute', top: SPACING, left: SPACING}}>
                              <Text style={styles.type}>{item.type}</Text>
                              <Text style={styles.subType}>{item.subType}</Text>
                           </View>
                           <Image source={{uri: item.image}} style={styles.image} />
                        </View>
                     </TouchableOpacity>
                  )
               }}
            />
            <FlatList
               // style={{flexGrow: 0}}
               // contentContainerStyle={{padding: SPACING}}
               showsVerticalScrollIndicator={false}
               data={popularFood}
               scrollEnabled={false}
               keyExtractor={item => item.key}
               renderItem={({item}) => {
                  return (
                     <View style={{flexDirection: 'row', alignItems: 'center', padding: SPACING}}>
                        <Image source={{uri: item.image}} style={styles.popularImage} />
                        <View style={{flex: 1}}>
                           <Text style={styles.popularType}>{item.type}</Text>
                           <View style={{flexDirection: 'row'}}>
                              <AntDesign 
                                 name='star'
                                 size={16}
                                 color={ORANGE}
                                 style={{marginRight: SPACING / 2}}
                              />
                              <Text style={{fontWeight: '700'}}>{item.rating}</Text>
                           </View>
                        </View>
                        <Text style={styles.popularPrice}>{item.price}</Text>
                     </View>
                  )
               }}
            />
         </SafeAreaView>
      </ScrollView>
   )
}

export default FoodList

const styles = StyleSheet.create({
   pill: {
      paddingHorizontal: SPACING,
      paddingVertical: SPACING / 2,
      borderRadius: 12
   },
   pillText: {
      fontWeight: '700'
   },
   popularType: {
      fontWeight: '800',
      fontSize: 16
   },
   popularImage: {
      height: 54,
      width: 54,
      resizeMode: 'contain',
      marginRight: SPACING,
   },
   popularPrice: {
      fontWeight: '800'
   },
   type: {
      fontWeight: '800', 
      fontSize: 22
   },
   subType: {
      fontSize: 12,
      opacity: 0.8,
   },
   image: {
      width: CELL_WIDTH * 0.7,
      height: CELL_WIDTH * 0.7,
      alignSelf: 'center',
      resizeMode: 'contain',
      position: 'absolute'
   }
})