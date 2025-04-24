import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const windowWidth function HomeScreen({ navigation }) {
    return(
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.title}>Home Screen</Text>
            <View style={StyleSheet.buttonContainer}>
                <Button 
                    title="Go to Details"
                    onPress={() => navigation.navigate('Profile')}
                />
            </View>
            <View style={StyleSheet.buttonContainer}>
                <Button
                    title="Go to Profile"
                    onPress={() => navigation.navigate('Profile')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff' //Cor de fundo da tela
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    },
    buttonContainer: {
        backgroundColor: '#add8e6', //Cor de fundo do container do botão
        margin: 10,
        width: windowWidth * 0.5, //50% da largura da tela
        borderRadius: 5
    }
})