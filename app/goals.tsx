import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const GOALS = [
  {
    id: 1,
    title: 'Travel or live abroad',
    icon: 'airplane-outline',
  },
  {
    id: 2,
    title: 'Accelerate my career',
    icon: 'trending-up-outline',
  },
  {
    id: 3,
    title: 'Talk to foreigners',
    icon: 'chatbubbles-outline',
  },
  {
    id: 4,
    title: 'Self improvement',
    icon: 'fitness-outline',
  },
  {
    id: 5,
    title: 'Speak arabic to my kids',
    icon: 'people-outline',
  },
  {
    id: 6,
    title: 'Other',
    icon: 'ellipsis-horizontal-outline',
  },
];

export default function GoalsScreen() {
  const [selectedGoal, setSelectedGoal] = useState<number | null>(null);
  const router = useRouter();

  const handleGoalSelect = (goalId: number) => {
    setSelectedGoal(goalId);
  };

  const handleContinue = () => {
    if (selectedGoal) {
      // Navigate to language selection page
      console.log('Selected goal:', GOALS.find(g => g.id === selectedGoal)?.title);
      router.push('/language');
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" />
      
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          
          <Text style={styles.stepText}>2/6</Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressStep, styles.progressStepCompleted]} />
            <View style={[styles.progressStep, styles.progressStepCompleted]} />
            <View style={[styles.progressStep, styles.progressStepInactive]} />
            <View style={[styles.progressStep, styles.progressStepInactive]} />
            <View style={[styles.progressStep, styles.progressStepInactive]} />
            <View style={[styles.progressStep, styles.progressStepInactive]} />
          </View>
        </View>

        {/* Content */}
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>
            Why do you want to get better at speaking Malayalam?
          </Text>

          <View style={styles.goalsList}>
            {GOALS.map((goal) => (
              <TouchableOpacity
                key={goal.id}
                style={[
                  styles.goalOption,
                  selectedGoal === goal.id && styles.goalOptionSelected,
                ]}
                onPress={() => handleGoalSelect(goal.id)}
                activeOpacity={0.7}
              >
                <View style={styles.goalIcon}>
                  <Ionicons 
                    name={goal.icon as any} 
                    size={24} 
                    color={selectedGoal === goal.id ? "#0F4C4C" : "#9D9D9D"} 
                  />
                </View>
                <Text style={[
                  styles.goalTitle,
                  selectedGoal === goal.id && styles.goalTitleSelected,
                ]}>
                  {goal.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Continue Button */}
        <TouchableOpacity
          style={[
            styles.continueButton,
            !selectedGoal && styles.continueButtonDisabled,
          ]}
          onPress={handleContinue}
          disabled={!selectedGoal}
          activeOpacity={0.8}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
          <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 24,
  },
  backButton: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    fontFamily: 'System',
  },
  progressContainer: {
    marginBottom: 40,
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 4,
  },
  progressStep: {
    flex: 1,
    height: 4,
    borderRadius: 100,
  },
  progressStepCompleted: {
    backgroundColor: '#0F4C4C',
  },
  progressStepInactive: {
    backgroundColor: 'rgba(27, 80, 137, 0.1)',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    lineHeight: 30,
    marginBottom: 40,
    fontFamily: 'System',
  },
  goalsList: {
    gap: 10,
  },
  goalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 20,
    gap: 14,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  goalOptionSelected: {
    borderColor: '#0F4C4C',
  },
  goalIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#9D9D9D',
    lineHeight: 19,
    fontFamily: 'System',
  },
  goalTitleSelected: {
    color: '#0F4C4C',
    fontWeight: '600',
  },
  continueButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F4C4C',
    borderRadius: 100,
    paddingVertical: 18,
    gap: 10,
    marginTop: 20,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(57, 135, 60, 0.2)',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 14,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  continueButtonDisabled: {
    opacity: 0.6,
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    fontFamily: 'System',
  },
}); 