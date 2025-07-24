import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function ConversationsScreen() {
  const streakDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const currentStreak = 5;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, <Text style={styles.userName}>mamacita</Text></Text>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.streakContainer}>
        <View style={styles.streakHeader}>
          <Ionicons name="flame" size={20} color="#FF6B35" />
          <Text style={styles.streakText}>Learning streak</Text>
        </View>
        <Text style={styles.streakCount}>Current streak: {currentStreak}</Text>
        
        <View style={styles.streakDays}>
          {streakDays.map((day, index) => (
            <View 
              key={index} 
              style={[
                styles.streakDay, 
                index < currentStreak ? styles.streakDayActive : styles.streakDayInactive
              ]}
            >
              <Text style={[
                styles.streakDayText,
                index < currentStreak ? styles.streakDayTextActive : styles.streakDayTextInactive
              ]}>
                {day}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Conversations</Text>
        
        <Text style={styles.sectionSubtitle}>Your topics</Text>
        
        <View style={styles.conversationsList}>
          <View style={styles.conversationCard}>
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarText}>👤</Text>
            </View>
            <View style={styles.conversationInfo}>
              <Text style={styles.conversationName}>Meet a New Friend</Text>
              <Text style={styles.conversationStatus}>Not Completed</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#666666" />
          </View>

          <View style={styles.conversationCard}>
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarText}>👤</Text>
            </View>
            <View style={styles.conversationInfo}>
              <Text style={styles.conversationName}>Meet a New Friend</Text>
              <Text style={styles.conversationStatus}>Not Completed</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#666666" />
          </View>

          <View style={styles.conversationCard}>
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarText}>👤</Text>
            </View>
            <View style={styles.conversationInfo}>
              <Text style={styles.conversationName}>Meet a New Friend</Text>
              <Text style={styles.conversationStatus}>Not Completed</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#666666" />
          </View>

          <View style={styles.conversationCard}>
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarText}>👤</Text>
            </View>
            <View style={styles.conversationInfo}>
              <Text style={styles.conversationName}>Meet a New Friend</Text>
              <Text style={styles.conversationStatus}>Not Completed</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#666666" />
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubbles" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="refresh" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="grid" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F4C4C',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400',
  },
  userName: {
    fontWeight: '700',
  },
  streakContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  streakHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  streakText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  streakCount: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 16,
  },
  streakDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  streakDay: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  streakDayActive: {
    backgroundColor: '#FFFFFF',
  },
  streakDayInactive: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  streakDayText: {
    fontSize: 14,
    fontWeight: '600',
  },
  streakDayTextActive: {
    color: '#0F4C4C',
  },
  streakDayTextInactive: {
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  sectionSubtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 20,
  },
  conversationsList: {
    marginBottom: 100,
  },
  conversationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 20,
  },
  conversationInfo: {
    flex: 1,
  },
  conversationName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  conversationStatus: {
    color: '#CCCCCC',
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  navItem: {
    padding: 8,
  },
});
