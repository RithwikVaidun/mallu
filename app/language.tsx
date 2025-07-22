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

const LANGUAGES = [
  {
    id: 1,
    title: 'Malayalam',
    icon: 'language-outline',
  },
  {
    id: 2,
    title: 'Gujarati',
    icon: 'globe-outline',
  },
];

export default function LanguageScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState<number | null>(null);
  const router = useRouter();

  const handleLanguageSelect = (languageId: number) => {
    setSelectedLanguage(languageId);
  };

  const handleContinue = () => {
    if (selectedLanguage) {
      // Navigate to next onboarding step
      console.log('Selected language:', LANGUAGES.find(l => l.id === selectedLanguage)?.title);
      // For now, go back to home - you can change this to next onboarding step
      router.back();
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
          
          <Text style={styles.stepText}>3/6</Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressStep, styles.progressStepCompleted]} />
            <View style={[styles.progressStep, styles.progressStepCompleted]} />
            <View style={[styles.progressStep, styles.progressStepCompleted]} />
            <View style={[styles.progressStep, styles.progressStepInactive]} />
            <View style={[styles.progressStep, styles.progressStepInactive]} />
            <View style={[styles.progressStep, styles.progressStepInactive]} />
          </View>
        </View>

        {/* Content */}
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>
            Which language do you want to learn?
          </Text>

          <View style={styles.languagesList}>
            {LANGUAGES.map((language) => (
              <TouchableOpacity
                key={language.id}
                style={[
                  styles.languageOption,
                  selectedLanguage === language.id && styles.languageOptionSelected,
                ]}
                onPress={() => handleLanguageSelect(language.id)}
                activeOpacity={0.7}
              >
                <View style={styles.languageIcon}>
                  <Ionicons 
                    name={language.icon as any} 
                    size={24} 
                    color={selectedLanguage === language.id ? "#0F4C4C" : "#9D9D9D"} 
                  />
                </View>
                <Text style={[
                  styles.languageTitle,
                  selectedLanguage === language.id && styles.languageTitleSelected,
                ]}>
                  {language.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Continue Button */}
        <TouchableOpacity
          style={[
            styles.continueButton,
            !selectedLanguage && styles.continueButtonDisabled,
          ]}
          onPress={handleContinue}
          disabled={!selectedLanguage}
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
  languagesList: {
    gap: 10,
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 20,
    gap: 14,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  languageOptionSelected: {
    borderColor: '#0F4C4C',
  },
  languageIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#9D9D9D',
    lineHeight: 19,
    fontFamily: 'System',
  },
  languageTitleSelected: {
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