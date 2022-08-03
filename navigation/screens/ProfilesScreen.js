import * as React from 'react';
import { View, Text } from 'react-native';

export default function ProfilesScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Snap')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Profiles Screen</Text>
        </View>
    );
}