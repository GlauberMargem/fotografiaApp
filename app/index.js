import { useRouter } from 'expo-router';
import { useRef } from 'react';
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TelaA() {
    const router = useRouter();
    const flashAnim = useRef(new Animated.Value(0)).current;

    const tirarFoto = () => {
        Animated.sequence([
            Animated.timing(flashAnim, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(flashAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }),
        ]).start(() => {
            router.push('/fotografiaResenha');
        });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log('Imagem clicada')}>
                <Image
                    source={require('../assets/images/fotografaResenhakkk.webp')}
                    style={styles.imgFotografia}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoPersonalizado} onPress={tirarFoto}>
                <Text style={styles.textoBotao}>Clique para ser fotografado</Text>
            </TouchableOpacity>

            {}
            <Animated.View style={[styles.flashOverlay, { opacity: flashAnim }]} />
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
    flashOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        zIndex: 10,
        pointerEvents: 'none',
    },
});
