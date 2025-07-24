import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function ProgressScreen() {
  const progressPercentage = 87;
  const circumference = 2 * Math.PI * 60;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>2/6</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>We're building the best study plan to you.</Text>
        
        <View style={styles.progressContainer}>
          <View style={styles.progressCircle}>
            <Text style={styles.progressText}>{progressPercentage}%</Text>
          </View>
        </View>

        <Text style={styles.subtitle}>Get to know us</Text>

        <View style={styles.optionsContainer}>
          <View style={styles.option}>
            <Ionicons name="checkmark-circle" size={20} color="#2CC061" />
            <Text style={styles.optionText}>Analyzing your Mallu</Text>
          </View>
          <View style={styles.option}>
            <Ionicons name="checkmark-circle" size={20} color="#2CC061" />
            <Text style={styles.optionText}>Analyzing your Mallu</Text>
          </View>
          <View style={styles.option}>
            <Ionicons name="ellipse-outline" size={20} color="#FFFFFF" />
            <Text style={styles.optionText}>Analyzing your Mallu</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueText}>Continue</Text>
          <Ionicons name="chevron-forward" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </ScrollView>
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
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 32,
  },
  progressContainer: {
    marginBottom: 40,
  },
  progressCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  progressText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0F4C4C',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 30,
  },
  optionsContainer: {
    width: '100%',
    marginBottom: 40,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 12,
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2CC061',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 25,
    width: '100%',
  },
  continueText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 8,
  },
});
