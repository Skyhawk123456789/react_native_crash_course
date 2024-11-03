import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';

const NovaDaily: React.FC = () => {
  const navigation = useNavigation();
    return (
        <View style={styles.appContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>NovaDaily</Text>
                <Text style={styles.iconPlanet}>🪐</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.entryContainer}>
                <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('explore')} // Make sure this matches the name in your TabLayout
      >
                        <Text style={styles.buttonText}>Daily Entry 🔥</Text>
                    </TouchableOpacity>
                    <Text style={styles.description}>Log Your Daily Activities & Discover Your Potential</Text>
                </View>

                <View style={styles.entryContainer}>
                    <TouchableOpacity style={[styles.button, styles.pastEntries]}>
                        <Text style={styles.buttonText}>Past Entries 📈</Text>
                    </TouchableOpacity>
                    <Text style={styles.description}>View Your Past Entries and Trends</Text>
                </View>

                <View style={styles.entryContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('settings')}>
                        <Text style={styles.buttonText}>Settings ⚙️</Text>
                    </TouchableOpacity>
                    <Text style={styles.description}>
                        Need Help? Have Questions? No Problem! Ask Our User-Friendly Bot for Suggestions on How to Improve Your Day!
                    </Text>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.profileButton}>
                    <Text style={styles.footerText}>Profile</Text>
                </TouchableOpacity>
                <Text style={styles.iconCalendar}>📅</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        backgroundColor: '#1e1e1e',
        padding: 20,
        maxWidth: 400,
        margin: 'auto',
        borderRadius: 10,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        position: 'relative',
    },
    title: {
        color: '#d0a0ff',
    },
    iconPlanet: {
        fontSize: 36,
        position: 'absolute',
        top: 10,
        right: 10,
    },
    content: {
        marginTop: 20,
    },
    entryContainer: {
        marginVertical: 20,
    },
    button: {
        backgroundColor: '#9e42f5',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    dailyEntry: {
        shadowColor: 'rgba(255, 0, 0, 0.4)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
    },
    pastEntries: {
        shadowColor: 'rgba(0, 102, 204, 0.4)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
    },
    settings: {
        shadowColor: 'rgba(153, 102, 204, 0.4)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
    },
    description: {
        color: '#b8b8b8',
        fontSize: 14,
        marginTop: 8,
        textAlign: 'center',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,
    },
    profileButton: {
        borderColor: '#b8b8b8',
        borderWidth: 1,
        padding: 5,
        borderRadius: 4,
    },
    footerText: {
        color: '#b8b8b8',
        fontSize: 16,
    },
    iconCalendar: {
        fontSize: 24,
    },
});

export default NovaDaily;
