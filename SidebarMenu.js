import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, DrawerLayoutAndroid, TouchableHighlight, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SidebarMenu = () => {
  const drawerRef = useRef(null);
  const [isDarkMode, setDarkMode] = useState(false);

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  const closeDrawer = () => {
    drawerRef.current.closeDrawer();
  };

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={250}
      drawerPosition="left"
      renderNavigationView={() => (
        <View style={[styles.drawerContainer, isDarkMode && styles.darkDrawerContainer]}>
          <Text style={[styles.drawerItem, isDarkMode && styles.darkText]}>Menu Item 1</Text>
          <Text style={[styles.drawerItem, isDarkMode && styles.darkText]}>Menu Item 2</Text>
          <Text style={[styles.drawerItem, isDarkMode && styles.darkText]}>Menu Item 3</Text>
        </View>
      )}
    >
      <View style={[styles.container, isDarkMode && styles.darkContainer]}>
        <View style={[styles.header, isDarkMode && styles.darkContainer]}>
          <View style={styles.menuIconContainer}>
            <TouchableHighlight
              underlayColor="#f0f0f0"
              onPress={openDrawer}
              style={styles.menuIcon}
            >
              <MaterialIcons name="menu" size={24} color={isDarkMode ? 'white' : 'black'} />
            </TouchableHighlight>
            <Text style={[styles.menuText, isDarkMode && styles.darkText]}>Menu</Text>
          </View>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            style={styles.switch}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
        <Text>Main Content</Text>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
  },
  menuIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginTop: 20,
    marginRight: 5,
  },
  menuText: {
    marginTop: 20,
    fontSize: 18,
  },
  switch: {
    marginTop: 20,
    marginRight: 10,
  },
  drawerContainer: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  darkDrawerContainer: {
    backgroundColor: '#333',
  },
  drawerItem: {
    fontSize: 16,
    paddingVertical: 10,
  },
  darkText: {
    color: 'white',
  },
});

export default SidebarMenu;
