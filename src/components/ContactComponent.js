import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet } from 'react-native';
import Zocial from '@expo/vector-icons/Zocial';
import * as Contacts from 'expo-contacts';

const ContactsComponent = () => {
    const [contacts, setContacts] = useState([]);

    const loadContacts = async () => {
        const { status } = await Contacts.requestPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert('Permissão Negada', 'A permissão para acessar contatos foi negada');
            return;
        }

        try {
            // Obtém todos os contatos do dispositivo
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers]
            });

            // Verifica se há contatos
            if (data.length > 0) {
                setContacts(data); //Atualiza o state com os contatos obtidos
            } else {
                Alert.alert('Sem contatos', 'Nenhum contato encontrado');
            }
        } catch (error) {
            // Trata possíveis erros na obtençao dos contatos
            Alert.alert('Erro', 'Ocorreu um erro ao carregar os contatos');
            console.log(error);
        }
    };

    // Executa a função de carregar contatos quando o componente é montado
    useEffect(() => { loadContacts(); }, []);

    // Função para renderizar cada item da lista de contatos
    const renderItem = ({ item }) => (
        <View style={styles.contactItem}>
            {/* Nome Completo do contato */}
            <Text style={styles.contactName}>
                {item.firstName} {item.lastName}
            </Text>

            {/* Lista de números de telefone do contato */}
            {item.PhoneNumbers && item.PhoneNumbers.map((phone, index) => (
                <View key={index} style={styles.contactDetailContainer}>
                    <Zocial name="call" size={16} color="#555 style={styles.icon}" />
                    <Text key={index} style={styles.contactDetail}>{phone.number}</Text>
                </View>
            ))}

            {/* Lista de emails do contato */}
            {item.emails && item.emails.map((email, index) => (
                <View key={index} style={styles.contactDetailContainer}>
                    <Zocial name="email" size={16} color="#555" style={styles.icon} />
                    <Text key={index} style={styles.contactDetail}>{email.email}</Text>
                </View>
            ))}
        </View>
    );
    
    return (
            // Contêiner principal com estilo de preenchimento
            <View style={styles.container}>
                {/* Botão para recarregar os contatos manualmente */}
                <Button title="Recarregar Contatos" onPress={loadContacts} />

                {/* Lista de contatos exibida usando  FlatList */}
                <FlatList
                    data={contacts} // Dados da lista
                    keyExtractor={(item) => item.id} // Chave única para cada item
                    renderItem={renderItem} // Função para renderizar cada item
                    contentContainerStyle={styles.list} // Estilo do conteúdo da lista
                />
            </View>
    );  
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    list: {
        marginTop: 20
    },
    contactItem: {
        padding: 15,
        borderBottomWidth: 1, // Linha de separação inferior
        borderColor: '#eee'
    },
    contactName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    contactDetail: {
        fontSize: 14,
        color: '#555',
        marginTop: 5
    },
    contactDetailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    icon: {
        marginRight: 10
    }
});

export default ContactsComponent;