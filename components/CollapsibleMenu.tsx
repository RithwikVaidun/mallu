import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const { width: screenWidth } = Dimensions.get('window');

interface MenuItem {
  id: string;
  title: string;
  onPress: () => void;
}

interface CollapsibleMenuProps {
  menuItems: MenuItem[];
}

export default function CollapsibleMenu({ menuItems }: CollapsibleMenuProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleMenu = () => {
    const toValue = isExpanded ? 0 : 1;
    
    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    
    setIsExpanded(!isExpanded);
  };

  const menuHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, menuItems.length * 60],
  });

  const rotateIcon = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.container}>
      {/* Menu Items */}
      <Animated.View style={[styles.menuContainer, { height: menuHeight }]}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={item.onPress}
          >
            <Text style={styles.menuItemText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>

      {/* Menu Toggle Button */}
      <TouchableOpacity style={styles.toggleButton} onPress={toggleMenu}>
        <Text style={styles.toggleText}>Menu</Text>
        <Animated.View style={{ transform: [{ rotate: rotateIcon }] }}>
          <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
            <Path 
              d="M5 7.5L10 12.5L15 7.5" 
              stroke="white" 
              strokeWidth={2} 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </Svg>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 10,
    overflow: 'hidden',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  menuItem: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F4C4C',
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F4C4C',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 10,
    shadowColor: '#39873C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  toggleText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
