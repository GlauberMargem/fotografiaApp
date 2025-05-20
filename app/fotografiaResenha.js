import { useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TelaB() {
    const router = useRouter();
    const fadeAnim = useRef(new Animated.Value(0)).current; 

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,              
            duration: 5000,        
            useNativeDriver: true,   
        }).start();
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log('Imagem clicada')}>
                <Animated.Image
                    source={require('../assets/images/mendigoSorrindo.jpeg')}
                    style={[styles.imgFotografia, { opacity: fadeAnim }]}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoPersonalizado} onPress={() => router.push('/')}>
                <Text style={styles.textoBotao}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
    },
    imgFotografia: {
        width: 400,
        height: 400,
        borderRadius: 10,
        marginBottom: 20,
    },
    botaoPersonalizado: {
        backgroundColor: '#3c3c3c',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
    },
});
