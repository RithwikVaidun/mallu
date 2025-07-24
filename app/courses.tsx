import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function CoursesScreen() {
  const courses = [
    {
      title: 'Course Title',
      subtitle: 'Course Title progress: Completed',
      progress: 100,
      image: '📖',
    },
    {
      title: 'Course Title',
      subtitle: 'Course Title progress: Completed',
      progress: 100,
      image: '📖',
    },
    {
      title: 'Course Title',
      subtitle: 'Course Title progress: Completed',
      progress: 100,
      image: '📖',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Courses</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="funnel" size={16} color="#FFFFFF" />
          <Text style={styles.filterText}>Course Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="funnel" size={16} color="#FFFFFF" />
          <Text style={styles.filterText}>Course Filter</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.coursesList}>
          {courses.map((course, index) => (
            <TouchableOpacity key={index} style={styles.courseCard}>
              <View style={styles.courseImage}>
                <Text style={styles.courseEmoji}>{course.image}</Text>
              </View>
              <View style={styles.courseContent}>
                <View style={styles.courseHeader}>
                  <TouchableOpacity>
                    <Ionicons name="play" size={16} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseSubtitle}>{course.subtitle}</Text>
                <View style={styles.progressContainer}>
                  <View style={styles.progressBar}>
                    <View 
                      style={[
                        styles.progressFill, 
                        { width: `${course.progress}%` }
                      ]} 
                    />
                  </View>
                </View>
              </View>
              <View style={styles.courseActions}>
                <TouchableOpacity>
                  <Ionicons name="chatbubbles" size={20} color="#FFFFFF" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="refresh" size={20} color="#FFFFFF" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="grid" size={20} color="#FFFFFF" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="person" size={20} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
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
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 12,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  filterText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  coursesList: {
    marginBottom: 100,
  },
  courseCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  courseImage: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  courseEmoji: {
    fontSize: 40,
  },
  courseContent: {
    flex: 1,
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  courseTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  courseSubtitle: {
    color: '#CCCCCC',
    fontSize: 14,
    marginBottom: 12,
  },
  progressContainer: {
    marginBottom: 12,
  },
  progressBar: {
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2CC061',
  },
  courseActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
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
