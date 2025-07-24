import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function TrialScreen() {
  const [selectedPlan, setSelectedPlan] = useState('yearly');

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Join over 10 users who already use Mallu</Text>
        
        <View style={styles.plansContainer}>
          <TouchableOpacity 
            style={[styles.planCard, selectedPlan === 'monthly' && styles.selectedPlan]}
            onPress={() => setSelectedPlan('monthly')}
          >
            <Text style={styles.planTitle}>Monthly</Text>
            <Text style={styles.planSubtitle}>Get full access for 30 days</Text>
            <View style={styles.planPricing}>
              <Text style={styles.planPrice}>$9.99 monthly</Text>
              <Text style={styles.planTotal}>$9.99/month</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.planCard, selectedPlan === 'yearly' && styles.selectedPlan]}
            onPress={() => setSelectedPlan('yearly')}
          >
            <Text style={styles.planTitle}>Yearly</Text>
            <Text style={styles.planSubtitle}>For those committed to long-term success, get yearly plan and save 33%</Text>
            <View style={styles.planPricing}>
              <Text style={styles.planPrice}>$4.99 yearly - $59.99</Text>
              <Text style={styles.planTotal}>$4.99/month</Text>
            </View>
            {selectedPlan === 'yearly' && (
              <Ionicons name="checkmark-circle" size={24} color="#2CC061" style={styles.checkmark} />
            )}
          </TouchableOpacity>
        </View>

        <Text style={styles.trialText}>Try 7 Days free. Cancel anytime.</Text>

        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Start My 7-Day FREE Trial</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  content: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 32,
  },
  plansContainer: {
    width: '100%',
    marginBottom: 30,
  },
  planCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: 'transparent',
    position: 'relative',
  },
  selectedPlan: {
    borderColor: '#2CC061',
    backgroundColor: '#F0FFF4',
  },
  planTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
  },
  planSubtitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
    lineHeight: 20,
  },
  planPricing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  planPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  planTotal: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F4C4C',
  },
  checkmark: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  trialText: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 30,
  },
  startButton: {
    backgroundColor: '#0F4C4C',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 25,
    width: '100%',
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
