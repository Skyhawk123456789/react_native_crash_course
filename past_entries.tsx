import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const NovaDaily: React.FC = () => {

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#1e1e1e',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20
        }}>
            <Text style={{
                fontSize: 28,
                color: '#d0a0ff',
                marginBottom: 20
            }}>
                NovaDaily
            </Text>

            <Text style={{
                fontSize: 100,
                color: '#9e42f5',
                marginBottom: 40
            }}>
                🪐
            </Text>

            <Text style={{
                fontSize: 24,
                color: '#ffffff',
                textAlign: 'center',
                marginBottom: 20
            }}>
                Your Past Entries:
            </Text>

           

            
            
            <Text style={{
                fontSize: 60,
                color: '#9e42f5',
                marginTop: 20
            }}>
                {/* Add content here if needed */}
            </Text>
        </View>
    );
};

export default NovaDaily;
