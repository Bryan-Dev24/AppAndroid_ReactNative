import React, { useState } from 'react';
import { View, Button, Image, Alert, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

// Define o componente funcional
const ImagePickerComponent = () => {
    // Const para Armazenar a URI da imagem selecionada
    const [imageUri, setImageUri] = useState(null);

    //Função para solicitar permissão e abrir a galeria
    const selectImage = async () => {
        // Solicita permissão para acessar a galeria
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        // Verifica se a permissão foi concedida
        if (status !== granted) {
            Alert.alert('Permissão Negada', 'A permissão para acessar a galeria foi negada');
            return;
        }

        // Abre a galeria para seleção de imagem
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.mediaTypesOptions.Images, // Apenas Imagens
            allowEditing: true, // Permite edição básica
            quality: 1 // Qualidade da imagem (1 é a melhor)
        });

        // Verifica se o usuário cancelou a operação
        if (result.cancelled) {
            Alert.alert('Operação Cancelada', ' Você cancelou a seleção de imagem');
            return;
        }

        // Define a URI da imagem selecionada
        setImageUri(result.uri);
    };

    return (
        // Contêiner principal com estilo centralizado
        <View style={styles.container}>
            {/* Botão para selecionar imagem */}
            <Button title="Selecionar Imagem" onPress={selectImage} />

            {/* Exibe a imagem selecionada, se houver */}
            {imageUri && (
                <Image
                source={{ uri:imageUri }} // Fonte da imagem
                style={styles.image} //Estilo da imagem
                />
            )}
        </View>
    );
};

// Define os estilos utilizados no componente
const syles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa todo o espaço disponível
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff'
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
        borderRadius: 10
    }
});

export default ImagePickerComponent;