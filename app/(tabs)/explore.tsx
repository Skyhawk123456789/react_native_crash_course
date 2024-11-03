import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const NovaDaily: React.FC = () => {
    const [input, setInput] = useState('');

    const handleSubmit = async () => {
        if (!input) {
            Alert.alert("Please enter your accomplishment");
            return;
        }

        try {
            const response = await fetch('http://your-flask-backend-url/api/accomplishments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ accomplishment: input }),
            });

            const data = await response.json();
            if (response.ok) {
                Alert.alert("Success", "Your accomplishment has been logged!");
                setInput(''); // Clear input after successful submission
            } else {
                Alert.alert("Error", data.message || "Something went wrong.");
            }
        } catch (error) {
            Alert.alert("Error", "Network error, please try again.");
        }
    };

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
                Log Your Accomplishments Here!
            </Text>

            <TextInput
                style={{
                    height: 60,
                    borderColor: '#d0a0ff',
                    borderWidth: 2,
                    borderRadius: 10,
                    width: '100%',
                    paddingHorizontal: 10,
                    color: '#ffffff',
                    fontSize: 20,
                    marginBottom: 20
                }}
                placeholder="Type your accomplishment..."
                placeholderTextColor="#aaaaaa"
                value={input}
                onChangeText={setInput}
            />

            <Button title="Submit" onPress={handleSubmit} color="#9e42f5" />
            
            <Text style={{
                fontSize: 60,
                color: '#9e42f5',
                marginTop: 20
            }}>
                
    
        </View>
    );
};

export default NovaDaily;
