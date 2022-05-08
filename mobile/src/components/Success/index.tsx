import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import successImg from '../../assets/success.png';
import { Copyright } from '../Copyright';

import { styles } from './styles';

interface Props {
    onRestartForm: () => void;
}

export function Success({ onRestartForm }: Props) {
    return (
        <View style={styles.container}>
            <Image
                source={successImg}
                style={styles.image}
            />

            <Text style={styles.title}>
                Agradecemos o feedback!
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={onRestartForm}
            >
                <Text style={styles.buttonTitle}>
                    Voltar para o início
                </Text>
            </TouchableOpacity>

            <Copyright />
        </View>
    );
}