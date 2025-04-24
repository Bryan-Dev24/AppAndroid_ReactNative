import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Screen</Text>
            <View style={buttonContainer}>
                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6e6fa' // Cor de fundo da tela
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    },
    buttonContainer: {
        backgroundColor: '#dda0dd', // Cor de fundo do container do botão
        margin: 10,
        width: windowWidth * 0.5, // 50% da largura de tela
        borderRadius: 5
    }
});