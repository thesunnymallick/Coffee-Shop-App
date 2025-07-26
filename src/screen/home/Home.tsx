import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../../components/Header';
import Profile from '../../components/Profile';
import { COLORS, FONTFAMILY, FONTSIZE } from '../../theme/theme';
import { Categories } from './homeScreenTypes';
import CoffeeData from '../../data/CoffeeData';
import CardItem from './CardItem';




const Home = () => {
  
  const [category, setCategory]=useState("All")

  const allCategories: Categories[] = [
    {
      id: 0,
      name: 'All',
    },
    {
      id: 1,
      name: 'Americano',
    },
    {
      id: 2,
      name: 'Black Coffee',
    },

    {
      id: 3,
      name: 'Cappucchino',
    },
    {
      id: 4,
      name: 'Espresso',
    },
    {
      id: 5,
      name: 'Latte',
    },
    {
      id: 6,
      name: 'Macchiato',
    },
    {
      id: 7,
      name: '',
    },
  ];



  return (
    <SafeAreaView style={styles.container}>
      <Profile />
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.headerTitle}>
            {'Find the best \ncoffee for you'}
          </Text>
          <View style={{ marginTop: 28 }}>
            <TextInput style={styles.input} placeholder="Find your coffee..." />
          </View>
          <View style={styles.categoriesContainer}>
            <FlatList
              data={allCategories}
              keyExtractor={item => item?.id?.toString()}
              horizontal
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity 
                   onPress={()=>setCategory(item.name)}
                  key={item.id}>
                      <Text style={[styles.categoryItem ,  category===item.name && styles.selectCategoryItem ]}>{item.name}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          
          <View>
            <FlatList
             data={CoffeeData}
             keyExtractor={item=>item.id}
             renderItem={({item})=>{
              return (
                <CardItem key={item.id} item={item}/>
              )
             }}
            
            
            />
          </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  contentContainer: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  headerTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    lineHeight: 36,
    color: COLORS.primaryWhiteHex,
  },

  input: {
    paddingHorizontal: 24,
    height: 45,
    borderRadius: 15,
    backgroundColor: COLORS.primaryDarkGreyHex,
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.poppins_medium,
    lineHeight: 20,
    color: COLORS.primaryWhiteHex,
  },

  categoriesContainer: {
    marginTop: 28,
  },
  categoryItem:{
   fontSize:FONTSIZE.size_14,
   lineHeight:20,
   fontFamily:FONTFAMILY.poppins_semibold,
   color:COLORS.primaryLightGreyHex,
   marginRight:20,
  },
  selectCategoryItem:{
   color:COLORS.primaryOrangeHex,
   textDecorationLine:"underline",
  },

  coffeContainer:{
   marginTop:24,
  }


});

export default Home;
