import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { BottomSheet } from 'src/components/BottomSheet/BottomSheet';
import FilterForm from 'src/components/form/FilterForm';

const profilePic = require('src/assets/main-page/main-image-background.png');
const menuIcon = require('src/assets/main-page/menu.png');
const heartIcon = require('src/assets/main-page/heart.png');
const commentIcon = require('src/assets/main-page/comment.png');
const loactionIcon = require('src/assets/main-page/loaction-icon.png');

const MainScreen = ({ navigation }) => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [clearFilters, setClearFilters] = useState(false);

  const hide = () => {
    setClearFilters(true);
    setShowBottomSheet(false);
  };

  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={profilePic} style={styles.mainImage}>
          <View style={styles.headerBlock} />
          <TouchableOpacity onPress={() => setShowBottomSheet(true)}>
            <Image source={menuIcon} style={styles.filterIcon} />
          </TouchableOpacity>

          <View style={{ flex: 1 }} />

          <LinearGradient colors={['rgba(0, 0, 0, 0) 0%', '#191919']}>
            <View style={styles.contentContainer}>
              <View style={{ flex: 1 }}>
                <Text style={styles.textName}>Emily, 24</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={loactionIcon} />
                  <Text style={styles.textLocation}>Paris</Text>
                </View>
                <Text style={styles.textDesc}>
                  Lorem ipsum dolor sit amet consectetur. Scelerisque nulla
                  tincid...
                </Text>
              </View>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                  <Image source={heartIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Image source={commentIcon} />
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>

      <BottomSheet show={showBottomSheet} height={500} onOuterClick={hide}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 29,
            paddingTop: 16,
          }}
        >
          <TouchableOpacity onPress={hide}>
            <Text style={styles.filterButton}>Cancel</Text>
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 16,
              color: '#fff',
            }}
          >
            Filter
          </Text>
          <TouchableOpacity onPress={hide}>
            <Text style={styles.filterButton}>Done</Text>
          </TouchableOpacity>
        </View>

        <FilterForm
          clearFilters={clearFilters}
          setClearFilters={setClearFilters}
        />
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  mainImage: { flex: 1, width: '100%' },
  filterIcon: {
    position: 'absolute',
    top: 69,
    right: 17,
  },
  headerBlock: {
    position: 'absolute',
    top: 0,
    height: 122,
    opacity: 0.05,
    backgroundColor: '#000',
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 80,
    paddingTop: 24,
    paddingBottom: 30,
    paddingHorizontal: 16,
  },
  textName: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 26,
  },
  textLocation: {
    fontWeight: '500',
    color: '#fff',
    fontSize: 14,
    marginTop: 8,
    marginBottom: 12,
    marginLeft: 6,
  },
  textDesc: {
    fontWeight: '500',
    color: '#fff',
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'column',
    marginLeft: 28,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
  },
  button: {
    width: 54,
    height: 54,
    backgroundColor: ' rgba(255, 255, 255, 0.18);',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  filterButton: {
    fontWeight: '500',
    fontSize: 16,
    color: '#ff9433',
  },
});

export default MainScreen;
