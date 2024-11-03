import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NovaDailyScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NovaDaily</Text>

      <View style={styles.iconContainer}>
        <Text style={styles.icon}>⚙️⚙️⚙️</Text>
        
        
      </View>

      <Text style={styles.sectionTitle}>Settings:</Text>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>1. Navigation</Text>
        <Text style={styles.text}>
          a. Clicking the “Daily Entry” button will direct you to a page where you can log your
          activities and accomplishments throughout the day, stimulating your self-confidence!
        </Text>
        <Text style={styles.text}>
          b. The “Past Entries” button will allow you to view past weeks’ logs, effectively plotting your growth and success.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>2. Purpose</Text>
        <Text style={styles.text}>
          a. Our mission is to encourage self-growth and allow users of our app to maintain
          healthy emotional, social, and mental states through an interactive experience.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  icon: {
    color: '#FF5733', // Orange color for gears
    fontSize: 24,
    marginRight: 10,
  },
  planetIcon: {
    color: '#A64AC9', // Purple color for planet
    fontSize: 40,
    marginRight: 10,
  },
  starIcon: {
    color: '#FFFFFF', // White color for stars
    fontSize: 24,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    color: '#D3D3D3',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
});

export default NovaDailyScreen;
