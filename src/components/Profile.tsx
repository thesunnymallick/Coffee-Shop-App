import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import profileIcon from '../assets/app_images/avatar.png';

const Profile = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={profileIcon} style={styles.profileIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginLeft: 24,
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  profileIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 50,
  },
});

export default Profile;
