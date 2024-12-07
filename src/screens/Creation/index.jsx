import React from 'react';
import { styles } from './styles';
import { View, Text } from 'react-native';
import main from '../../assets/styles/main';

const Creation = () => {
    return (
        <View style={styles.container}>
            <Text style={main.textBold}>Create Task Screen</Text>
        </View>
    );
};

export default Creation;