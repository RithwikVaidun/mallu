import CollapsibleMenu from '@/components/CollapsibleMenu';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Path, Svg } from 'react-native-svg';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function OnboardingScreen() {
  const menuItems = [
    {
      id: '1',
      title: 'Explore',
      onPress: () => router.push('/explore'),
    },
    {
      id: '2',
      title: 'Settings',
      onPress: () => Alert.alert('Settings', 'Settings screen coming soon!'),
    },
    {
      id: '3',
      title: 'Help',
      onPress: () => Alert.alert('Help', 'Help screen coming soon!'),
    },
  ];

  const handleGetStarted = () => {
    router.push('/goals');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* App Icon */}
      <View style={styles.appIcon}>
        <Text style={styles.appIconText}>Vidya</Text>
      </View>

      {/* Main Text */}
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>
          <Text style={styles.blackText}>The app that let's you </Text>
          <Text style={styles.greenText}>speak</Text>
          <Text style={styles.blackText}> to your Grandma.</Text>
        </Text>
      </View>

      {/* CTA Button */}
      <TouchableOpacity style={styles.ctaButton} onPress={handleGetStarted}>
        <Text style={styles.ctaText}>Get Started</Text>
        <Svg width={20} height={20} viewBox="0 0 21 20" fill="none">
          <Path
            d="M6.5 3.5L13 10L6.5 16.5"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </TouchableOpacity>

      {/* Collapsible Menu */}
      <CollapsibleMenu menuItems={menuItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  appIcon: {
    width: 160,
    height: 160,
    borderRadius: 35.556,
    backgroundColor: '#0B322A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
    shadowColor: '#0F4C4C',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 40,
    elevation: 20,
    borderWidth: 1.778,
    borderColor: '#FFFFFF',
  },
  appIconText: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto',
    fontWeight: '700',
    fontSize: 44.444,
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: -1.778,
  },
  textContainer: {
    width: '100%',
    maxWidth: 280,
    marginBottom: 80,
  },
  mainText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 38,
  },
  blackText: {
    color: '#000000',
  },
  greenText: {
    color: '#0F4C4C',
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 362,
    height: 56,
    backgroundColor: '#0F4C4C',
    borderRadius: 100,
    paddingHorizontal: 18,
    gap: 10,
    shadowColor: '#39873C',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 14,
    elevation: 8,
  },
  ctaText: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 18,
    color: '#FFFFFF',
  },
});
